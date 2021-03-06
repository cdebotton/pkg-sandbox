'use strict';

var gulp = require('gulp');
var pruno = require('pruno').use(gulp);

pruno(function(runner) {
  runner.del(['./public/']);
  runner.publish('./node_modules/font-awesome/fonts/*', '/fonts/');
  runner.images('/assets/images/**/*', 'images');
  runner.assets(['!/assets/images/**/*', '/assets/**/*']);
  runner.koa('server.js')
  runner.stylus('index.styl');
  runner.browserify({
    runtime: true
  });
  runner.livereload(['./public/**/*']);
});
