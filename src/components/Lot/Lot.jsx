import React, { Component, PropTypes, findDOMNode } from 'react';
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
    listData: PropTypes.array.isRequired,
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
    console.info(this.prod);
    const { onSold } = this.props;
    e.preventDefault();
    if(this.userAdmin === true){
      onSold({
        lotId: e.target.dataset.id || 1
      });
    }
  }
  _onAddBid(e) {
    console.info(this.prod);
    const { onAddBid, onAddBidAdmin } = this.props;
    const newPrice = findDOMNode(this.refs.todoInput).value;
    e.preventDefault();
    console.info('id = ', e.target.dataset.userId);
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
    var listDataFiltered = listData.slice(1,4);
    return listDataFiltered.map((itemMap, index) => {
      var item = itemMap.toObject ? itemMap.toObject() : itemMap;
      var divStyle = {
        backgroundImage: 'url('+item.image+')'
      }
      return (
        <LotItem key={index} item={item} {...this.props} />
      );
    });
  }
  _renderItem() {
    const { listData, location: { query: {index}} } = this.props;
    var item = {};
    listData.filter(function(itemList){
      var foundItem = itemList.toObject ? itemList.toObject() : itemList;
      if(foundItem.id == index){
        item = foundItem;
      }
    })
    this.lotphotos = item.lotphotos.toJS ? item.lotphotos.toJS() : item.lotphotos;
    var bid = (<div></div>);
    var user = (this.props.user && this.props.user.body && this.props.user.body.toObject) ? this.props.user.body.toObject() : this.props.user.body;
    var admin = (<div></div>);
    if(item.status === 'active'){
      var value = parseInt(parseInt(item.lastPrice || item.askPrice)*1.1);
      if(typeof localStorage !== 'undefined' && localStorage.getItem('email')){
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
                    <a data-id={item.id} data-user-id={user.id} onClick={this._onAddBid.bind(this)}>
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
                <a data-id={item.id} data-user-id={user.id} onClick={this._onSold.bind(this)}>
                  {item.status !== 'sold' ? 'Продать досрочно' : 'Запустить торги'}
                </a>
              </div>
            </div>
          </div>
        </div>
      );
    };
    var timerOrSold = (
      <Timer endDateTime={item.endDateTime} />
    );
    if(item.status === 'sold'){
      timerOrSold = (
        <div className="endTimeWrap">
          {i18n.t('lot.sold')}
        </div>
      );
    }
    return (
      <div className="lotDescription">
        <LotSlider item={item} language={this.props.language} lotphotos={this.lotphotos} />
        {/*<LotImage img={item.cover}/>*/}
        {bid}
        {admin}
        <div className="description">
          <div className="row">
            <div className='leftCol'>
              <div className="id">
                {i18n.t('lot.lotNumber')}{item.id}
              </div>
              <div className="title">
                {item['title_'+this.props.language]}
              </div>
              <div className="from">
                {item['lotFrom_'+this.props.language]}
              </div>
              <div className="text">
                {item['lotText_'+this.props.language]}
              </div>
            </div>
            <div className="rightCol">
              <div className="startCost">
                {item.lastPrice ? utils.rub(item.askPrice) : ''}
              </div>
              <div className="nowCost">
                {utils.rub(item.lastPrice || item.askPrice)}
              </div>
              <div className="name">
                {utils.shortFullName(item.name, this.props.language === 'eng')}
              </div>
              {timerOrSold}
              <LotHistory language={this.props.language} item={item}/>
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
        <Footer />
      </div>
    );
  }
}

export default Lot;
