import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import { devTools, persistState } from 'redux-devtools';
import promiseMiddleware from 'redux-promise';
import * as reducers from '../stores';
import * as i18n from '../i18n';

export default function createAppStore(initialState){
  const finalCreateStore = compose(
    applyMiddleware(promiseMiddleware),
    devTools()
    //persistState(window.location.href.match(/[?&]debug_session=([^&]+)\b/)),
  )(createStore);

  const reducer = combineReducers(reducers);
  var store;
  if (true){
    store = finalCreateStore(reducer, initialState); //with devTools
  } else {
    store = createStore(reducer, initialState);
  }
  return store;
}

