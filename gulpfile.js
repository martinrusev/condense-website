var gulp = require('gulp');


var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('sass', function () {
  gulp.src('static/sass/**/*.scss')
    // .pipe(sourcemaps.init())
	.pipe(sass().on('error', sass.logError))
	.pipe(sass({outputStyle: 'compressed'}))
	// .pipe(sourcemaps.write())
	.pipe(gulp.dest('static/css'));
});

gulp.task('sass:watch', function () {
  gulp.watch('static/sass/**/*.scss', ['sass']);
});
