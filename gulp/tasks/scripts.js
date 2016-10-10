/**
 * @task scripts
 * Compiles , minifies & lints javascript modules with terminal & osx notify error report
 */

var gulp            = require('gulp');
var config          = require('../config');

// Default scripts
gulp.task('scripts',['lint','bundle']);

// scripts with require.js
gulp.task('rbuild', ['lint','require' ]);
