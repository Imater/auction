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
    console.info(this.props.user);
    var login = (<div></div>);
    if( !this.props.user || !(this.props.user.lastname || this.props.user.firstname || this.props.user.middlename) ) {
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
      login = (
        <div className="loginName">
          <Link className="profile-link" to="/profile">
            {utils.shortFullName(this.props.user)}
          </Link>
          <a className="exit" onClick={this.props.onUserExit.bind(this)}>
            {i18n.t('login.exit')}
          </a>
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
                <Link className="toMain" to="/">
                  {i18n.t('header.auction')}
                </Link>
              </span>
              <a className="info" href="#footer">
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
