/**
 * @task build
 * Lints all scripts in the scripts folder
 */

var gulp            = require('gulp');
var config          = require('../config');

// Default build
gulp.task('build', ['scripts','sass' ]);

// Build with require.js
gulp.task('rbuild', ['require','sass' ]);
