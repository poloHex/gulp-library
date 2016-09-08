/**
 * @task lint
 * Lints all scripts in the scripts folder
 */

var gulp            = require('gulp');
var config          = require('../config'); 
var jshint          = require('gulp-jshint');  
 
 
gulp.task('lint', function () {
    return gulp.src(config.js.input.files)
    .pipe(jshint())  
    .pipe(gulp.dest(config.js.output.path)) 
});
