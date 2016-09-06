var ejs = require("gulp-ejs");

gulp.src("./templates/*.ejs")
	.pipe(ejs({ext: 'html'}))
	.pipe(gulp.dest("./"));
