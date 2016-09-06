var gulp = require('gulp');
var sitemap = require('gulp-sitemap');

function compile(options) {
	return gulp.src(['dist/*.html','!dist/thank-you.html'], {
            read: false
        })
        .pipe(sitemap({
            siteUrl: 'https://direct.r5m.me'
        }))
        .pipe(gulp.dest('./dist'));
}

module.exports = compile;
