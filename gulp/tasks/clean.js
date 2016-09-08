/**
 * @task clean
 * Removes all compiled sass & javascript files
 */

var gulp            = require('gulp');
var config          = require('../config');
var del             = require('del');

gulp.task('clean', function(callback) {
  callback = callback || function() {};
  del([
      config.sass.output.path, config.js.output.path
  ], callback);
});
