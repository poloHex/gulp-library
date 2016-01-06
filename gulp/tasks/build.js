/**
* Build Script (WIP)

* Requirements
* gulp-plumber: https://github.com/floatdrop/gulp-plumber
* gulp-notify: https://github.com/mikaelbr/gulp-notify

**/


var gulp            = require('gulp');
var config          = require('../config');
var autoprefixer    = require('gulp-autoprefixer');
var sourcemaps      = require('gulp-sourcemaps');
var sass            = require('gulp-sass');
var ignore          = require('gulp-ignore');
var notify          = require('gulp-notify');
var plumber         = require('gulp-plumber');
var browserSync     = require('browser-sync');
var reload          = browserSync.reload;


var reportError = function (error) {
    notify({
       title: 'Error: [' + error.plugin + ']',
       subtitle: 'File: [' + error.file + ']',
       message: 'Line: ' + error.line ,
       sound: 'Funk',
       duration: 5
     }).write(error);
    this.emit('end');
};

gulp.task('serve', ['styles'], function() {
  browserSync.init({
    server: {
      baseDir: 'public'
    }
  });
  gulp.watch(config.sass.input.files, ['styles']);
  gulp.watch('public/*.html').on('change',browserSync.reload);
});


/**
 * @task sass
 * @usage $ gulp sass
 * Compiles sass files
 */
gulp.task('styles', function () {
    'use strict';

    return gulp.src('_app/scss/styles.scss')
    .pipe(plumber({
      errorHandler : reportError
    }))
    .pipe(sourcemaps.init())
    .pipe(sass({
        outputStyle: 'compressed',
        precision: 14,
    }).on('error',sass.logError))
    .pipe(autoprefixer())
    .pipe(sourcemaps.write('./'))
    .pipe(browserSync.stream())
    .pipe(gulp.dest(config.sass.output.path))
    .pipe(ignore.exclude('*.map'))
});
