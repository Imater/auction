import React, { Component } from 'react';
import i18n from 'i18next-client';

if (process.env.BROWSER) {
  require('./_MainHeader.scss');
}

class MainHeader extends Component {

  render() {
    return (
      <div className="MainHeader">
        <div className="tableRow">
          <div className="textWrapper">
            <div className="textColumn">
              <div className="text">
                {i18n.t('header.introText')}
              </div>
              <div className="author">
                {i18n.t('header.introAuthor')}
              </div>
            </div>
          </div>
          <div className="logosWrapper">
            <div className="logo1"></div>
            <div className="logo2"></div>
            <div className="logo3"></div>
          </div>
        </div>
      </div>
    );
  }
}

export default MainHeader;
