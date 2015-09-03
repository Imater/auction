import React, { Component } from 'react';
import i18n from 'i18next-client';
import * as utils from '../../utils';

if (process.env.BROWSER) {
  require('./_Timer.scss');
}

class Timer extends Component {
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
    var time = new Date(Date.now());
    var tm = ("0" + time.getMinutes()).slice(-2) + ":" +
    ("0" + time.getSeconds()).slice(-2);
    this.setState({time: tm});
  }

  render() {
    return (
      <div className="endTimeWrap" timer={this.state.time}>
        <div className="clock">
        </div>
        <a className="endTime" title="Время до окончания торгов">
          {utils.endTime(this.props.endDateTime)}
        </a>
      </div>
    );
  }
}

export default Timer;
