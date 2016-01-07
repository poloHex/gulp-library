/**
* Dev set up watches uncompiled scripts, sass files with browser reload and osx noitify messaging

* Requirements
* gulp-plumber: https://github.com/floatdrop/gulp-plumber
* gulp-notify: https://github.com/mikaelbr/gulp-notify

**/

var gulp            = require('gulp');
var config          = require('../config');
var requireDir      = require('require-dir');
var browserSync     = require('browser-sync');
var reload          = browserSync.reload;


gulp.task('serve', function() {
  browserSync.init({
    server: {
      baseDir: config.baseurl
    }
  });
  gulp.watch(config.sass.input.files, ['sass']);
  gulp.watch(config.js.input.files, ['watch']);
  gulp.watch(config.baseurl+'/*.html').on('change',browserSync.reload);
});

gulp.task('watch', function () {
  return gulp.src(config.js.input.files)
  .pipe(browserSync.stream())
});
