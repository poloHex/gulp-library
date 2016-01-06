/**
* Browser reload on change, if error occurs show a message and restart watch

* Requirements
* gulp-plumber: https://github.com/floatdrop/gulp-plumber
* gulp-notify: https://github.com/mikaelbr/gulp-notify

**/

var gulp            = require('gulp');
var config          = require('../config');
var requireDir      = require('require-dir');
var browserSync     = require('browser-sync');
var reload          = browserSync.reload;


gulp.task('serve', ['styles'], function() {
  browserSync.init({
    server: {
      baseDir: 'public'
    }
  });
  gulp.watch(config.sass.input.files, ['sass']);
  gulp.watch('public/*.html').on('change',browserSync.reload);
});
