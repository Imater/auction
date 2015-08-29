import React from 'react';
import { Route } from 'react-router';

import App from '../components/App/App';
import Todo from '../containers/Todo/Todo';
import About from '../containers/About/About';
import Auth from '../containers/Auth/Auth';
import Main from '../containers/Main/Main';

export default (
  <Route component={App}>
    <Route path="/" component={Main} />
    <Route path="/todo" component={Todo} />
    <Route path="/active" component={About} />
    <Route path="/auth" component={Auth} />
  </Route>
);
