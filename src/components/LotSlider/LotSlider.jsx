import React, { Component } from 'react';
import i18n from 'i18next-client';

if (process.env.BROWSER) {
  require('./_LotSlider.scss');
}

class LotSlider extends Component {
  state = {
    index: -1
  }

  _onClickHandler(index) {
    this.setState({
      index: index
    })
  }
  _onClickNextHandler(increment) {
    if(increment === 1 && this.state.index == this.lotphotosCount - 1){
      return this.setState({
        index: -1
      });
    }
    if(increment === -1 && this.state.index === -1){
      return this.setState({
        index: this.lotphotosCount-1
      });
    }
    this.setState({
      index: this.state.index + increment
    })
  }
  render() {
    var lotphotos = this.props.lotphotos;
    this.lotphotosCount = this.props.lotphotos.length;
    var slide;
    if(this.state.index === -1) {
      slide = (
        <div className='slider-item' style={{backgroundImage: 'url(/uploads/'+this.props.item.cover+')'}}>
          <div className='slider-overlay'></div>
          <div className='slider-title'>
          </div>
          <div className='slider-description'>
          </div>
        </div>
      );
    } else {
      var item = lotphotos[this.state.index];
      slide = (
        <div className='slider-item' style={{backgroundImage: 'url(/uploads/gallery/'+item.url+')'}}>
          <div className='slider-overlay'></div>
          <div className='slider-title'>
            {item['title_'+this.props.language]}
          </div>
          <div className='slider-description'>
            {item['description_'+this.props.language]}
          </div>
        </div>
      );
    }
    var isHide = (this.lotphotosCount === 0) ? 'hide' : '';
    var className = this.state.index === -1 ? 'slider-dot is-active' : 'slider-dot';
    var slider = (
        <div className="slider">
          <div className='slider-viewport'>
            <div className={isHide}>
              <div className='slider-arrow slider-arrow--prev' onClick={this._onClickNextHandler.bind(this, -1)}></div>
              <div className='slider-arrow slider-arrow--next' onClick={this._onClickNextHandler.bind(this, 1)}></div>
            </div>
            <div className='slider-dots'>
              {
                <span className={isHide}>
                  <div className={className}></div>
                </span>
              }
              {!lotphotos ? '' : lotphotos.map((item, index)=>{
                var className = this.state.index === index ? 'slider-dot is-active' : 'slider-dot';
                return (
                  <div className={className} onClick={this._onClickHandler.bind(this, index)}></div>
                );
              })}
            </div>
            <div className='slider-area'>
              {slide}
            </div>
          </div>
        </div>
    );
    return (
      <div className="LotSlider">
        {slider}
      </div>
    );
  }
}

export default LotSlider;
