import React from 'react';
import {RouteHandler, Link} from 'react-router';
import Promise from 'bluebird';

var App = React.createClass({
  statics: {
    fetchData(params, query) {
      return Promise.resolve({
        data: 'test'
      });
    }
  },

  render() {
    var livereload = `document.write('<script src="http://' ` +
      `+ (location.host || 'localhost').split(':')[0] + ` +
      `':35729/livereload.js?snipver=1"></' + 'script>')`;

    return (
      <html>
        <head>
          <title>Koa React</title>
          <link rel="stylesheet" href="/stylesheets/app.css" />
        </head>
        <body>
          <h1>Koa React</h1>
          <nav>
            <Link to="index">Home</Link>
            <Link to="todos">Todos</Link>
          </nav>
          <RouteHandler {...this.props} />
          <script dangerouslySetInnerHTML={{__html: livereload}} />
          <script src="/bundle.js" />
        </body>
      </html>
    );
  }
});

export default App;
