import { List } from 'immutable';

export const TODO_CREATE = 'TODO_CREATE';
export const TODO_COMPLETE = 'TODO_COMPLETE';
export const TODO_DESTROY = 'TODO_DESTROY';

const defaultState = new List([
  {
    image: '/assets/images/IMG_5508.jpg',
    id: '28737844',
    title: 'Сувенир с самородком',
    from: 'Предоставлен компанией Восток строй',
    startCost: '230 000 ₽',
    nowCost: '380 000 ₽'
  },
  {
    image: '/assets/images/IMG_1876-1.jpg',
    id: '28737844',
    title: 'Сувенир с самородком',
    from: 'Предоставлен компанией Запад строй',
    startCost: '130 000 ₽',
    nowCost: '230 000 ₽'
  },
  {
    image: '/assets/images/lot-filin.jpg',
    id: '28737844',
    title: 'Сувенир с самородком',
    from: 'Предоставлен компанией Восток строй',
    startCost: '230 000 ₽',
    nowCost: '380 000 ₽'
  },
  {
    image: '/assets/images/IMG_2913.jpg',
    id: '28737844',
    title: 'Сувенир с самородком',
    from: 'Предоставлен компанией Восток строй',
    startCost: '230 000 ₽',
    nowCost: '380 000 ₽'
  },
  {
    image: '/assets/images/pavlishin-tigr-winter.jpg',
    id: '28737844',
    title: 'Сувенир с самородком',
    from: 'Предоставлен компанией Восток строй',
    startCost: '230 000 ₽',
    nowCost: '380 000 ₽'
  },
  {
    image: '/assets/images/lot-2-2.jpg',
    id: '28737844',
    title: 'Сувенир с самородком',
    from: 'Предоставлен компанией Восток строй',
    startCost: '230 000 ₽',
    nowCost: '380 000 ₽'
  }
]);

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

