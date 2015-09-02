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
        var $header = $(".MainHeader"),
            $quote = $header.find(".textColumn"),
            $popup = $header.find(".popup"),
            $popupClose = $header.find(".popup-close");

            console.log(this);
        $quote.on("click", function(){
          console.log("asdfasdf");
          $popup.removeClass("is-hidden");
        })

        $popupClose.on("click", function(){
          $popup.addClass("is-hidden");
        })
      }, 500)

    }
  }

  render() {
    var className = 'MainHeader ' + (this.props.mini ? 'mini' : '');

    return (
      <div className={className}>
        <div className="popup is-hidden">
          <div className="popup-constraint">
            <p>Мы живем все в ритме 21 века.</p>
            <p>Жизнь подчинена жесткому графику: творчество, общение, работа и отдых. Приэтом мы редко задумываемся о том, что являемся частью биосферы, нашего дома-планеты Земля. Просто представителем того вида, которому повезло иметь разум. Мы забываем о том, что вокруг нас живут младшие братья: звери, птицы и рыбы. Но разум должен рождать отвественность и заботу о младших.</p>
            <p>Мы предлагаем Вам сегодня помочь сохранению на Земле прекрасных животных - тигров и леопардов. На Дальнем Востоке сохранилось около 540 особей амурских тигров и около 70 особей дальневосточных леопардов.</p>
            <p>Купите понравившийся лот аукциона. Помогите грациозным диким кошкам сохраниться на Земле.</p>
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
            <Link className="toMain" to="/">На главную</Link>
            <div className="nav-item">
              <a href="http://www.forumvostok.ru" className="logo1"></a>
              <a href="http://www.mnr.gov.ru" className="logo2"></a>
              <a href="http://www.naturefund.ru" className="logo3"></a>
            </div>

          </div>
        </div>
      </div>
    );
  }
}

export default MainHeader;
