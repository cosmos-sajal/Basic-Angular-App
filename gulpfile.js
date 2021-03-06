var gulp = require('gulp');
var sass = require('gulp-ruby-sass');
var connect = require('gulp-connect');
var browserify = require('browserify');
var source = require('vinyl-source-stream');

// Connect Task
gulp.task('connect', function() {
	connect.server({
		root : 'public',
		port : 4000
	});
});

// Browserify Task
gulp.task('browserify', function() {
	return browserify('./app/main.js')
	.bundle()
	.pipe(source('main.js'))
	.pipe(gulp.dest('./public/js/'));
});

gulp.task('sass', function() {
	return sass('./sass/style.sass')
	.pipe(gulp.dest('./public/css/'));
});

gulp.task('watch', function() {
	gulp.watch('./app/**/*.js', ['browserify']);
	gulp.watch('./sass/style.sass', ['sass']);
});

gulp.task('default', ['connect', 'browserify', 'sass', 'watch']);