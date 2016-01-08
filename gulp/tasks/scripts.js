/**
 * @task scripts
 * Lints all scripts in the scripts folder
 */

var gulp            = require('gulp');
var config          = require('../config');


gulp.task('scripts', ['bundle', 'lint']);
