const gulp = require('gulp');
const cleanCSS = require('gulp-clean-css');
const pug = require('gulp-pug');
const watch = require('gulp-watch');

gulp.task('minify-css', () => {
  return gulp.src('styles/*.css')
    .pipe(cleanCSS({compatibility: 'ie8'}))
    .pipe(gulp.dest('dist'));
});
gulp.task('pug',function() {
 return gulp.src('views/*.pug')
 .pipe(pug({
    doctype: 'html',
    pretty: false
 }))
 .pipe(gulp.dest('../'));
});

gulp.task('default', ['minify-css','pug','watch']);
gulp.task('watch', function () {
 return watch('PATH_TO_TEMPLATES/*.jade', { ignoreInitial: false })
    .pipe(gulp.dest('pug'));
 });
