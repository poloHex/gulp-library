/**
* @task serve
* A development set up includes browser-sync, OSX notify messaging for sass errors and watches uncompiled scripts & sass files

* Requirements
* gulp-plumber: https://github.com/floatdrop/gulp-plumber
* gulp-notify: https://github.com/mikaelbr/gulp-notify

**/

var gulp            = require('gulp');
var config          = require('../config');
var browserSync     = require('browser-sync');
var requireDir      = require('require-dir');
var reload          = browserSync.reload;

gulp.task('serve', function() {
  browserSync.init({
    server: {
      baseDir: config.baseurl
    }
  });
  gulp.watch(config.sass.input.files, ['sass']);
  gulp.watch(config.js.input.files, ['scripts']);
  gulp.watch(config.baseurl+'/*'+config.baseIndexType).on('change',browserSync.reload);
});

gulp.task('watch', function () {
  return gulp.src(config.js.input.files)
  .pipe(browserSync.stream())
});
