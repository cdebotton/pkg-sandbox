import React from 'react';
import ReactRouter from 'react-router';
import Routes from './components/Routes';
import {fetchData} from 'fluxd';
import flux from './flux';

export default function render() {
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
}

if (typeof window !== 'undefined') {
  document.addEventListener('DOMContentLoaded', render, false);
}
