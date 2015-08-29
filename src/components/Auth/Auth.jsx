import React, { Component, PropTypes } from 'react';
import i18n from 'i18next-client';

if (process.env.BROWSER) {
  var i = require('./_Auth.scss');
  console.info('class', i);
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
    console.log('auth clicked', this);
    this.props.onAddHandler('login');
  }
  render() {
    console.info('props', this.props);
    return (
      <div className="auth" onClick={this._onClickHandler}>
        <div>
          <input placeholder={i18n.t('login.email')} />

        </div>
        <div>
          <input placeholder={i18n.t('login.password')} type="password"/>
        </div>
        <div>
          <button onClick={this._onClickHandler.bind(this)}>{i18n.t('login.login')}</button>
        </div>
      </div>
    );
  }
}

export default Auth;
