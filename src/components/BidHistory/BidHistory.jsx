import React, { Component } from 'react';
import i18n from 'i18next-client';

if (process.env.BROWSER) {
  require('./_BidHistory.scss');
}

class BidHistory extends Component {

  _onClickHandler() {
  }
  render() {
    return (
      <div className="About" onClick={this._onClickHandler}>
        <h1>{i18n.t('login.restore')}</h1>
      </div>
    );
  }
}

export default BidHistory;
