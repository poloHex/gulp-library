/**
 * @task require
 * Lints all scripts in the scripts folder
 */
var gulp            = require('gulp');
var config          = require('../config');
var shell           = require('gulp-shell');

gulp.task('require', shell.task([
    'cd $PWD/' + config.js.input.path + ' && r.js -o ' + config.js.input.build
]))


