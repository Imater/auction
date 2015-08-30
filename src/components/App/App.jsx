import React, { Component } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { DevTools, DebugPanel, LogMonitor } from 'redux-devtools/lib/react';
import i18n from 'i18next-client';

import MainHeader from '../MainHeader/MainHeader';
import Top from '../Top/Top';

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

    render() {
      var devtools;
      if(false && process.env.__DEVELOPMENT__){
        devtools = (
          <DebugPanel top right bottom>
            <DevTools store={this.context.store} monitor={LogMonitor} />
          </DebugPanel>
        );
      }
      console.info(this.props);
      const style = {
        display: 'none'
      }
      return (
        <div className="app-wrapper" style={style}>
          <MainHeader />
          <Top />
          {devtools}
          <main className="app-content">
            {this.props.children}
          </main>
          <div className="footer">
            <div className="rowWrapper">
              <div className="text">
                <h5>
                  {i18n.t('footer.header')}
                </h5>
                <p>
                  {i18n.t('footer.line1')}
                </p>
                <p>
                  {i18n.t('footer.line2')}
                </p>
                <p>
                  {i18n.t('footer.line3')}
                </p>
                <p>
                  {i18n.t('footer.line4')}
                </p>
                <p>
                  {i18n.t('footer.line5')}
                </p>
                <p>
                  {i18n.t('footer.line6')}
                </p>
                <p>
                  {i18n.t('footer.line7')}
                </p>
                <p className="from">
                  {i18n.t('footer.from')}
                </p>
              </div>
              <div className="contacts">
                <h5>
                  {i18n.t('footer.phones')}
                </h5>
                <div className='line'>
                  +7 (495) 921 9944
                </div>
                <div className='line'>
                  +7 (495) 792 5022
                </div>
                <div className='email'>
                  <a href="mailto:mail@forumvostok.ru">
                    mail@forumvostok.ru
                  </a>
                </div>
                <h5>
                  {i18n.t('footer.addressHeader')}
                </h5>
                <div className='line'>
                  {i18n.t('footer.address')}
                </div>
                <h5>
                  {i18n.t('footer.socialHeader')}
                </h5>
                <a className='social' href="http://facebook.com">
                  <img src="/assets/images/facebook_filled.png" />
                </a>
                <a className='social' href="http://vk.com">
                  <img src="/assets/images/vkontakte_filled.png" />
                </a>
              </div>
            </div>
          </div>
        </div>
      );
    }
  }

  export default App;
