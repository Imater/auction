import React, { Component } from 'react';
import { Link } from 'react-router';
import i18n from 'i18next-client';

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
          <Link className="nav-item" to="/lot" query={{index: 0}}>
            {i18n.t('header.accept')}
          </Link>
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
