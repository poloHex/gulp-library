/**
 * @task lint
 * Lints all scripts in the scripts folder
 */

var gulp            = require('gulp');
var config          = require('../config');
var kit             = require('gulp-kit');
var notify          = require('gulp-notify');
var plumber         = require('gulp-plumber');
var browserSync     = require('browser-sync');
var reload          = browserSync.reload;


gulp.task('kit', function () {
    return gulp.src(config.kit.input.files)
    .pipe(plumber({
      errorHandler : kitError
    }))
    .pipe(kit({compilePartials : false}))
    .pipe(browserSync.stream())
    .pipe(gulp.dest(config.kit.output.path));
});
