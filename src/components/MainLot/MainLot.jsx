import React, { Component } from 'react';
import i18n from 'i18next-client';

if (process.env.BROWSER) {
  require('./_MainLot.scss');
}

class MainLot extends Component {

  render() {
    var divStyle = {
      backgroundImage: 'url(/assets/images/IMG_5508.JPG)'
    };
    return (
      <div className="MainLot" style={divStyle}>
        <div className="textWrapper">
          <h5>
            0054505034
          </h5>
          <h2>
            Сувенир с самородком
          </h2>
          <h6>
            Предоставлена Директором Департамента государственной политики и регулирования в области охраны окружающей среды Минприроды России Д.М. Белановичем
          </h6>
        </div>
      </div>
    );
  }
}

export default MainLot;
