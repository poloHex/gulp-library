/**
 * @task lint
 * Lints all scripts in the scripts folder
 */

var gulp            = require('gulp');
var config          = require('../config');
var browserSync     = require('browser-sync');
var buffer          = require('vinyl-buffer');
var chalk           = require('chalk');
var ignore          = require('gulp-ignore');
var jshint          = require('gulp-jshint'); // JS linting
var map             = require('map-stream');
var notify          = require('gulp-notify');
var rename          = require("gulp-rename");
var path            = require('path'); //extracts the file name and not the path
var plumber         = require('gulp-plumber');
var sourcemaps      = require('gulp-sourcemaps');
var uglify          = require('gulp-uglify');


 var scriptsError = function (error) {
    notify({
       title: 'Error: [gulp-jshint]' + ' ' + jsfile ,
       message: ' LINE:' + line + ' ' + reason,
       sound: 'Funk',
     }).write(error);
     console.log(config.chalkStyles.eTitle.white.bgRed('REPORT : Error in gulp-jshint ') + '\n' + config.chalkStyles.eTitle('FILE: ') + config.chalkStyles.eMsg(jsfile) + '\n' + config.chalkStyles.eTitle('LINE: ') + config.chalkStyles.eMsg(line) + '\n' + config.chalkStyles.eTitle('COL:  ') +  config.chalkStyles.eMsg(character) + '\n' + config.chalkStyles.eTitle('WHY: ') + config.chalkStyles.eMsg(reason) + '\n' +  config.chalkStyles.eTitle('CODE: ') + config.chalkStyles.eMsg(code));
    this.emit('end');
};


scriptsReport = map(function (file, cb) {
  if (!file.jshint.success) {
    jsfile = path.basename(file.path);
    file.jshint.results.forEach(function (err) {
      if (err) {
        line = err.error.line;
        character = err.error.character;
        reason = err.error.reason;
        code = err.error.code;
        notify().write(error);
      }
    });
  }
  cb(null, file);
});

gulp.task('lint', function () {
    return gulp.src(config.js.input.files)
    .pipe(jshint())
    .pipe(plumber({
      errorHandler : scriptsError
    }))
});
