
/**
 * @task sass
 * @usage $ gulp sass
 * Compiles sass files
 */

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


gulp.task('sass', function () {
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
