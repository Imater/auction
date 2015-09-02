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
    var filteredData = this.props.listData.filter(function(item){
      var theItem = item.toJS ? item.toJS() : item;
      return theItem.status === 'active';
    });
    var item = this.props.listData[index].toObject ? this.props.listData[index].toObject() : this.props.listData[index];
    if (filteredData.length){
      item = filteredData[index].toObject ? filteredData[index].toObject() : filteredData;
    }
    var divStyle = {
      backgroundImage: 'url(/uploads/'+(item.cover || '')+')'
    };
    return (
      <div className="ActiveLot" style={divStyle}>
        <div className='bg'></div>
        <div className='invite'>
          <Link className="nav-item" to="/lot" query={{index: item.id}}>
            {i18n.t('header.accept')}
          </Link>
        </div>
        <div className='textWrap'>
          <h5>
            {i18n.t('lot.lotNumber')}{item.id}
          </h5>
          <h2>
            {item['title_'+this.props.language]}
          </h2>
          <div className='startCost'>
            {utils.rub(item.askPrice)}
          </div>
          <div className='cost'>
            {utils.rub(item.lastPrice)}
          </div>
        </div>
      </div>
    );
  }
}

export default ActiveLot;
