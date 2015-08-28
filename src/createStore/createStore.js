import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import { devTools, persistState } from 'redux-devtools';
import promiseMiddleware from 'redux-promise';
import * as reducers from '../reducers';

export default function createAppStore(initialState){
  const finalCreateStore = compose(
    applyMiddleware(promiseMiddleware),
    devTools(),
    persistState(window.location.href.match(/[?&]debug_session=([^&]+)\b/)),
    createStore
  );

  const reducer = combineReducers(reducers);
  var store;
  if (__DEVELOPMENT__){
    store = finalCreateStore(reducer, initialState); //with devTools
  } else {
    store = createStore(reducer, initialState);
  }
  return store;
}

