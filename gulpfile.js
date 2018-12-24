var gulp = require('gulp');
var sass = require('gulp-sass');
 
sass.compiler = require('node-sass');
 
gulp.task('sass', function () {
  return gulp.src('./src/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./dist'));
});
 
gulp.task('sass:watch', function () {
  gulp.watch('./src/**/*.scss', gulp.series('sass'));
});

var sourcemaps = require('gulp-sourcemaps');
gulp.task('sass', function () {
 return gulp.src('./src/**/*.scss')
  .pipe(sourcemaps.init())
  .pipe(sass().on('error', sass.logError))
  .pipe(sourcemaps.write('./maps'))
  .pipe(gulp.dest('./dist'));
});

gulp.task('build', gulp.series('sass'));
gulp.task('watch', gulp.series('sass:watch'));
