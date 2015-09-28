import React, { Component, PropTypes } from 'react';
import { findDOMNode } from 'react-dom';
import { Link } from 'react-router';
import ActiveLot from '../ActiveLot/ActiveLot';
import LotImage from '../LotImage/LotImage';
import i18n from 'i18next-client';
import Top from '../Top/Top';
import Footer from '../Footer/Footer';
import MainHeader from '../MainHeader/MainHeader';
import LotItem from '../LotItem/LotItem';
import LotHistory from '../LotHistory/LotHistory';
import LotSlider from '../LotSlider/LotSlider';
import Timer from '../Timer/Timer';
import * as utils from '../../utils';

if (process.env.BROWSER) {
  require('./_Lot.scss');
}

class Lot extends Component {
  static propTypes = {
    listData: PropTypes.object.isRequired,
    language: PropTypes.string.isRequired,
    user: PropTypes.object.isRequired,
    onAddHandler: PropTypes.func,
    onAddBid: PropTypes.func,
    onSold: PropTypes.func,
    onAddBidAdmin: PropTypes.func,
    onDeleteHandler: PropTypes.func
  }
  static defaultProps = {
    onAddHandler: () => {},
      onDeleteHandler: () => {},
  }
  _onSold(e) {
    const { onSold } = this.props;
    e.preventDefault();
    if(this.userAdmin === true){
      onSold({
        lotId: e.target.dataset.id || 1
      });
    }
  }
  _onAddBid(e) {
    const { onAddBid, onAddBidAdmin } = this.props;
    const newPrice = findDOMNode(this.refs.todoInput).value;
    e.preventDefault();
    if(this.userAdmin === true){
      const lastname = findDOMNode(this.refs.lastnameInput).value;
      if(!lastname || !lastname.length){
        if(typeof alert === 'function'){
          return alert('Сначала введите имя участника');
        }
      }
      onAddBidAdmin({
        userId: e.target.dataset.userId,
        lastname: lastname,
        lotId: e.target.dataset.id || 1,
        price: newPrice
      });
    } else {
      if(confirm('Делая ставку, вы обязуетесь выкупить лот по указанной Вами цене. Вы готовы оплатить '+newPrice+' руб?')){
        onAddBid({
          userId: e.target.dataset.userId,
          lotId: e.target.dataset.id || 1,
          price: newPrice
        });
        setTimeout(function(){
          location.reload();
        }, 1000)
      }
    };
  }
  _onItemDeleteHandler(e) {
    const { onDeleteHandler } = this.props;
    const id = Number(e.target.dataset.id);
    e.preventDefault();
    onDeleteHandler(id);
  }
  _renderListItem() {
    const { listData } = this.props;
    var listDataFiltered = listData.skip(1).take(3);
    return listDataFiltered.map((item, index) => {
      var divStyle = {
        backgroundImage: 'url(' + item.get('image') + ')'
      }
      return (
        <LotItem key={index} item={item} {...this.props} />
      );
    });
  }
  _renderItem() {
    const { listData, params: { index } } = this.props;
    var item = listData.find(function(el){
      return el.get('id') == index
    })
    this.lotphotos = item.get('lotphotos');
    var bid = (<div></div>);
    var user = (this.props.user && this.props.user.body && this.props.user.body.toObject) ? this.props.user.body.toObject() : this.props.user.body;
    var admin = (<div></div>);
    if(item.get('status') === 'active'){
      var canShowMakeBid = typeof localStorage !== 'undefined' && localStorage.getItem('email');
      if(canShowMakeBid){
        var value = parseInt(parseInt(item.get('lastPrice') || item.get('askPrice'))*1.1);
        bid = (
          <div>
            <div className="bidMain">
              <div className="bid">
                <div className="bidWrap">
                  <div className="text">
                    {i18n.t('lot.rules')} <a href="/conditions" target="_blank">{i18n.t('lot.rulesLink')}</a>
                  </div>
                  <div className="inputWrap">
                    <input type="text" defaultValue={value} ref="todoInput"/>
                  </div>
                  <div className="rub">
                    ₽
                  </div>
                  <div className='button'>
                    <a data-id={item.get('id')} data-user-id={user.id} onClick={this._onAddBid.bind(this)}>
                      {i18n.t('lot.bid')}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      } else {
        bid = (
          <div className="bidMain">
            <div className="bid">
              <div className="bidWrap">
                <div className="text">
                  {i18n.t('lot.rules')} <a href="/conditions" target="_blank">{i18n.t('lot.rulesLink')}</a>
                </div>
                <div className='button'>
                  <Link className="nav-item" to="/auth">
                    {i18n.t('login.loginToBid')}
                  </Link>
                </div>
              </div>
            </div>
          </div>
        );
      }

    }
    this.userAdmin = user.userGroup === 1;
    if(user.userGroup === 1){
      var admin = (
        <div className="bidMain red">
          <h2>Панель Администратора</h2>
          <div className="bid">
            <div className="bidWrap">
              <div className="text">
                Введите произвольное имя участника, и нажмите "Сделать ставку", затем нажмите "Продан досрочно"
              </div>
              <div className="inputWrap">
                <input type="text" placeholder="Имя участника" ref="lastnameInput"/>
              </div>
              <div className='button'>
                <a data-id={item.get('id')} data-user-id={user.id} onClick={this._onSold.bind(this)}>
                  {item.get('status')!== 'sold' ? 'Продать досрочно' : 'Запустить торги'}
                </a>
              </div>
            </div>
          </div>
        </div>
      );
    };
    var timerOrSold = (
      <Timer endDateTime={item.get('endDateTime')} />
    );
    var soldButton = (
      <div></div>
    );
    if(item.get('status') === 'sold'){
      timerOrSold = (
        <div className="endTimeWrap">
        </div>
      );
      soldButton = (
        <div className="sold">
          <Link className="nav-item" to={`/lot/${item.get('id')}`}>
            {i18n.t('header.sold')}
          </Link>
          <div className="winner">
            <div>
              {i18n.t('header.winner')}
            </div>
            <div>
              {utils.shortFullName(item.get('name'), this.props.language === 'eng')}
            </div>
          </div>
        </div>
      );
    }
    return (
      <div className="lotDescription">
        <LotSlider item={item} language={this.props.language} lotphotos={this.lotphotos} />
        {(utils.isTimeOver(item.get('endDateTime')) && user.userGroup !== 1) ? (<p></p>) : bid}
        {admin}
        <div className="description">
          <div className="row">
            <div className='leftCol'>
              <div className="id">
                {i18n.t('lot.lotNumber')}{item.get('id')}
              </div>
              <div className="title">
                {item.get('title_'+this.props.language)}
              </div>
              <div className="from">
                {item.get('lotFrom_'+this.props.language)}
              </div>
              <div className="text">
                {item.get('lotText_'+this.props.language)}
              </div>
            </div>
            <div className="rightCol">
              <div className="startCost">
                {item.get('lastPrice') ? utils.rub(item.get('askPrice')) : ''}
              </div>
              <div className="nowCost">
                {utils.rub(item.get('lastPrice') || item.get('askPrice'))}
              </div>
              <div className="name">
                {utils.shortFullName(item.get('name'), this.props.language === 'eng')}
              </div>
              {timerOrSold}
              <LotHistory language={this.props.language} item={item}/>
              {soldButton}
            </div>
          </div>
        </div>
      </div>
    );
  }
  render() {
    var user = (this.props.user && this.props.user.body && this.props.user.body.toObject) ? this.props.user.body.toObject() : { body: {}};
    return (
      <div className="Lot">
        <MainHeader mini={true} />
          <div className="constraint">
          <Top user={user}  onUserExit={this.props.onUserExit}/>
          <ul className='items'>
            {this._renderItem()}
          </ul>
          <div className="social-likes" data-counters="no">
            <div className="facebook" title="Поделиться ссылкой на Фейсбуке">Facebook</div>
            <div className="twitter" title="Поделиться ссылкой в Твиттере">Twitter</div>
            <div className="vkontakte" title="Поделиться ссылкой во Вконтакте">Вконтакте</div>
            <div className="odnoklassniki" title="Поделиться ссылкой в Одноклассниках">Одноклассники</div>
            <div className="plusone" title="Поделиться ссылкой в Гугл-плюсе">Google+</div>
          </div>
          <h4>
            {i18n.t('lot.other')}
          </h4>
          <ul className='items'>
            {this._renderListItem()}
          </ul>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Lot;
