var gulp = require('gulp');
var stylus = require('gulp-stylus');
var rename = require('gulp-rename');

function compile(options) {
	return gulp.src("./src/css-stylus/_index.styl")
		.pipe(stylus())
		.pipe(rename('style.min.css'))
		.pipe(gulp.dest("./dist/css"));
}

module.exports = compile;
