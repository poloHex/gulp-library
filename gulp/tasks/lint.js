/**
 * @task lint
 * Lints all scripts in the scripts folder
 */

var gulp            = require('gulp');
var config          = require('../config');
var jshint          = require('gulp-jshint'); // JS linting
var chalk           = require('chalk'); // JS linting
var notify          = require('gulp-notify'); // OSX notifications
var plumber         = require('gulp-plumber'); // continues watch on error
var map             = require('map-stream');
var path            = require('path'); //extracts the file name and not the path
var buffer          = require('vinyl-buffer');


lintError = function (error) {
    notify({
       title: 'Error: [gulp-jshint]' + ' ' + jsfile ,
       message: ' LINE:' + line + ' ' + reason,
       sound: 'Funk',
     }).write(error);
     console.log(config.chalkStyles.eTitle.white.bgRed('REPORT : Error in gulp-jshint ') + '\n' + config.chalkStyles.eTitle('FILE: ') + config.chalkStyles.eMsg(jsfile) + '\n' + config.chalkStyles.eTitle('LINE: ') + config.chalkStyles.eMsg(line) + '\n' + config.chalkStyles.eTitle('COL:  ') +  config.chalkStyles.eMsg(character) + '\n' + config.chalkStyles.eTitle('WHY: ') + config.chalkStyles.eMsg(reason) + '\n' +  config.chalkStyles.eTitle('CODE: ') + config.chalkStyles.eMsg(code));
    this.emit('end');
};


lintReport = map(function (file, cb) {
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
      errorHandler : lintError
    }))
    .pipe(lintReport);
});
