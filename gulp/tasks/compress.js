/**
 * @task compress
 * Compress javascript files
 */

var gulp            = require('gulp');
var config          = require('../config'); 
var uglify          = require('gulp-uglify'); 


gulp.task('compress', function() {
    return gulp.src(config.js.input.file)
    .pipe(uglify())
    .pipe(gulp.dest(config.js.output.path));
});