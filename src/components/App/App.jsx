import React, { Component } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { DevTools, DebugPanel, LogMonitor } from 'redux-devtools/lib/react';
import i18n from 'i18next-client';
//
// Actions
import {
  refreshLot
} from '../../stores/todos';

if (process.env.BROWSER) {
  require('../../../assets/styles/normalize.css');
  require('./_App.scss');
}

@connect(
  state => ({ i18: state.i18 }),
)
  class App extends Component {
    static contextTypes = {
      store: (process.env.BROWSER) ? React.PropTypes.object.isRequired : React.PropTypes.object
    };

    componentWillMount() {
      if (typeof window !== 'undefined') {
        this.needStart = false;
        var socket = io();
        var self = this;
        socket.on('refresh', function(data){
          if(data && data.id){
            self.context.store.dispatch(refreshLot(data));
          }
          console.info('socket', data);
        });
      }
    }

    render() {


      console.info('app props', this.context.store);
      var devtools;
      if(false && process.env.__DEVELOPMENT__){
        devtools = (
          <DebugPanel top right bottom>
            <DevTools store={this.context.store} monitor={LogMonitor} />
          </DebugPanel>
        );
      }
      const style = {
        display: 'none'
      }
      return (
        <div className="app-wrapper" style={style}>
          {devtools}
          <main className="app-content">
            {this.props.children}
          </main>
        </div>
      );
    }
  }

  export default App;
