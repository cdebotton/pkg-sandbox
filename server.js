var KoaReact = require('koa-react').KoaReact;
var Config = require('koa-react').Config;
var flux = require('fluxd').flux;
var ApiV1 = require('./api').ApiV1;
var app = new KoaReact();

app.setClient({
  routes: require.resolve('./app/components/routes'),
  router: require.resolve('react-router')
});

app.mount('/api/v1', ApiV1);

app.createServer().listen(Config.get('app.port'), function() {
  console.log('Listening on port %s.', Config.get('app.port'));
});
