var gulp = require('gulp');
var shell = require('gulp-shell');
var del = require('del');
var rename = require('gulp-rename');
var rev = require('gulp-rev');


gulp.task('clean', function () {
  del([
    'dist/*',
  ]);
});


gulp.task('build-zepto', shell.task(
  ['npm run dist'],
  {
    env: {
      MODULES: 'zepto event',
    },
  }
));


gulp.task('build', ['build-zepto'], function () {
  return gulp
    .src('dist/zepto.min.js')
    .pipe(rename('zepto.js'))
    .pipe(rev())
    .pipe(gulp.dest('dist'));
});
