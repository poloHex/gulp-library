var gulp            = require('gulp');
var requireDir      = require('require-dir');

// Global Settings
settings = {
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
          files: '_app/src/images/',
          favicons: '_app/src/images/favicons/'
      },
      output: {
          path: 'public/assets/images/',
          favicons: 'public/assets/images/favicons/'
      }
    }
};

// Gulp snippets
requireDir('./gulp', { recurse: false });

// Run default task
gulp.task('default', ['serve']);
