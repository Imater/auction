import React, { Component, PropTypes, findDOMNode } from 'react';
import i18n from 'i18next-client';
import MainHeader from '../MainHeader/MainHeader';
import Footer from '../Footer/Footer';
import Top from '../Top/Top';
import { Router } from 'react-router';

if (process.env.BROWSER) {
  var i = require('./_Auth.scss');
}

class Auth extends Component {
  static propTypes = {
    onAddHandler: PropTypes.func,
    onRestorePassword: PropTypes.func,
    user: PropTypes.object.isRequired,
  }
  static contextTypes = {
    router: PropTypes.object
  }
  static defaultProps = {
    onAddHandler: () => {},
    onRestorePassword: () => {}
  }

  _onClickHandler(e) {
    if(!this) return;
    e.stopPropagation();
    const email = findDOMNode(this.refs.emailInput).value;
    const password = findDOMNode(this.refs.passwordInput).value;
    var self = this;
    if(email && email.length && password && password.length) {
      this.props.onUserInfo({
        email: email.toLowerCase(),
        password: password,
        cb: function(){
          self.context.router.transitionTo('/');
        }
      });
    } else {
      alert('Введите логин/пароль');
    }
  }

  _onClickRestoreHandler(e) {
    if(!this) return;
    e.stopPropagation();
    const email = findDOMNode(this.refs.emailInput).value;
    if(!email || email == null || !email.length) {
      return alert('Enter email and click the link');
    }
    this.props.onRestorePassword({
      email: email === null ? '' : email
    });
    this.context.router.transitionTo('/auth/restore');
  }
  render() {
    return (
      <div>
        <MainHeader mini={true} />
        <Top />
        <div>
          {this.props.children}
        </div>
        <div className="auth" onClick={this._onClickHandler}>
          <div className='wrapper'>
            <div>
              <div className="label">{i18n.t('login.email')}</div>
              <input ref="emailInput" />
            </div>
            <div>
              <div className="label">{i18n.t('login.password')}</div>
              <input ref="passwordInput" type="password"/>
              <div className="forgotWrapper">
                <a onClick={this._onClickRestoreHandler.bind(this)} className="forgot">{i18n.t('login.forgot')}</a>
              </div>
            </div>
            <div>
              <button onClick={this._onClickHandler.bind(this)}>{i18n.t('login.login')}</button>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Auth;
