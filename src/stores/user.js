import { List } from 'immutable';
import request from 'superagent';
import Immutable from 'immutable';

export const CREATE_USER = 'CREATE_USER';
export const USER_INFO = 'USER_INFO';
export const USER_EXIT = 'USER_EXIT';
export const RESTORE_PASSWORD = 'RESTORE_PASSWORD';

const defaultState = {body: {}};

export default function(state = defaultState, action) {
  switch (action.type) {
    case USER_INFO:
      return Immutable.fromJS(action.payload);
    case RESTORE_PASSWORD:
      return state;
    case USER_EXIT:
      return Immutable.fromJS(defaultState);
    case CREATE_USER:
      return state;
    default:
      return state;
  }
}

export function createUser(body, cb) {
  return {
    type: CREATE_USER,
    payload: new Promise((resolve, reject) => {
      request
      .post('/api/user')
      .send(body)
      .end(function(err, res) {
        if (err){
          return reject(err);
        }
        if (!res.body && alert){
          return alert('Недостаточно данных');
        }
        saveLocalStorage(res.body);
        resolve({body: res.body});
        cb();
      });
    })
  };
}

function saveLocalStorage(body){
  if(body.email && body.password){
    localStorage.setItem('email', body.email);
    localStorage.setItem('password', body.password);
  }
}

export function userInfo(body) {
  return {
    type: USER_INFO,
    payload: new Promise((resolve, reject) => {
      request
      .put('/api/user')
      .send(body)
      .end(function(err, res) {
        if (err){
          return reject(err);
        }
        if (!res.body && alert){
          return alert('Неверный логин/пароль');
        }
        saveLocalStorage(res.body);
        resolve({body: res.body});
        body.cb();
      });
    })
  };
}

export function restorePassword(body) {
  return {
    type: USER_INFO,
    payload: new Promise((resolve, reject) => {
      request
      .put('/api/user/email')
      .send(body)
      .end(function(err, res) {
        if (err){
          return reject(err);
        }
        if (res.body && alert){
          return alert('Check your email');
        }
        resolve({body: res.body});
      });
    })
  };
}


export function userExit(body) {
  localStorage.removeItem('email');
  localStorage.removeItem('password');
  return {
    type: USER_INFO,
    payload: {
      body: body
    }
  };
}
