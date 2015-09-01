import React, { Component } from 'react';
import i18n from 'i18next-client';

if (process.env.BROWSER) {
  require('./_LotImage.scss');
}

class LotImage extends Component {

  render() {
    var divStyle = {
      backgroundImage: 'url(/uploads/'+this.props.img+')'
    };
    return (
      <div className="LotImage" style={divStyle}>
      </div>
    );
  }
}

export default LotImage;
