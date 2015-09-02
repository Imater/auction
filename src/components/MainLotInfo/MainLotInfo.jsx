import React, { Component } from 'react';
import i18n from 'i18next-client';
import * as utils from '../../utils'

if (process.env.BROWSER) {
  require('./_MainLotInfo.scss');
}

const startTime = Date.now();

class MainLot extends Component {
  state = {
     time: '12:52'
  };

  componentDidMount() {
    this.interval = setInterval(this.tick.bind(this), 10000);
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
    var index = this.props.index || 0;
    var listDataFiltered = utils.sortByLastTime(this.props.listData).slice(this.props.index,this.props.index+1);
    var item = listDataFiltered[0].toObject ? this.props.listData[index].toObject() : this.props.listData[index];
    var bids = item.bids.toJS ? item.bids.toJS() : item.bids;
    return (
      <div className="MainLotInfo" time={this.state.time}>
        <div className="tableRow">
          <div className="textWrapper">
            <div className='header'>
              Последние ставки
            </div>
            <div className='nowCost'>
              {utils.rub(item.lastPrice)}
            </div>
            <div className='name'>
              {utils.shortFullName(item.name)}
            </div>
            <div className='time'>
              {utils.lastTime(item.lastTime)}
            </div>
          </div>
        </div>
        <div className='bottomRow'>
          <div className='line'>
            <div className='label'>
              {utils.shortFullName(bids[1] ? bids[1].bidUser : '')}
            </div>
            <div className='cost'>
              {utils.rub(bids[1] ? bids[1].price : '')}
            </div>
            <div className='time'>
              {utils.lastTime(bids[1] ? bids[1].createdAt : '')}
            </div>
          </div>
        </div>
        <div className='bottomRow'>
          <div className='line'>
            <div className='label'>
              Начальная цена
            </div>
            <div className='cost'>
              {utils.rub(item.askPrice)}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default MainLot;
