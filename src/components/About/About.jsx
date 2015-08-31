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
    return (
      <div className="About" onClick={this._onClickHandler}>
        <h1>Активные лоты</h1>
      </div>
    );
  }
}

export default About;
