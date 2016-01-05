var gulp            = require('gulp');
var autoprefixer    = require('gulp-autoprefixer');
var tinypng         = require('gulp-tinypng-compress');
var sourcemaps      = require('gulp-sourcemaps');
var sass            = require('gulp-sass');
var ignore          = require('gulp-ignore');
var del             = require('del');
var notify          = require('gulp-notify');
var plumber         = require('gulp-plumber');
var browserSync     = require('browser-sync');
var reload          = browserSync.reload;


// Settings
var settings = {
    sass: {
        input: {
            file: 'styles.scss',
            files: '_app/scss/**/*.scss',
            path: '_app/scss/',
        },
        output: {
            style: 'expanded',
            sourcemap: true,
            file: 'styles.css',
            path: 'public/assets/css/',
            message: 'Sass task complete'
        }
    },
    images: {
      input: {
          files: '_app/src/images/favicons/'
      },
      output: {
          path: 'public/assets/images/favicons/'
      }
    }
};


var reportError = function (error) {

    notify({
     title: 'Error: [' + error.plugin + ']',
     subtitle: 'File: [' + error.file + ']',
     message: 'Line: ' + error.line,
     sound: 'Funk',
     duration: 10
     }).write(error);
    this.emit('end');
};

gulp.task('serve', ['styles'], function() {
  browserSync.init({
    server: {
      baseDir: 'public'
    }
  });
  gulp.watch(settings.sass.input.files, ['styles']);
  gulp.watch('public/*.html').on('change',browserSync.reload);
});


/**
 * @task sass
 * @usage $ gulp sass
 * Compiles sass files
 */
gulp.task('styles', function () {
    'use strict';

    return gulp.src('_app/scss/styles.scss')
    .pipe(plumber({
      errorHandler : reportError
    }))
    .pipe(sourcemaps.init())
    .pipe(sass({
        outputStyle: 'compressed',
        precision: 14,
    }).on('error',sass.logError))
    .pipe(autoprefixer())
    .pipe(sourcemaps.write('./'))
    .pipe(browserSync.stream())
    .pipe(gulp.dest(settings.sass.output.path))
    .pipe(ignore.exclude('*.map'))
});


/**
 * @task tinypng
 * @usage $ gulp tinypng
 * Compress image files
 */
 gulp.task('tinypng', function() {
   gulp.src(settings.images.input.files+'/**/*')
   .pipe(tinypng({
     key: 'API-KEY',
		 log: true
   }))
   .pipe(gulp.dest(settings.images.output.path));
 });



/**
 * @task clean
 * Removes all compiled sass & javascript files
 */
gulp.task('clean', function(callback) {
  callback = callback || function() {};
  del([
      settings.sass.output.path
  ], callback);
});


/**
 * @task default
 * @usage $ gulp
 */
gulp.task('default', ['serve']);
