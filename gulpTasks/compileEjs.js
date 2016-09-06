var ejs = require("gulp-ejs");
var gulp = require('gulp');

function compile(options) {

	var settings = {ext: '.html'};
	return gulp.src("./src/pages/*.ejs")
		.pipe(ejs({},settings))
		.pipe(gulp.dest("./dist"));
}

module.exports = compile;
