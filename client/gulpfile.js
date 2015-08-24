/*jslint node: true, white: true*/

(function(){
  "use strict";

  var
      // base gulp setup
        gulp = require('gulp')
      , gutil = require('gulp-util')
      , concat = require('gulp-concat')

      // path variables
      , path = {
          app: './app/'
        , dist: './dist/'
      };

  gulp.task('javascript', function() {
    gulp
      .src([path.app + '/app.js', path.app + 'components/**/*.js'])
      .pipe(concat('application.js').on('error', gutil.log))
      .pipe(gulp.dest(path.dist));
  });

  gulp.task('default', ['javascript']);
}());
