var gulp = require('gulp');
var cleanCSS = require('gulp-clean-css');
var rename = require('gulp-rename');
var autoprefixer = require('gulp-autoprefixer');

function compile(options) {
	return gulp.src("./src/css/_index.css")
		.pipe(cleanCSS())
		.pipe(autoprefixer({
            browsers: ['last 16 versions']
        }))
		.pipe(rename('style.min.css'))
		.pipe(gulp.dest("./dist/css"));
}

module.exports = compile;
