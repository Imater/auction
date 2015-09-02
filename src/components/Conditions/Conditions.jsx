import React, { Component, PropTypes } from 'react';
import i18n from 'i18next-client';
import Footer from '../Footer/Footer';
import MainHeader from '../MainHeader/MainHeader';

if (process.env.BROWSER) {
  require('./_Conditions.scss');
}

class Conditions extends Component {

  render() {
    return (
      <div className="Conditions">
        <MainHeader mini={true}/>
        <div className="Conditions__content">
          <h1>{i18n.t('conditions.conditions1')}</h1>
          <p>{i18n.t('conditions.conditions2')}</p>
          <p>{i18n.t('conditions.conditions3')}</p>
          <p>{i18n.t('conditions.conditions4')}</p>
          <p>{i18n.t('conditions.conditions5')}</p>
          <p>{i18n.t('conditions.conditions6')}</p>
          <p>{i18n.t('conditions.conditions7')}</p>
          <p>{i18n.t('conditions.conditions8')}</p>
          <p>
            {i18n.t('conditions.conditions9')}
            <a href = "http://www.amur-tiger.ru">www.amur-tiger.ru</a> {i18n.t('conditions.and')} 
            <a href="http://www.leopard-center.com">www.leopard-center.com</a>.
          </p>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Conditions;