/**
 * @task browserify
 * Compiles javascript modules
 */


var gulp            = require('gulp');
var config          = require('../config');
var browserSync     = require('browser-sync');
var uglify          = require('gulp-uglify');
var ignore          = require('gulp-ignore');
var notify          = require('gulp-notify');
var plumber         = require('gulp-plumber');
var sourcemaps      = require('gulp-sourcemaps');
var buffer          = require('vinyl-buffer');

 
gulp.task('bundle', function () {
    return gulp.src(config.js.input.file)
    .pipe(buffer())
    .pipe(gulp.dest(config.js.output.path));
});


gulp.task('compress', function() {
    return gulp.src(config.js.input.file)
    .pipe(uglify())
    .pipe(gulp.dest(config.js.output.path));
});
