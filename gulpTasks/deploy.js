var gulp = require('gulp');
var ghPages = require('gulp-gh-pages');

function deploy(options) {
	// options {branch: 'master'} here
	return gulp.task('deploy', function() {
	  return gulp.src('./dist/**/*')
	    .pipe(ghPages(options));
	});
}

module.exports = deploy;
