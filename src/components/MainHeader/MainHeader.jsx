import React, { Component } from 'react';
import { Link } from 'react-router';
import i18n from 'i18next-client';

if (process.env.BROWSER) {
  require('./_MainHeader.scss');
}

class MainHeader extends Component {

  render() {
    var className = 'MainHeader ' + (this.props.mini ? 'mini' : '');
    return (
      <div className={className}>
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
            <Link className="toMain" to="/">На главную</Link>
            <div className="nav-item">
              <a href="http://www.forumvostok.ru" className="logo1"></a>
              <a href="http://www.mnr.gov.ru" className="logo2"></a>
              <a href="http://www.naturefund.ru" className="logo3"></a>
            </div>

          </div>
        </div>
      </div>
    );
  }
}

export default MainHeader;
