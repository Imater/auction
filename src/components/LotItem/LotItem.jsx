import React, { Component, PropTypes } from 'react';
import { findDOMNode } from 'react-dom';
import { Link } from 'react-router';
import i18n from 'i18next-client';
import * as utils from '../../utils';

if (process.env.BROWSER) {
  require('./_LotItem.scss');
}

class LotItem extends Component {
  static propTypes = {
    listData: PropTypes.object.isRequired,
    language: PropTypes.string.isRequired,
    item: PropTypes.object.isRequired
  }
  render() {
    const { item, listData, language } = this.props;
    var divStyle = {
      backgroundImage: 'url(/uploads/small/'+item.get('cover')+')'
    };
    var button = (<div></div>);
    var name = (
      <div className="name">
         {utils.shortFullName(item.get('name'), language === 'eng')}
       </div>
    );
    if(item.get('status') === 'active' && !utils.isTimeOver(item.get('endDateTime'))) {
      button = (
        <div className="accept">
          <Link className="nav-item" to={`/lot/${item.get('id')}`}>
            {i18n.t('header.accept')}
          </Link>
        </div>
      );
    } else if(item.get('status') === 'sold') {
      name = (<div></div>);
      button = (
        <div className="sold">
          <Link className="nav-item" to={`/lot/${item.get('id')}`}>
            {i18n.t('header.sold')}
          </Link>
          <div className="winner">
            <div>
              {i18n.t('header.winner')}
            </div>
            <div>
              {utils.shortFullName(item.get('name'), language === 'eng')}
            </div>
          </div>
        </div>
      );
    } else if (!utils.isTimeOver(item.get('endDateTime'))){
      button = (
        <div className="openTime">
          {utils.timeRest(item.get('startDateTime'), language)}
        </div>
      );
    } else {
        button = (
          <div className="openTime">
            {i18n.t('lot.sold')}
          </div>
        );
    }
    return (
      <li className='LotItem' key={item.get('id')}>
        <Link className="nav-item" to={`/lot/${item.get('id')}`}>
          <div className='itemWrap'>
            <div className='imageWrap' style={divStyle}>
            </div>
            <div className="id">
              {i18n.t('lot.lotNumber')}{item.get('id')}
            </div>
            <div className="title">
              {item.get('title_'+language)}
            </div>
            <div className="from">
              {item.get('lotFrom_'+language)}
            </div>
            <div className="startCost">
              {item.get('lastPrice') ? utils.rub(item.get('askPrice')) : ''}
            </div>
            <div className="nowCost">
              {utils.rub(item.get('lastPrice') || item.get('askPrice'))}
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
