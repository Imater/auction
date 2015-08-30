import React, { Component } from 'react';
import i18n from 'i18next-client';

if (process.env.BROWSER) {
  require('./_MainLot.scss');
}

class MainLot extends Component {

  render() {
    return (
      <div className="MainLot">
        <img src="/assets/images/IMG_5508.JPG" />
        <div className="textWrapper">
          <h5>
            0054505034
          </h5>
          <h2>
            Сувенир с самородком
          </h2>
          <h6>
            Лот предсоставлен губернатором ДФО Ю.П.Трутневым
          </h6>
        </div>
      </div>
    );
  }
}

export default MainLot;
