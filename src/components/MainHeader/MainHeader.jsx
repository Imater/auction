import React, { Component } from 'react';
import { Link } from 'react-router';
import i18n from 'i18next-client';

if (process.env.BROWSER) {
  require('./_MainHeader.scss');
}

class MainHeader extends Component {

  componentWillMount() {
    if (typeof window !== 'undefined') {
      setTimeout(function(){
        var $header = $('.MainHeader');
        var $quote = $header.find('.textColumn');
        var $popup = $header.find('.popup');
        var $popupClose = $header.find('.popup-close');
        $quote.on('click', function(){
          $popup.removeClass('is-hidden');
        });

        $popupClose.on('click', function(){
          $popup.addClass('is-hidden');
        });
      }, 500);

    }
  }

  render() {
    var className = 'MainHeader ' + (this.props.mini ? 'mini' : '');

    return (
      <div className={className} id="top">
        <div className="constraint">
          <div className="wrap">
            <div className="popup is-hidden" id="quote">
              <div className="popup-constraint">
                <p>{i18n.t('header.quote1')}</p>
                <p>{i18n.t('header.quote2')}</p>
                <p>{i18n.t('header.quote3')}</p>
                <p>{i18n.t('header.quote4')}</p>
                <p><i>{i18n.t('header.quote5')}</i></p>
                <p><i>{i18n.t('header.quote6')}</i></p>
                <a className="popup-close" href="#">Закрыть</a>
              </div>
            </div>
            <div className="tableRow">
              <div className="textWrapper">
                <div className="textColumn">
                  <div className="text">
                    {i18n.t('header.introText')}
                    </div>
                    <div className="author">
                      {i18n.t('header.introAuthor')}
                      </div>
                    </div>
                  </div>
                  <div className="logosWrapper">
                    <Link className="toMain" to="/">{i18n.t('header.home')}</Link>
                    <div className="nav-item">
                      <a href="http://www.forumvostok.ru" className="logo1"></a>
                      <a href="http://www.mnr.gov.ru" className="logo2"></a>
                      <a href="http://www.naturefund.ru" className="logo3"></a>
                    </div>

                  </div>
                </div>
              </div>
            </div>
          </div>
    );
  }
}

export default MainHeader;
