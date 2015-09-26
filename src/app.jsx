// React
import React from 'react';
import ReactDOM from 'react-dom';

// Router
import { Router } from 'react-router';
import { history } from 'history';
import appRoutes from './routes/appRoutes';
import createAppStore from './createStore/createStore';

import { Provider } from 'react-redux';
import { fromJS } from 'immutable';

let initialState = window.__INITIAL_STATE__;

Object.keys(initialState).forEach((key) => {
  initialState[key] = fromJS(initialState[key]);
});


const store = createAppStore(initialState);

ReactDOM.render(
  <Provider store={store}>
    <Router history={history} children={appRoutes}/>
  </Provider>,
  document.getElementById('app')
);
