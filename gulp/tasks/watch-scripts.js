/**
 * @taske scripts
 * Runs lint and bundle
 * watches all scripts during development build
 */

 var gulp            = require('gulp');
 var config          = require('../config');
 var browserSync     = require('browser-sync');
 var reload          = browserSync.reload;



 gulp.task('watch-scripts', function () {
   return gulp.src(config.js.input.files)
   .pipe(browserSync.stream())
 });
