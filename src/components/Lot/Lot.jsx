import React, { Component, PropTypes, findDOMNode } from 'react';
import { Link } from 'react-router';
import ActiveLot from '../ActiveLot/ActiveLot';
import LotImage from '../LotImage/LotImage';
import i18n from 'i18next-client';
import Top from '../Top/Top';
import Footer from '../Footer/Footer';
import MainHeader from '../MainHeader/MainHeader';
import LotItem from '../LotItem/LotItem';
import * as utils from '../../utils';

if (process.env.BROWSER) {
  require('./_Lot.scss');
}

class Lot extends Component {
  static propTypes = {
    listData: PropTypes.array.isRequired,
    language: PropTypes.string.isRequired,
    onAddHandler: PropTypes.func,
    onAddBid: PropTypes.func,
    onDeleteHandler: PropTypes.func
  }
  static defaultProps = {
    onAddHandler: () => {},
      onDeleteHandler: () => {},
  }
  _onAddBid(e) {
    const { onAddBid } = this.props;
    const newPrice = findDOMNode(this.refs.todoInput).value;
    e.preventDefault();
    onAddBid({
      userId: 2,
      lotId: e.target.dataset.id,
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
      bid = (
        <div className="bidMain">
          <div className="bid">
            <div className="bidWrap">
              <div className="text">
                {i18n.t('lot.rules')}
                <a>
                  {i18n.t('lot.rulesLink')}
                </a>
              </div>
              <div className="inputWrap">
                <input ref="todoInput" value={value}/>
              </div>
              <div className="rub">
                ₽
              </div>
              <div className='button'>
                <a data-id={item.id} onClick={this._onAddBid.bind(this)}>
                  {i18n.t('lot.bid')}
                </a>
              </div>
            </div>
          </div>
        </div>
      );

    }
    return (
      <div className="lotDescription">
        <LotImage img={item.cover}/>
        {bid}
        <div className="description">
          <div className='leftCol'>
            <div className="id">
              {item.id}
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
              <div className="endTime">
                {utils.endTime(item.endDateTime)}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  render() {
    return (
      <div className="Lot">
        <MainHeader mini={true} />
        <Top />
        <ul className='items'>
          {this._renderItem()}
        </ul>
        <h4>
          Прочие лоты
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
