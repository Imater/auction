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
            <Link className="nav-item" to="/">
              <div className="logo1"></div>
              <div className="logo2"></div>
              <div className="logo3"></div>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default MainHeader;
