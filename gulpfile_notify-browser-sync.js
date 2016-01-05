/**
Browser roload on change, if error occurs show a message anf restart watch

Requirements
gulp-plumber: https://github.com/floatdrop/gulp-plumber
gulp-notify: https://github.com/mikaelbr/gulp-notify

**/


var gulp            = require('gulp');
var autoprefixer    = require('gulp-autoprefixer');
var sourcemaps      = require('gulp-sourcemaps');
var sass            = require('gulp-sass');
var ignore          = require('gulp-ignore');
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
    }
};

var reportError = function (error) {
    notify({
       title: 'Error: [' + error.plugin + ']',
       subtitle: 'File: [' + error.file + ']',
       message: 'Line: ' + error.line + ' --  See console.',
       sound: 'Funk',
       duration: 5
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
 * @task default
 * @usage $ gulp
 */
gulp.task('default', ['serve']);
