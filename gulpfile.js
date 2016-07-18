var gulp = require('gulp');
var child = require('child_process');
var gutil = require('gulp-util');
var deploy = require('gulp-gh-pages');
var bsync = require('browser-sync').create();

var paths = {
  src: './src',
  dist: './dist'
};

var logger = function (buffer) {
  buffer.toString().split(/\n/).forEach(function (message) {
    gutil.log('Jekyll: ' + message);
  });
}

// build jekyll
gulp.task('jekyll:build', function () {
  var jekyll = child.spawn('jekyll', [
    'build',
    '--source',
    paths.src,
    '--destination',
    paths.dist
  ]);
  jekyll.stdout.on('data', logger);
  jekyll.stderr.on('data', logger);
});
// build jekyll
gulp.task('jekyll:watch', function () {
  var jekyll = child.spawn('jekyll', [
    'build',
    '--source',
    paths.src,
    '--destination',
    paths.dist,
    '--watch'
  ]);
  jekyll.stdout.on('data', logger);
  jekyll.stderr.on('data', logger);
});

// serve locally
gulp.task('serve', ['jekyll:watch'], function () {
  bsync.init({
    files: [paths.dist + '/**'],
    port: 4000,
    server: {
      baseDir: paths.dist
    }
  })
});

// deploy to gh-pages
