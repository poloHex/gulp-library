/**
 * @task scripts
 * Compiles , minifies & lints javascript modules with terminal & osx notify error report
 */

var gulp            = require('gulp');
var config          = require('../config');
var browserSync     = require('browser-sync');
var buffer          = require('vinyl-buffer');
var chalk           = require('chalk');
var ignore          = require('gulp-ignore');
var jshint          = require('gulp-jshint'); // JS linting
var map             = require('map-stream');
var notify          = require('gulp-notify');
var rename          = require("gulp-rename");
var path            = require('path'); //extracts the file name and not the path
var plumber         = require('gulp-plumber');
var sourcemaps      = require('gulp-sourcemaps');
var uglify          = require('gulp-uglify');


gulp.task('bundle', function () {
    return gulp.src(config.js.input.file)
    .pipe(uglify())
    .pipe(browserSync.stream())
    .pipe(rename(config.js.output.file))
    .pipe(gulp.dest(config.js.output.path))
    .pipe(buffer());
});


gulp.task('scripts',['lint','bundle']);
