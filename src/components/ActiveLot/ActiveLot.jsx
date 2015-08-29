import React, { Component } from 'react';
import i18n from 'i18next-client';
import { Link } from 'react-router';

if (process.env.BROWSER) {
  require('./_ActiveLot.scss');
}

class ActiveLot extends Component {

  render() {
    return (
      <div className="ActiveLot">
        <img src="/assets/images/IMG_5508.JPG" />
      </div>
    );
  }
}

export default ActiveLot;
