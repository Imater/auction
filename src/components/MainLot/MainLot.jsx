import React, { Component } from 'react';
import i18n from 'i18next-client';

if (process.env.BROWSER) {
  require('./_MainLot.scss');
}

class MainLot extends Component {

  render() {
    var index = this.props.index || 0;
    var item = this.props.listData[index].toObject ? this.props.listData[index].toObject() : this.props.listData[index];
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
