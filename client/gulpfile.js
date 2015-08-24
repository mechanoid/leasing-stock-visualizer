/*jslint node: true, white: true, nomen: true*/

(function(){
  "use strict";

  var
      // base gulp setup
        gulp = require('gulp')
      , gutil = require('gulp-util')
      , concat = require('gulp-concat')
      , Server = require('karma').Server

      // path variables
      , path = (function(self){
        self.scripts = [self.app + '/app.js', self.app + 'components/**/!(*-test).js'];
        self.tests = self.app + 'components/**/*-test.js';
        return self;
      }({app: './app/', dist: './dist/'}))

      ;

  gulp.task('javascript', function() {
    gulp
      .src(path.scripts)
      .pipe(concat('application.js').on('error', gutil.log))
      .pipe(gulp.dest(path.dist));
  });

  gulp.task('javascript-tests', function() {
    gulp
      .src(path.tests)
      .pipe(concat('application-tests.js').on('error', gutil.log))
      .pipe(gulp.dest(path.dist));
  });

  gulp.task('test', function (done) {
    new Server({
      configFile: __dirname + '/karma.conf.js',
      singleRun: true
    }, done).start();
  });

  gulp.task('watch', ['javascript'], function() {
    gulp.watch(path.scripts, ['javascript']);
    gulp.watch(path.tests, ['javascript-tests']);
  });

  gulp.task('default', ['javascript', 'javascript-tests']);
}());
