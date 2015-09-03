import React, { Component, PropTypes, findDOMNode } from 'react';
import { Link } from 'react-router';
import i18n from 'i18next-client';
import * as utils from '../../utils';

if (process.env.BROWSER) {
  require('./_LotItem.scss');
}

class LotItem extends Component {
  static propTypes = {
    listData: PropTypes.array.isRequired,
    language: PropTypes.string.isRequired,
    item: PropTypes.object.isRequired
  }
  render() {
    const { item, listData, language } = this.props;
    var divStyle = {
      backgroundImage: 'url(/uploads/small/'+item.cover+')'
    };
    var button = (<div></div>);
    var name = (
      <div className="name">
         {utils.shortFullName(item.name, language === 'eng')}
       </div>
    );
    if(item.status === 'active') {
      button = (
        <div className="accept">
          <Link className="nav-item" to="/lot" query={{index: item.id}}>
            {i18n.t('header.accept')}
          </Link>
        </div>
      );
    } else if(item.status === 'sold') {
      name = (<div></div>);
      button = (
        <div className="sold">
          <Link className="nav-item" to="/lot" query={{index: item.id}}>
            {i18n.t('header.sold')}
          </Link>
          <div className="winner">
            <div>
              {i18n.t('header.winner')}
            </div>
            <div>
              {utils.shortFullName(item.name, language === 'eng')}
            </div>
          </div>
        </div>
      );
    } else {
      button = (
        <div className="openTime">
          {utils.timeRest(item.startDateTime, language)}
        </div>
      );
    }
    return (
      <li className='LotItem' key={item.id}>
        <Link className="nav-item" to="/lot" query={{index: item.id}}>
          <div className='itemWrap'>
            <div className='imageWrap' style={divStyle}>
            </div>
            <div className="id">
              {i18n.t('lot.lotNumber')}{item.id}
            </div>
            <div className="title">
              {item['title_'+language]}
            </div>
            <div className="from">
              {item['lotFrom_'+language]}
            </div>
            <div className="startCost">
              {item.lastPrice ? utils.rub(item.askPrice) : ''}
            </div>
            <div className="nowCost">
              {utils.rub(item.lastPrice || item.askPrice)}
            </div>
            {name}
          </div>
        </Link>
        {button}
      </li>
    );
  }
}

export default LotItem;
