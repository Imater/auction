import React, { Component } from 'react';
import i18n from 'i18next-client';

if (process.env.BROWSER) {
  require('./_MainLotInfo.scss');
}
var items = [
  {
    nowCost: '1 135 000 ₽',
    name: 'Участник 34',
    nowCost1: '1 135 000 ₽',
    name1: 'Участник 34',
    time1: '4 мин.назад',
    nowCost2: '1 035 000 ₽',
    name2: 'И.К. Самойлов',
    time2: '12 мин.назад',
    startCost: '825 000 ₽',
  },
  {
    nowCost: '115 000 ₽',
    name: 'Участник 2',
    nowCost1: '115 000 ₽',
    name1: 'Участник 2',
    time1: '7 мин.назад',
    nowCost2: '35 000 ₽',
    name2: 'А.К. Петров',
    time2: '17 мин.назад',
    startCost: '25 000 ₽',
  },
  {
    nowCost: '2 135 000 ₽',
    name: 'Участник 191',
    nowCost1: '2 135 000 ₽',
    name1: 'Участник 191',
    time1: '9 мин.назад',
    nowCost2: '1 935 000 ₽',
    name2: 'И.К. Самойлов',
    time2: '12 мин.назад',
    startCost: '1 825 000 ₽',
  },
  {
    nowCost: '123 000 ₽',
    name: 'А.В. Кактусов',
    nowCost1: '123 000 ₽',
    name1: 'Участник 2',
    time1: '8 мин.назад',
    nowCost2: '39 000 ₽',
    name2: 'А.К. Лермонтов',
    time2: '18 мин.назад',
    startCost: '22 000 ₽',
  },
  {
    nowCost: '1 135 000 ₽',
    name: 'Участник 34',
    nowCost1: '1 135 000 ₽',
    name1: 'Участник 34',
    time1: '6 мин.назад',
    nowCost2: '1 035 000 ₽',
    name2: 'И.К. Самойлов',
    time2: '15 мин.назад',
    startCost: '825 000 ₽',
  },
  {
    nowCost: '104 000 ₽',
    name: 'Участник 4',
    nowCost1: '104 000 ₽',
    name1: 'Участник 4',
    time1: '9 мин.назад',
    nowCost2: '28 000 ₽',
    name2: 'А.К. Петров',
    time2: '19 мин.назад',
    startCost: '13 000 ₽',
  }
]

const startTime = Date.now();

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
    var time = new Date(startTime - Date.now());
    var tm = ("0" + time.getMinutes()).slice(-2) + ":" +
    ("0" + time.getSeconds()).slice(-2);
    this.setState({time: tm});
  }

  render() {
    var item = items[this.props.index];
    return (
      <div className="MainLotInfo">
        <div className="tableRow">
          <div className="textWrapper">
            <div className='nowCost'>
              {item.nowCost}
            </div>
            <div className='name'>
              {item.name}
            </div>
            <div className='time'>
              {this.state.time}
            </div>
          </div>
        </div>
        <div className='bottomRow'>
          <div className='line'>
            <div className='label'>
              {item.name1}
            </div>
            <div className='cost'>
              {item.nowCost1}
            </div>
            <div className='time'>
              {item.time1}
            </div>
          </div>
        </div>
        <div className='bottomRow'>
          <div className='line'>
            <div className='label'>
              {item.name2}
            </div>
            <div className='cost'>
              {item.nowCost2}
            </div>
            <div className='time'>
              {item.time2}
            </div>
          </div>
        </div>
        <div className='bottomRow'>
          <div className='line'>
            <div className='label'>
              Начальная цена
            </div>
            <div className='cost'>
              {item.startCost}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default MainLot;
