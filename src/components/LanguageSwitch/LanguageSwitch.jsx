import React, { Component } from 'react';
import i18n from 'i18next-client';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { changeLanguage } from '../../stores/i18';

if (process.env.BROWSER) {
  require('./_LanguageSwitch.scss');
}

@connect(
  state => ({ language: state.i18.toObject ? state.i18.toObject().language : state.i18.language }),
    dispatch => bindActionCreators({ changeLanguage }, dispatch)
)
class LanguageSwitch extends Component {

  render() {
    var ruClass = 'flag';
    var engClass = 'flag';
    if(this.props.language === 'eng'){
      engClass += ' active';
    } else {
      ruClass += ' active';
    }
    return (
      <div className="LanguageSwitch">
        <a className={ruClass} onClick={this.props.changeLanguage.bind(this, 'ru')}>
          <img src="/assets/images/rus.png" />
          <span>
            RU
          </span>
        </a>
        <a className={engClass} onClick={this.props.changeLanguage.bind(this, 'eng')}>
          <img src="/assets/images/eng.png" />
          <span>
            EN
          </span>
        </a>
      </div>
    );
  }
}

export default LanguageSwitch;
