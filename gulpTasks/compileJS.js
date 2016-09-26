var gulp = require('gulp');

var requirejsOptimize = require('gulp-requirejs-optimize');

function compile(options) {
			return gulp.src('src/js/app.js')
				.pipe(gulp.dest('dist/js'));
}

function copyRequire(options) {
			return gulp.src('src/js/require.js')
				.pipe(gulp.dest('dist/js'));
}

module.exports = {
	compile: compile,
	copyRequire: copyRequire
}
