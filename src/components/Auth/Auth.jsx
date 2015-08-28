import React, { Component, PropTypes } from 'react';

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
    console.log('auth clicked', this);
    this.props.onAddHandler('login');
    e.stopPropaganation();
  }
  render() {
    //console.info('props', this.props);
    return (
      <div className="auth" onClick={this._onClickHandler}>
        <div>
          <input placeholder="email" />
        </div>
        <div>
          <input placeholder="password" type="password"/>
        </div>
        <div>
          <button onClick={this._onClickHandler.bind(this)}>login</button>
        </div>
      </div>
    );
  }
}

export default Auth;
