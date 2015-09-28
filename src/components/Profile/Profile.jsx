import React, { Component, PropTypes } from 'react';
import { findDOMNode } from 'react-dom';
import i18n from 'i18next-client';
import MainHeader from '../MainHeader/MainHeader';
import Footer from '../Footer/Footer';
import Top from '../Top/Top';
import { Router } from 'react-router';

if (process.env.BROWSER) {
  var i = require('./_Profile.scss');
}

class Profile extends Component {
  static propTypes = {
    user: PropTypes.object.isRequired,
    onCreateUser: PropTypes.func,
    onUserInfo: PropTypes.func
  }
  static contextTypes = {
    router: PropTypes.object
  }
  static defaultProps = {
    onCreateUser: () => {}
  }

  _onClickHandler(e) {
    if(!this) return;
    e.stopPropagation();
    const lastname = findDOMNode(this.refs.lastname).value;
    const firstname = findDOMNode(this.refs.firstname).value;
    const middlename = findDOMNode(this.refs.middlename).value;
    const company = findDOMNode(this.refs.company).value;
    const job = findDOMNode(this.refs.job).value;
    const email = findDOMNode(this.refs.email).value;
    const phone = findDOMNode(this.refs.phone).value;
    const password = findDOMNode(this.refs.password).value;
    if(!email || !email.length){
      return alert('Need email field');
    }
    var self = this;
    var body = {
      lastname: (lastname || firstname || middlename) ? lastname : 'noname',
      firstname: firstname,
      middlename: middlename,
      company: company,
      job: job,
      email: email.toLowerCase(),
      phone: phone,
      password: password
    };
    this.props.onCreateUser(body, function(){
      body.cb = function(){
        self.context.history.pushState(null, '/');
      };
      self.props.onUserInfo(body);
    });
  }
  _onChange(key) {
    return (event) => {
      console.info(key, event.target.value);
    }
  }

  render() {
    if (this.props.user.body.get === undefined){
      return (<div></div>);
    }
    var user = this.props.user.body;
    var inputsNames = [
      'lastname',
      'firstname',
      'middlename',
      'company',
      'job',
      'email',
      'phone'
    ];
    var userLogin = (this.props.user && this.props.user.body && this.props.user.body.toObject) ? this.props.user.body.toObject() : this.props.user.body;
    return (
      <div>
        <MainHeader mini={true} />
        <Top user={userLogin} onUserExit={this.props.onUserExit}/>
        <div className="Profile" onClick={this._onClickHandler}>
          <div className='wrapper'>
            <h1>{i18n.t('profileRoom')}</h1>
            {
              inputsNames.map((inputName)=>{
                return (
                  <div key = {inputName}>
                    <div className="label">{i18n.t(`register.${inputName}`)}</div>
                    <input type="text" value={user.get(inputName)} onChange={this._onChange(inputName).bind(this)} ref={inputName} />
                  </div>
                );
              })
            }
            <div>
              <div className="label">{i18n.t('register.password')}</div>
              <input type="password" ref="password"/>
            </div>
            <div>
              <button onClick={this._onClickHandler.bind(this)}>{i18n.t('profile.saveChanges')}</button>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Profile;
