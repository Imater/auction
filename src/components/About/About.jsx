import React, { Component } from 'react';
import i18n from 'i18next-client';

if (process.env.BROWSER) {
  require('./_About.scss');
}

class About extends Component {

  _onClickHandler() {
    console.log('about clicked');
  }
  render() {
    console.info('render now', i18n.isInitialized());
    return (
      <div className="About" onClick={this._onClickHandler}>
        <h5>Hello</h5>
        <h2>{i18n.t('header.charity')}</h2>
        <h1>{i18n.t('header.auction')}</h1>
      </div>
    );
  }
}

export default About;
