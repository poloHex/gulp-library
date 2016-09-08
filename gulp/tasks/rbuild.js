/**
 * @task require
 * Lints all scripts in the scripts folder
 */
var gulp            = require('gulp');
var config          = require('../config');
var shell           = require('gulp-shell');

gulp.task('rbuild', shell.task([
    'cd  $PWD',
    'r.js -o '+ config.js.input.path + config.js.input.rbuild
]))



