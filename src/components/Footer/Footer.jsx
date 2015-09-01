import React, { Component, PropTypes } from 'react';
import i18n from 'i18next-client';

if (process.env.BROWSER) {
  require('./_Footer.scss');
}

class Footer extends Component {

  render() {
    return (
      <div className="Footer">
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
            <p>
              {i18n.t('footer.line8')}
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
            <a className='social' href="https://www.facebook.com/forumvostok">
              <img src="/assets/images/facebook_filled.png" />
            </a>
            <a className='social vk' href="http://vk.com">
              <img src="/assets/images/vkontakte_filled.png" />
            </a>
            <div className="about">
              {i18n.t('about.text')}<span> </span>
              <a href={i18n.t('about.link')} target="_blank">{i18n.t('about.linkName')}</a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;
