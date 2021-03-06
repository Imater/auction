import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from '../components/App/App';
import Todo from '../containers/Todo/Todo';
import About from '../containers/About/About';
import Auth from '../containers/Auth/Auth';
import Register from '../containers/Register/Register';
import Profile from '../containers/Profile/Profile';
import Main from '../containers/Main/Main';
import Monitor from '../containers/Monitor/Monitor';
import Monitor2 from '../containers/Monitor2/Monitor2';
import Conditions from '../components/Conditions/Conditions';
import Lot from '../containers/Lot/Lot';

const auth = (nextState, transition, callback) => {
  callback();
};

export default (
  <Route path="/" component={App}>
    <IndexRoute component={Main} />
    <Route path="/todo" component={Todo} />
    <Route path="/active" component={Main} />
    <Route path="/favorite" component={Main} />
    <Route path="/profile" component={Profile} />
    <Route path="/auth" ro={Route} component={Auth}>
      <Route path="restore" component={About} />
    </Route>
    <Route path="/register" component={Register} />
    <Route path="/monitor" component={Monitor} />
    <Route path="/monitor2" component={Monitor2} />
    <Route path="/monitor3" component={Monitor2} />
    <Route path="/conditions" component={Conditions} />
    <Route path="/lot/:index" component={Lot} onEnter={auth}/>
  </Route>
);
