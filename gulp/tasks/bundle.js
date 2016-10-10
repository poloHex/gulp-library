
/**
* @task bundle
* @usage $ gulp bundle
**/

var gulp            = require('gulp');
var config          = require('../config');
var browserSync     = require('browser-sync');
var buffer          = require('vinyl-buffer');
var rename          = require("gulp-rename");
var path            = require('path'); //extracts the file name and not the path
var uglify          = require('gulp-uglify');

gulp.task('bundle', function () {
    return gulp.src(config.js.input.file)
    .pipe(uglify())
    .pipe(browserSync.stream())
    .pipe(rename(config.js.output.file))
    .pipe(gulp.dest(config.js.output.path))
    .pipe(buffer());
});
