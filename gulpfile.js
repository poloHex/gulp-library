var gulp            = require('gulp');
var requireDir      = require('require-dir');

// Gulp snippets, recurse default is false
requireDir('./gulp/tasks', { recurse: false });


// DEV -  Serve sass with live reload
gulp.task('default', ['serve']);


// BUILD
// gulp.task('default', ['build']);
