import React from 'react';
import {Route, DefaultRoute, RouteNotFound} from 'react-router';
import App from './App';
import IndexRoute from './IndexRoute';
import TodoRoute from './TodoRoute';

var Routes = (
  <Route handler={App}>
    <DefaultRoute name="index" handler={IndexRoute} />
    <Route name="todos" handler={TodoRoute} />
  </Route>
);

module.exports = Routes;
