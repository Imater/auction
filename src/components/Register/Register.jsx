import React, { Component, PropTypes } from 'react';
import i18n from 'i18next-client';
import MainHeader from '../MainHeader/MainHeader';
import Footer from '../Footer/Footer';
import Top from '../Top/Top';

if (process.env.BROWSER) {
  var i = require('./_Register.scss');
  console.info('class', i);
}

class Register extends Component {
  static propTypes = {
    onAddHandler: PropTypes.func,
  }
  static defaultProps = {
    onAddHandler: () => {}
  }

  _onClickHandler(e) {
    if(!this) return;
    console.log('auth clicked', this);
    this.props.onAddHandler('login');
  }
  render() {
    console.info('props', this.props);
    return (
      <div>
        <MainHeader mini={true} />
        <Top />
        <div className="auth" onClick={this._onClickHandler}>
          <div className='wrapper'>
            <div>
              <div className="label">{i18n.t('register.fullname')}</div>
              <input />
            </div>
            <div>
              <div className="label">{i18n.t('register.company')}</div>
              <input />
            </div>
            <div>
              <div className="label">{i18n.t('register.job')}</div>
              <input />
            </div>
            <div>
              <div className="label">{i18n.t('register.email')}</div>
              <input />
            </div>
            <div>
              <div className="label">{i18n.t('register.phone')}</div>
              <input />
            </div>
            <div>
              <div className="label">{i18n.t('register.password')}</div>
              <input type="password"/>
            </div>
            <div>
              <button onClick={this._onClickHandler.bind(this)}>{i18n.t('register.proceed')}</button>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Register;
