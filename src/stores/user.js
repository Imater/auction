import { List } from 'immutable';
import request from 'superagent';
import Immutable from 'immutable';

export const CREATE_USER = 'CREATE_USER';
export const USER_INFO = 'USER_INFO';
export const USER_EXIT = 'USER_EXIT';

const defaultState = {body: {}};

export default function(state = defaultState, action) {
  switch (action.type) {
    case USER_INFO:
      return Immutable.fromJS(action.payload);
    case USER_EXIT:
      return Immutable.fromJS(defaultState);
    default:
      return state;
  }
}

export function createUser(body) {
  console.info('createuser');
  return {
    type: CREATE_USER,
    payload: new Promise((resolve, reject) => {
      request
      .post('api/user')
      .send(body)
      .end(function(err, res) {
        if (err){
          return reject(err);
        }
        if (!res.body && alert){
          alert('Недостаточно данных');
        }
        resolve({body: res.body});
      });
    })
  };
}

export function userInfo(body) {
  return {
    type: USER_INFO,
    payload: new Promise((resolve, reject) => {
      request
      .put('api/user')
      .send(body)
      .end(function(err, res) {
        if (err){
          return reject(err);
        }
        if (!res.body && alert){
          alert('Неверный логин/пароль');
        }
        resolve({body: res.body});
      });
    })
  };
}

export function userExit(body) {
  return {
    type: USER_INFO,
    payload: {
      body: body
    }
  };
}

//export function addBid(body) {
//  console.info('save bid = ', body);
//  return {
//    type: ADD_BID,
//    payload: new Promise((resolve, reject) => {
//      request
//      .post('api/bid')
//      .send(body)
//      .end(function(err, res) {
//        if(err){
//          return reject(err);
//        }
//        console.info('resolve', {body: res.body});
//        resolve({body: res.body});
//      });
//    })
//  };
//}

