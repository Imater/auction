import React, { Component } from 'react';
import i18n from 'i18next-client';

if (process.env.BROWSER) {
  require('./_MainLotInfo.scss');
}

class MainLot extends Component {
  state = {
     time: '12:52'
  };

  componentDidMount() {
    this.interval = setInterval(this.tick.bind(this), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  tick () {
    var time = new Date();
    var tm = ("0" + time.getMinutes()).slice(-2) + ":" +
    ("0" + time.getSeconds()).slice(-2);
    this.setState({time: tm});
  }

  render() {
    return (
      <div className="MainLotInfo">
        <div className="tableRow">
          <div className="textWrapper">
            <div className='nowCost'>
              1 135 000 ₽
            </div>
            <div className='name'>
              И.И. Сечин
            </div>
            <div className='time'>
              {this.state.time}
            </div>
          </div>
        </div>
        <div className='bottomRow'>
          <div className='line'>
            <div className='label'>
              Участник 34
            </div>
            <div className='cost'>
              1 135 000 ₽
            </div>
            <div className='time'>
              4 мин.назад
            </div>
          </div>
        </div>
        <div className='bottomRow'>
          <div className='line'>
            <div className='label'>
              И.И. Сечин
            </div>
            <div className='cost'>
              1 035 000 ₽
            </div>
            <div className='time'>
              7 мин.назад
            </div>
          </div>
        </div>
        <div className='bottomRow'>
          <div className='line'>
            <div className='label'>
              Начальная цена
            </div>
            <div className='cost'>
              800 000 ₽
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default MainLot;
