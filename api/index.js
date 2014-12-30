var path = require('path');
var app = require('koa')();
var mount = require('koa-mount');
var serveStatic = require('koa-static');
var Router = require('koa-router');
var koaLr = require('koa-livereload');

var Api = new Router();

Api.get('/users', function *(next) {
  this.body = 'test';
});

app.use(koaLr());
app.use(serveStatic(path.join(__dirname, '..', 'public')));
app.use(mount('/api/v1', Api.middleware()));
app.use(function *() {
  this.type = 'text/html';
  this.body = '' +
    '<!doctype html>' +
    '<html lang="en-us">' +
    '<head>' +
      '<title>Pruno Test</title>' +
      '<link rel="stylesheet" href="stylesheets/app.css" />' +
    '</head>' +
    '<body>' +
      '<script src="/bundle.js"></script>' +
    '</body>' +
    '</html>';
});

app.listen(3000);
