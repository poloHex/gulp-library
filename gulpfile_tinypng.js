/**
Compress with Tinypng

gulp-tinypng-compress: https://www.npmjs.com/package/gulp-tinypng

Requirements
Tinypng API Key: https://tinypng.com/developers/

**/

var gulp = require('gulp');
var tinypng = require('gulp-tinypng-compress');

var paths = {
  src: './_app/src/images/',
  images: './public/assets/images/'
};

gulp.task('tinypng', function() {
    gulp.src(paths.src)
    .pipe(tinypng({
      key: 'API-KEY',
			log: true
    }))
    .pipe(gulp.dest(paths.images));
});

gulp.task('default', ['tinypng']);
