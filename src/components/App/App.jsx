import React, { Component } from 'react';
import { Link } from 'react-router';
import { setLanguage, changeLanguage } from '../../stores/i18';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { DevTools, DebugPanel, LogMonitor } from 'redux-devtools/lib/react';

if (process.env.BROWSER) {
  require('../../../assets/styles/normalize.css');
  require('./_App.scss');
}

@connect(
  state => ({ i18: state.i18 }),
    dispatch => bindActionCreators({ changeLanguage }, dispatch)
)
class App extends Component {
  static contextTypes = {
    store: (process.env.BROWSER) ? React.PropTypes.object.isRequired : React.PropTypes.object
  };

  render() {
    var devtools;
    if(true && process.env.__DEVELOPMENT__){
      devtools = (
        <DebugPanel top right bottom>
          <DevTools store={this.context.store} monitor={LogMonitor} />
        </DebugPanel>
      );
    }
    console.info(this.props);
    return (
      <div className="app-wrapper">
        <nav className="app-navigation">
          <Link className="nav-item" to="/">Todo List</Link>
          <Link className="nav-item" to="/about">About Me</Link>
          <Link className="nav-item" to="/auth">Auth</Link>
          <span>
            <a lang="eng" onClick={this.props.changeLanguage.bind(this, 'eng')}>Eng</a>-
            <a lang="ru" onClick={this.props.changeLanguage.bind(this, 'ru')}>Ru</a>-
          </span>
          {this.props.i18.language}
          {devtools}
        </nav>
        <main className="app-content">
          {this.props.children}
        </main>
      </div>
    );
  }
}

export default App;
