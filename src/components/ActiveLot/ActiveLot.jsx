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
      </div>
    );
  }
}

export default ActiveLot;
