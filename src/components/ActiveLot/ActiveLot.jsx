import React, { Component } from 'react';
import i18n from 'i18next-client';
import { Link } from 'react-router';

if (process.env.BROWSER) {
  require('./_ActiveLot.scss');
}

class ActiveLot extends Component {

  render() {
    var divStyle = {
      backgroundImage: 'url(/assets/images/IMG_5508.JPG)'
    };
    return (
      <div className="ActiveLot" style={divStyle}>
        <div className='bg'></div>
        <div className='invite'>
          <a>{i18n.t('header.accept')}</a>
        </div>
        <div className='textWrap'>
          <h5>
            0023477555
          </h5>
          <h2>
            Сувенир с самородком
          </h2>
          <div className='startCost'>
            95 000 ₽
          </div>
          <div className='cost'>
            135 000 ₽
          </div>
        </div>
      </div>
    );
  }
}

export default ActiveLot;
