## gulp-library (https://github.com/tarah-s/gulp-library)

A gulp task library for project builds.


### Requirements
* [Node.js] (https://nodejs.org/en/)
* [Gulp] (http://gulpjs.com/)

#### Image processing
You can use homebrew to install both ImageMagick and GraphicsMagick. These will be needed to run resize of image files.
* [Homebrew] (http://brew.sh/)
* [ImageMagick] (http://www.imagemagick.org/script/index.php)
* [GraphicsMagick] (http://www.graphicsmagick.org/)

### Installation
```
git clone https://github.com/tarah-s/gulp-library.git
npm install

```

### Start
gulp will run the gulp serve script by default. You can change this in gulpfile.js.
gulp serve is a development set up includes browser-sync, OSX notify messaging for sass errors and watches uncompiled scripts & sass files.

```
gulp

```
At this point in time there is no build script.

### Config
Change all your global settings in the gulp/config.js file


### Run individual gulp tasks
```
gulp batch

```

### Resources
* [Gulp - Getting Started] (https://github.com/gulpjs/gulp/blob/master/docs/getting-started.md)
* [Browsersync + Gulp.js] (https://www.browsersync.io/docs/gulp/)
* [Handling errors when working with SASS, Watch, Plumber and Gulp] (http://frontendgods.com/handling-errors-when-working-with-sass-watch-plumber-and-gulp/)
* [CSS Tricks - Gulp for Beginners] (https://css-tricks.com/gulp-for-beginners/)
* [Hugo Giraudel - A Simple Gulp’y Workflow For Sass] (http://www.sitepoint.com/simple-gulpy-workflow-sass/)
* [Patrick Catanzariti - Getting Started with Browserify] (http://www.sitepoint.com/getting-started-browserify/)
* [Smashing Magazine - Efficient Image Resizing With ImageMagick] (http://www.smashingmagazine.com/2015/06/efficient-image-resizing-with-imagemagick/)
* [ImageMagick Options] (http://www.imagemagick.org/script/command-line-options.php)
* [Using gulp with Babel] (http://macr.ae/article/gulp-and-babel.html)
* [Splitting a gulpfile into multiple files] (https://blog.simpleblend.net/gulp-organization-structure/)
* [Gulp Organization & Structure] (http://macr.ae/article/splitting-gulpfile-multiple-files.html)
* [require-Dir] (https://github.com/aseemk/requireDir)
* [jsHint Docs] (http://jshint.com/docs/)
* [node path] (https://nodejs.org/docs/latest/api/path.html)
* [Lint error reporting] (https://gist.github.com/rudijs/9148283)
* [Scotch io - gulp automation] (https://scotch.io/tutorials/automate-your-tasks-easily-with-gulp-js)
* [JSPM] (http://jspm.io/docs/getting-started.html)
* [ryantbrown] (https://gist.github.com/ryantbrown/239dfdad465ce4932c81)
