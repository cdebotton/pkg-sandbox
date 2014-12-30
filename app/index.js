import React from 'react';
import ReactRouter from 'react-router';
import Routes from './components/Routes';

ReactRouter.run(Routes, ReactRouter.HistoryLocation, function(Handler, state) {
  React.render(
    <Handler
      params={state.params}
      query={state.query} />,
    document
  );
});
