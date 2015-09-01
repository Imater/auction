import { List } from 'immutable';
import request from 'superagent';
import Immutable from 'immutable';

export const TODO_CREATE = 'TODO_CREATE';
export const TODO_COMPLETE = 'TODO_COMPLETE';
export const TODO_DESTROY = 'TODO_DESTROY';
export const ADD_BID = 'ADD_BID';

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
      console.info('bid added', action);
      var body = action.payload.body;
      return state.map(function(item){
        if(item.toObject().id == body.id){
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
  console.info('save bid = ', body);
  return {
    type: ADD_BID,
    payload: new Promise((resolve, reject) => {
      request
      .post('api/bid')
      .send(body)
      .end(function(err, res) {
        if(err){
          return reject(err);
        }
        console.info('resolve', {body: res.body});
        resolve({body: res.body});
      });
    })
  };
}
