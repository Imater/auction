import React, { Component, PropTypes } from 'react';
import i18n from 'i18next-client';
import MainHeader from '../MainHeader/MainHeader';
import Footer from '../Footer/Footer';
import Top from '../Top/Top';

if (process.env.BROWSER) {
  var i = require('./_Auth.scss');
}

class Auth extends Component {
  static propTypes = {
    onAddHandler: PropTypes.func,
  }
  static defaultProps = {
    onAddHandler: () => {}
  }

  _onClickHandler(e) {
    if(!this) return;
    this.props.onAddHandler('login');
  }
  render() {
    return (
      <div>
        <MainHeader mini={true} />
        <Top />
        <div className="auth" onClick={this._onClickHandler}>
          <div className='wrapper'>
            <div>
              <div className="label">{i18n.t('login.email')}</div>
              <input />
            </div>
            <div>
              <div className="label">{i18n.t('login.password')}</div>
              <input type="password"/>
              <div className="forgotWrapper">
                <a className="forgot">{i18n.t('login.forgot')}</a>
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
