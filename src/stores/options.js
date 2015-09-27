import { fromJS } from 'immutable';

export const CHANGE_SORT = 'CHANGE_SORT';

const defaultState = {
  sort: 'date'
};

export default function(state = defaultState, action) {
  switch (action.type) {
    case CHANGE_SORT:
      var sort = { sort: action.payload.sort };
      return fromJS(sort);
    default:
      return state;
  }
}

export function changeSort(sort = 'date') {
  return {
    type: CHANGE_SORT,
    payload: { sort }
  };
}
