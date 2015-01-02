import React from 'react';
import ReactRouter from 'react-router';
import Routes from './components/Routes';
import {fetchData} from 'koa-router';

console.log(fetchData);


ReactRouter.run(Routes, ReactRouter.HistoryLocation, function(Handler, state) {
  React.render(
    <Handler
      params={state.params}
      query={state.query} />,
    document
  );
});
