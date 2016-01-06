
/**
* Batch image crop and compress with Tinypng, Image Resize and Rename
* gulp-tinypng-compress: https://www.npmjs.com/package/gulp-tinypng
* gulp-image-resize: https://www.npmjs.com/package/gulp-image-resize
* gulp-rename: https://www.npmjs.com/package/gulp-rename

* Requirements
* Tinypng API Key: https://tinypng.com/developers/
**/

var gulp            = require('gulp');
var config          = require('../config');
var imageresize     = require('gulp-image-resize');
var rename          = require('gulp-rename');
var tinypng         = require('gulp-tinypng-compress');




/**
 * @task batch
 * @usage $ gulp batch
 * Batch, resize and compress of favicon
 */
gulp.task('batch', function () {

  favicons.forEach(function(type){

      var resize_settings = {
          width: type.width,
          crop: type.crop,
          upscale : false
      }

      if (type.hasOwnProperty("height")) {
          resize_settings.height = type.height
      }

      gulp

      .src(config.images.input.favicons+'/**/*')
      .pipe(imageresize(resize_settings))
      .pipe(rename(type.rename))

      .pipe(tinypng({
        key: 'API-KEY',
  	    log: true
      }))

      .pipe(gulp.dest(config.images.output.favicons));

  });
});
