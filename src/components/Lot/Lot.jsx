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
    onDeleteHandler: PropTypes.func
  }
  static defaultProps = {
    onAddHandler: () => {},
      onDeleteHandler: () => {}
  }
  _onItemAddedHandler(e) {
    const { onAddHandler } = this.props;
    const newText = findDOMNode(this.refs.todoInput).value;
    e.preventDefault();
    findDOMNode(this.refs.todoInput).value = '';
    onAddHandler(newText);
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
    return (
      <div className="lotDescription">
        <LotImage img={item.cover}/>
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
              {utils.rub(item.askPrice)}
            </div>
            <div className="nowCost">
              {utils.rub(item.lastPrice)}
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
