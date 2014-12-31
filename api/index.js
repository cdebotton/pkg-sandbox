import Router from 'koa-router';
import requireDir from 'require-dir';

var ApiV1 = new Router();
var ApiV1Routes = requireDir('./v1');

Object.keys(ApiV1Routes)
  .forEach(routeFile => ApiV1Routes[routeFile](ApiV1));

export {ApiV1};
