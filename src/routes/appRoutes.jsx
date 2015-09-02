import React from 'react';
import { Route } from 'react-router';

import App from '../components/App/App';
import Todo from '../containers/Todo/Todo';
import About from '../containers/About/About';
import Auth from '../containers/Auth/Auth';
import Register from '../containers/Register/Register';
import Main from '../containers/Main/Main';
import Monitor from '../containers/Monitor/Monitor';
import Monitor2 from '../containers/Monitor2/Monitor2';
import Lot from '../containers/Lot/Lot';

export default (
  <Route component={App}>
    <Route path="/" component={Main} />
    <Route path="/todo" component={Todo} />
    <Route path="/active" component={Main} />
    <Route path="/auth" ro={Route} component={Auth} />
    <Route path="/register" component={Register} />
    <Route path="/monitor" component={Monitor} />
    <Route path="/monitor2" component={Monitor2} />
    <Route path="/lot" component={Lot} />
  </Route>
);
