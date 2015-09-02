import React, { Component } from 'react';
import i18n from 'i18next-client';
import { Link } from 'react-router';
import LanguageSwitch from '../LanguageSwitch/LanguageSwitch';
import * as utils from '../../utils';

if (process.env.BROWSER) {
  require('./_Top.scss');
}

class Top extends Component {

  render() {
    var login = (<div></div>);
    if(!this.props.user || !this.props.user.lastname) {
      login = (
        <div>
          <Link className="nav-item" to="/auth">
            {i18n.t('login.loginText')}
          </Link>
          <Link className="nav-item" to="/register">
            {i18n.t('login.regText')}
          </Link>
        </div>
      );
    } else {
      console.info(this.props.user.lastname);
      login = (
        <div className="loginName">
          {utils.shortFullName(this.props.user)}
        </div>
      );
    }
    return (
      <div className="Top">
        <div className="rowWrap">
          <div className="loginWrap">
            {login}
          </div>
          <div className="headerWrap">
            <div className="title1">
              {i18n.t('header.charity')}
            </div>
            <div className="title2">
              <span>
                {i18n.t('header.auction')}
              </span>
              <a className="info">
                <img src='/assets/images/info.png' />
              </a>
            </div>
            <div className="title3">
              {i18n.t('header.about1')}
            </div>
            <div className="title3">
              {i18n.t('header.about2')}
            </div>
          </div>
          <div className="languageWrap">
            <LanguageSwitch />
          </div>
        </div>
      </div>
    );
  }
}

export default Top;
