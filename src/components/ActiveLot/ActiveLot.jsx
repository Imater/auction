import React, { Component } from 'react';
import { Link } from 'react-router';
import i18n from 'i18next-client';
import * as utils from '../../utils';

if (process.env.BROWSER) {
  require('./_ActiveLot.scss');
}

class ActiveLot extends Component {

  render() {
    var index = this.props.index || 0;
    var item = this.props.listData.filter(function(el){
      return el.get('status') === 'active';
    }).get(index);
    var divStyle = item ? {
      backgroundImage: 'url(/uploads/' + (item.get('cover') || '') + ')'
    } : {};
    return (
      <div className="ActiveLot" style={divStyle}>
        <div className='bg'></div>
        <div className='invite'>
          <Link className="nav-item" to={`/lot/${item.get('id')}`}>
            {i18n.t('header.accept')}
          </Link>
        </div>
        <div className='textWrap'>
          <h5>
            {i18n.t('lot.lotNumber')}{item.get('id')}
          </h5>
          <h2>
            {item.get('title_' + this.props.language)}
          </h2>
          <div className='startCost'>
            {utils.rub(item.get('askPrice'))}
          </div>
          <div className='cost'>
            {utils.rub(item.get('lastPrice'))}
          </div>
        </div>
      </div>
    );
  }
}

export default ActiveLot;
