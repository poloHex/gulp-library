
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


var images = [
    { rename: 'mstile-558x558', width: 558, crop: false },
    { rename: 'mstile-558x270', width: 558, height: 270, crop: true },
    { rename: 'mstile-270x270', width: 270, height: 270, crop: true },
    { rename: 'mstile-128x128', width: 128, height: 128, crop: true },
    { rename: 'icon-192x192', width: 192, height: 192, crop: true },
    { rename: 'icon-144x144', width: 144, height: 144, crop: true },
    { rename: 'icon-96x96', width: 96, height: 96, crop: true },
    { rename: 'icon-72x72', width: 72, height: 72, crop: true },
    { rename: 'icon-48x48', width: 48, height: 48, crop: true },
    { rename: 'icon-36x36', width: 36, height: 36, crop: true },
    { rename: 'favicon-192x192', width: 192, height: 192, crop: true },
    { rename: 'apple-touch-icon-192x192', width: 192, height: 192, crop: true },
];

/**
 * @task batch
 * @usage $ gulp batch
 * Batch, resize and compress of favicon
 */
gulp.task('batch', function () {

  images.forEach(function(type){

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
