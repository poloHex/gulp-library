/**
* @task tinypng
* Compress with Tinypng

* gulp-tinypng-compress: https://www.npmjs.com/package/gulp-tinypng

* Requirements
* Tinypng API Key: https://tinypng.com/developers/

**/

var gulp            = require('gulp');
var config          = require('../config');
var tinypng         = require('gulp-tinypng-compress');

gulp.task('tinypng', function() {
    gulp.src(config.images.input.files)
    .pipe(tinypng({
      key: 'API-KEY',
	  log: true
    }))
    .pipe(gulp.dest(config.images.output.path));
});
