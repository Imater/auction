import React, { Component } from 'react';
import i18n from 'i18next-client';
import * as utils from '../../utils';

if (process.env.BROWSER) {
  require('./_MainLot.scss');
}

class MainLot extends Component {

  render() {
    var index = this.props.index || 0;
    var listDataFiltered = utils.sortByLastTime(this.props.listData).slice(this.props.index,this.props.index+1);
    var item = listDataFiltered[0].toObject ? this.props.listData[index].toObject() : this.props.listData[index];
    var divStyle = {
      backgroundImage: 'url(/uploads/'+item.cover+')'
    };
    return (
      <div className="MainLot" style={divStyle}>
        <div className="textWrapper">
          <h5>
            {item.id}
          </h5>
          <h2>
            {item['title_'+this.props.language]}
          </h2>
          <h6>
            {item['lotFrom_'+this.props.language]}
          </h6>
        </div>
      </div>
    );
  }
}

export default MainLot;
