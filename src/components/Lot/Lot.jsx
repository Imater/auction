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
import * as utils from '../../utils';

if (process.env.BROWSER) {
  require('./_Lot.scss');
}

class Lot extends Component {
  state = {
     time: '12:52'
  };

  componentDidMount() {
    this.interval = setInterval(this.tick.bind(this), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  tick () {
    var time = new Date(Date.now());
    var tm = ("0" + time.getMinutes()).slice(-2) + ":" +
    ("0" + time.getSeconds()).slice(-2);
    this.setState({time: tm});
  }
  static propTypes = {
    listData: PropTypes.array.isRequired,
    language: PropTypes.string.isRequired,
    user: PropTypes.object.isRequired,
    onAddHandler: PropTypes.func,
    onAddBid: PropTypes.func,
    onDeleteHandler: PropTypes.func
  }
  static defaultProps = {
    onAddHandler: () => {},
      onDeleteHandler: () => {},
  }
  _onAddBid(e) {
    console.info(this.prod);
    const { onAddBid } = this.props;
    const newPrice = findDOMNode(this.refs.todoInput).value;
    e.preventDefault();
    console.info('id = ', e.target.dataset.userId);
    onAddBid({
      userId: e.target.dataset.userId,
      lotId: e.target.dataset.id || 1,
      price: newPrice
    })
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
    var bid = (<div></div>);
    if(item.status === 'active'){
      var value = parseInt(parseInt(item.lastPrice || item.askPrice)*1.1);
      var user = (this.props.user && this.props.user.body && this.props.user.body.toObject) ? this.props.user.body.toObject() : this.props.user.body;
      if(typeof localStorage !== 'undefined' && localStorage.getItem('email')){
        bid = (
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
    return (
      <div className="lotDescription">
        <LotImage img={item.cover}/>
        {bid}
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
                {utils.shortFullName(item.name)}
              </div>
              <div className="endTimeWrap">
                <div className="clock">
                </div>
                <a className="endTime" title="Время до окончания торгов">
                  {utils.endTime(item.endDateTime)}
                </a>
              </div>
              <LotHistory item={item}/>
            </div>
          </div>
        </div>
      </div>
    );
  }
  render() {
    var user = (this.props.user && this.props.user.body && this.props.user.body.toObject) ? this.props.user.body.toObject() : { body: {}};
    var slider = (
        <div className='slider'>
          <div className='slider-viewport'>
            <div className='slider-arrow slider-arrow--prev'></div>
            <div className='slider-arrow slider-arrow--next'></div>
            <div className='slider-dots'>
              <div className='slider-dot is-active'></div>
              <div className='slider-dot'></div>
              <div className='slider-dot'></div>
              <div className='slider-dot'></div>
              <div className='slider-dot'></div>
              <div className='slider-dot'></div>
            </div>
            <div className='slider-area'>
              <div className='slider-item' style={{backgroundImage: 'url(/uploads/01.jpg)'}}>
                <div className='slider-overlay'></div>
                <div className='slider-title'>
                  Самый крупный и представительный медведь Долины гейзеров, который еще в 90-е годы, подобно российским воротилам бизнеса, приватизировал лучшие участки. На пастбищах Долины этот косолапый «авторитет» держится с большим достоинством, никого не боится, и вынуждает соперников ходить по струнке.
                </div>
              </div>
              <div className='slider-item' style={{backgroundImage: 'url(/uploads/02.jpg)'}}>
                <div className='slider-overlay'></div>
                <div className='slider-title'>
                  Самый крупный и представительный медведь Долины гейзеров, который еще в 90-е годы, подобно российским воротилам бизнеса, приватизировал лучшие участки. На пастбищах Долины этот косолапый «авторитет» держится с большим достоинством, никого не боится, и вынуждает соперников ходить по струнке.
                </div>
              </div>
              <div className='slider-item' style={{backgroundImage: 'url(/uploads/03.jpg)'}}>
                <div className='slider-overlay'></div>
                <div className='slider-title'>
                  Самый крупный и представительный медведь Долины гейзеров, который еще в 90-е годы, подобно российским воротилам бизнеса, приватизировал лучшие участки. На пастбищах Долины этот косолапый «авторитет» держится с большим достоинством, никого не боится, и вынуждает соперников ходить по струнке.
                </div>
              </div>
            </div>
          </div>
        </div>
    );
    return (
      <div className="Lot">
        <MainHeader mini={true} />
        <Top user={user}  onUserExit={this.props.onUserExit}/>
        <ul className='items' time={this.state.time}>
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
