import React, { Component, PropTypes } from 'react';
import { findDOMNode } from 'react-dom';
import i18n from 'i18next-client';
import MainHeader from '../MainHeader/MainHeader';
import Footer from '../Footer/Footer';
import Top from '../Top/Top';
import { Router } from 'react-router';

if (process.env.BROWSER) {
  var i = require('./_Register.scss');
}

class Register extends Component {
  static propTypes = {
    onCreateUser: PropTypes.func,
    onUserInfo: PropTypes.func
  }
  static contextTypes = {
    router: PropTypes.object
  }
  static defaultProps = {
    onCreateUser: () => {}
  }

  _onClickHandler(e) {
    if(!this) return;
    e.stopPropagation();
    const lastname = findDOMNode(this.refs.lastname).value;
    const firstname = findDOMNode(this.refs.firstname).value;
    const middlename = findDOMNode(this.refs.middlename).value;
    const company = findDOMNode(this.refs.company).value;
    const job = findDOMNode(this.refs.job).value;
    const email = findDOMNode(this.refs.email).value;
    const phone = findDOMNode(this.refs.phone).value;
    const password = findDOMNode(this.refs.password).value;
    if(!email || !email.length){
      return alert('Need email field');
    }
    var self = this;
    var body = {
      lastname: (lastname || firstname || middlename) ? lastname : 'noname',
      firstname: firstname,
      middlename: middlename,
      company: company,
      job: job,
      email: email.toLowerCase(),
      phone: phone,
      password: password
    };
    this.props.onCreateUser(body, function(){
      body.cb = function(){
        self.context.history.pushState(null, '/');
      };
      self.props.onUserInfo(body);
    });
  }
  render() {
    return (
      <div>
        <MainHeader mini={true} />
        <Top />
        <div className="auth" onClick={this._onClickHandler}>
          <div className='wrapper'>
            <div>
              <div className="label">{i18n.t('register.lastname')}</div>
              <input ref="lastname" />
            </div>
            <div>
              <div className="label">{i18n.t('register.firstname')}</div>
              <input ref="firstname" />
            </div>
            <div>
              <div className="label">{i18n.t('register.middlename')}</div>
              <input ref="middlename" />
            </div>
            <div>
              <div className="label">{i18n.t('register.company')}</div>
              <input ref="company" />
            </div>
            <div>
              <div className="label">{i18n.t('register.job')}</div>
              <input ref="job" />
            </div>
            <div>
              <div className="label">{i18n.t('register.email')}</div>
              <input ref="email" />
            </div>
            <div>
              <div className="label">{i18n.t('register.phone')}</div>
              <input ref="phone" />
            </div>
            <div>
              <div className="label">{i18n.t('register.password')}</div>
              <input type="password" ref="password"/>
            </div>
            <div>
              <button onClick={this._onClickHandler.bind(this)}>{i18n.t('register.proceed')}</button>
            </div>
            <div>
              <p className="condition">Нажимая на кнопку вы подтверждаете <a href="/conditions" target="_blank">условия проведения аукциона</a>.</p>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Register;
