import { List } from 'immutable';

export const TODO_CREATE = 'TODO_CREATE';
export const TODO_COMPLETE = 'TODO_COMPLETE';
export const TODO_DESTROY = 'TODO_DESTROY';

const defaultState = new List(['hello']);

export default function(state = defaultState, action) {
  switch (action.type) {
    case TODO_CREATE:
      return state.concat(action.payload.text);
    case TODO_DESTROY:
      return state.delete(action.payload.id);
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

