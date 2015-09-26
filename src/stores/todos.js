import { List } from 'immutable';
import request from 'superagent';
import Immutable from 'immutable';

export const TODO_CREATE = 'TODO_CREATE';
export const TODO_COMPLETE = 'TODO_COMPLETE';
export const TODO_DESTROY = 'TODO_DESTROY';
export const ADD_BID = 'ADD_BID';
export const REFRESH_LOT = 'REFRESH_LOT';

const setDate = ()=> {
  return new Date(Date.parse('2015/09/30 13:00:00'));
};
const defaultState = new List([]);

export default function(state = defaultState, action) {
  switch (action.type) {
    case TODO_CREATE:
      return state.concat(action.payload.text);
    case TODO_DESTROY:
      return state.delete(action.payload.id);
    case ADD_BID:
      return state;
    case REFRESH_LOT:
      console.log('bid added by socket', action);
      var body = action.payload.body;
      return state.map(function(item){
        if (item.toObject().id == body.id){
          return Immutable.fromJS(body);
        }
        return item;
      });
    default:
      return state;
  }
}

export function addTodo(text) {
  return {
    type: TODO_CREATE,
    payload: {
      text: text
    }
  };
}

export function deleteTodo(id) {
  return {
    type: TODO_DESTROY,
    payload: {
      id: id
    }
  };
}

export function addBid(body) {
  return {
    type: ADD_BID,
    payload: new Promise((resolve, reject) => {
      request
      .post('api/bid')
      .send(body)
      .end(function(err, res) {
        if(err){
          if(err.response.body.error == 'price_too_low'){
            alert('Ваша ставка должна быть выше, чем '+err.response.body.oldPrice+' руб + 10%');
          };
          if(err.response.body.error == 'price_too_high'){
            alert('Ваша ставка должна быть ниже, чем десятикратный размер '+err.response.body.oldPrice+' руб');
          };
          if(err.response.body.error == 'price_bad'){
            alert('Ваша ставка не распознана');
          };
          return reject(err);
        }
        resolve({body: res.body});
      });
    })
  };
}

export function addBidAdmin(body) {
  return {
    type: ADD_BID,
    payload: new Promise((resolve, reject) => {
      request
      .put('api/bid')
      .send(body)
      .end(function(err, res) {
        if(err){
          if(err.response.body.error == 'price_too_low'){
            alert('Ваша ставка должна быть выше, чем '+err.response.body.oldPrice+' руб + 10%');
          };
          if(err.response.body.error == 'price_too_high'){
            alert('Ваша ставка должна быть ниже, чем десятикратный размер '+err.response.body.oldPrice+' руб');
          };
          if(err.response.body.error == 'price_bad'){
            alert('Ваша ставка не распознана');
          };
          return reject(err);
        }
        resolve({body: res.body});
      });
    })
  };
}

export function sold(body) {
  return {
    type: ADD_BID,
    payload: new Promise((resolve, reject) => {
      request
      .put('api/bid/sold')
      .send(body)
      .end(function(err, res) {
        if(err){
          return reject(err);
        }
        resolve({body: res.body});
      });
    })
  };
}


export function refreshLot(body) {
  return {
    type: REFRESH_LOT,
    payload: {
      body: body
    }
  };
}

