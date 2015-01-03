import React from 'react';
import ReactRouter from 'react-router';
import Routes from './components/Routes';
import flux from './flux';

ReactRouter.run(Routes, ReactRouter.HistoryLocation, function(Handler, state) {
  var {routes, params, query} = state;

  fetchData(routes, params, query).then(data => {
    React.render(
      <Handler
        params={params}
        query={query} />,
      document
    );
  });
});

function fetchData(routes, params, query) {
  var promiseArray = generatePromises(routes, params, query);

  return Promise.all(promiseArray)
    .then(data => data.reduce((memo, item) => {
      return Object.assign(memo, item);
    }, {}));
};

function generatePromises(routes, params, query) {
  return routes.filter(route => route.handler.fetchData)
    .map(route => {
      return new Promise((resolve, reject) => {
        route.handler.fetchData(params, query)
          .then(resolve)
          .catch(reject);
      });
    });
}
