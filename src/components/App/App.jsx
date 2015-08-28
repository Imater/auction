import React, { Component } from 'react';
import { Link } from 'react-router';

import { DevTools, DebugPanel, LogMonitor } from 'redux-devtools/lib/react';

if (process.env.BROWSER) {
  require('../../../assets/styles/normalize.css');
  require('./_App.scss');
}

class App extends Component {
  static contextTypes = {
    store: process.env.BROWSER ? React.PropTypes.object.isRequired : false
  };

  render() {
    var devtools;
    if(typeof window !== 'undefined' && __DEVELOPMENT__){
      devtools = (
        <DebugPanel top right bottom>
          <DevTools store={this.context.store} monitor={LogMonitor} />
        </DebugPanel>
      );
    }

    return (
      <div className="app-wrapper">
        <nav className="app-navigation">
          <Link className="nav-item" to="/">Todo List</Link>
          <Link className="nav-item" to="/about">About Me</Link>
          <Link className="nav-item" to="/auth">Auth</Link>
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
