var gulp = require('gulp');
var cleanCSS = require('gulp-clean-css');
var rename = require('gulp-rename');
var cssBase64 = require('gulp-base64');
var autoprefixer = require('gulp-autoprefixer');

function compile(options) {
	return gulp.src('src/css/_index.css')
        .pipe(cleanCSS())
        .pipe(autoprefixer({
            browsers: ['last 16 versions']
        }))
        .pipe(cssBase64({
            debug: true
        }))
        .pipe(rename('style.base.css'))
        .pipe(gulp.dest('dist/css'));
}

module.exports = compile;
