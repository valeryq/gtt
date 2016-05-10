var gulp = require('gulp');
var webpack = require('webpack');

/* ------------------------------------------------ */

var paths = {
  scripts: 'src/scripts/**/*.js',
};

gulp.task('webpack', function () {
  webpack(require('./webpack.config'));
});

gulp.task('watch', function () {
});

gulp.task('default', ['watch']);
