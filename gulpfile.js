var gulp = require('gulp');
var gutil = require('gulp-util');
var stylus = require('gulp-stylus');
var webpack = require('webpack');

/* ------------------------------------------------ */

var paths = {
  styleDestPath: './dist/css',
};

gulp.task('styles', function () {
  return gulp.src('./src/styles/*.styl')
    .pipe(stylus({
      compress: true
    }))
    .pipe(gulp.dest(paths.styleDestPath));
});

gulp.task('webpack', function (callback) {
  webpack(require('./webpack.config'), function (err, stats) {
    if (err) throw new gutil.PluginError("webpack", err);
    gutil.log("[webpack]", stats.toString({
      colors: true
    }));
    callback();
  });
});

gulp.task('watch', function () {
  gulp.watch('src/styles/**/*.styl', ['styles']);
});

gulp.task('default', ['styles', 'webpack']);
