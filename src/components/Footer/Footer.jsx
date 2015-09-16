import React, { Component, PropTypes } from 'react';
import i18n from 'i18next-client';

if (process.env.BROWSER) {
  require('./_Footer.scss');
}

class Footer extends Component {

  render() {
    return (
      <div className="Footer" id="footer">
        <div className="constraint">
          <div className="wrap">
            <div className="rowWrapper">
              <div className="text">
                <h5>{i18n.t('footer.header')}</h5>
                <p>{i18n.t('footer.line1')}</p>
                <p>{i18n.t('footer.line2')}</p>
                <p>{i18n.t('footer.line3')}</p>
                <p>{i18n.t('footer.line4')}</p>
                <p>{i18n.t('footer.line5')}</p>
                <p>{i18n.t('footer.line6')}</p>
                <p>{i18n.t('footer.line7')} <a href="http://www.amur-tiger.ru">www.amur-tiger.ru</a> <a href="http://www.save-leopard.ru">www.save-leopard.ru</a>.</p>
                <p>{i18n.t('footer.line8')}</p>
                <p className="from">{i18n.t('footer.from')}</p>
              </div>
              <div className="contacts">
                <h5>{i18n.t('footer.committee')}:</h5>
                <div className='line'>+7 919 761 91 17</div>
                <div className='email'><a href="mailto:info@helptoprotect.ru">info@helptoprotect.ru</a></div>
                <h5>{i18n.t('footer.support')}:</h5>
                <div className='line'>+7 915 001 32 58</div>
                <div className='email'><a href="mailto:support@helptoprotect.ru">support@helptoprotect.ru</a></div>
                <h5>{i18n.t('footer.socialHeader')}</h5>
                <a className='social' href="https://www.facebook.com/forumvostok">
                  <img src="/assets/images/facebook_filled.png" />
                </a>
                <a className='social vk' href="http://vk.com">
                  <img src="/assets/images/vkontakte_filled.png" />
                </a>
              </div>
            </div>
          </div>
          <div className="wrap">
            <div className="rowWrapper">
              <div className="text">
                <a href="#top" className="toTop">{i18n.t('footer.toTop')}</a>
              </div>
              <div className="contacts">
                <div className="about">
                  {i18n.t('about.text')}<span> </span>
                  <a href={i18n.t('about.link')} target="_blank">{i18n.t('about.linkName')}</a>
                </div>
                {/* about */}
              </div>
              {/* contacts */}
            </div>
            {/* rowWrapper */}
          </div>
          {/* wrap */}
        </div>
        {/* constraint */}
      </div>
    );
  }
}

export default Footer;
