/**
 * @task clean
 * Removes all compiled sass & javascript files
 */

var gulp            = require('gulp');
var del             = require('del');

gulp.task('clean', function(callback) {
  callback = callback || function() {};
  del([
      settings.sass.output.path
  ], callback);
});

 
