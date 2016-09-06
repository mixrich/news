var gulp = require('gulp');
var ejs = require("gulp-ejs");

gulp.task('compile', function () {
	return gulp.src("./templates/*.ejs")
		.pipe(ejs({}, {ext: '.html'}))
		.pipe(gulp.dest("./"));
});
