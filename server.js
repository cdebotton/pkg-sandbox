var KoaReact = require('koa-react').KoaReact;
var Config = require('koa-react').Config;
var app = new KoaReact();

Config.set('client.routes', require('./app/components/routes'));
Config.set('client.router', require('react-router'));

app.createServer().listen(Config.get('app.port'), function() {
  console.log('Listening on port %s.', Config.get('app.port'));
});
