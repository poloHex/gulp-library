/**
 * @task clear
 * Clears the cache
 */

var gulp            = require('gulp');
var cache           = require('gulp-cache');

gulp.task('clear', function(done) {
  return cache.clearAll(done);
});
