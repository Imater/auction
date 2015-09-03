import React, { Component } from 'react';
import i18n from 'i18next-client';
import * as utils from '../../utils'

if (process.env.BROWSER) {
  require('./_LotHistory.scss');
}

class LotHistory extends Component {
  state = {
     max: 2
  };
  componentDidMount() {
    this.setState({
      max: 2
    })
  }
  _onClick(e) {
    e.stopPropagation();
    if(this.state.max == 2){
      this.setState({
        max: 500
      })
    } else {
      this.setState({
        max: 2
      })
    }
  }
  render() {
    var item = this.props.item.toObject ? this.props.item.toObject() : this.props.item;
    var bids = item.bids.toJS ? item.bids.toJS() : item.bids;
    var language = this.props.language;
    return (
      <div className="LotHistory">
        <div className='table'>
          {
            bids.slice(0,this.state.max).map(function(bid, i){
              return (
                <div className='line' key={i}>
                  <div className="cell">
                    <div className='name'>
                      {utils.shortFullName(bid.bidUser, language === 'eng')}
                    </div>
                  </div>
                  <div className="cell">
                    <div className='cost'>
                      {utils.rub(bid.price)}
                    </div>
                    <div className='time'>
                      {utils.lastTime(bid.createdAt)}
                    </div>
                  </div>
                </div>
              );
            })
          }
          <div className="line">
            <div className="cell showMore">
              <a onClick={this._onClick.bind(this)}>
                {i18n.t('lot.showall')}
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default LotHistory;
