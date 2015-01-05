import React from 'react';
import ReactRouter from 'react-router';
import Routes from './components/Routes';
import flux from './flux';
import {fetchData} from 'fluxd';

ReactRouter.run(
  Routes,
  ReactRouter.HistoryLocation,
  (Handler, state) => {
    fetchData(state).then(data => {
      React.render(
        <Handler params={state.params} query={state.query} />,
        document
      );
    });
  }
);
