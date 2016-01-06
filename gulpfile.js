var gulp            = require('gulp');
var requireDir      = require('require-dir');

// Gulp snippets, recurse default is false
requireDir('./gulp/tasks', { recurse: false });

// Run default task
gulp.task('default', ['serve']);
