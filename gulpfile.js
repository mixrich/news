var gulp = require('gulp');

// require my custom task-functions
var compileEjs = require('./gulpTasks/compileEjs');
var compileCSS = require('./gulpTasks/compileCSS');
var compileBaseCSS = require('./gulpTasks/compileBaseCSS');
var compileStylus = require('./gulpTasks/compileStylus');
var compileJS = require('./gulpTasks/compileJS');
var deploy = require('./gulpTasks/deploy');
var sitemap = require('./gulpTasks/sitemap');


var browserSync = require('browser-sync').create();


//simple tasks

gulp.task('compile-css', function () {
  return compileCSS();
});


gulp.task('compile-base-css', function () {
  return compileBaseCSS();
});

gulp.task('sitemap', function () {
  return sitemap();
});

// compile ejs templates from src/pages/*.ejs to dist/*.html
gulp.task('compile-ejs', function () {
  return compileEjs();
});

// compile stylus styles from src/css-stylus/_index.styl to dist/css/style.min.css
/*gulp.task('compile-stylus', function () {
  return compileStylus();
});*/

gulp.task('compile-js', function () {
  return compileJS.compile();
});


gulp.task('copy-requirejs', function () {
  return compileJS.copyRequire();
});

gulp.task('optimize-pictures', function(){
  return gulp.src('./src/images/**/*.*')
  .pipe(gulp.dest('./dist/images'))
});

// build don't use manualy
gulp.task('build', ['compile-ejs', 'compile-base-css','compile-js', 'optimize-pictures']);


// wath changes in all files from 'src' and build
gulp.task('watch', function(){
  gulp.watch('./src/**/*.*', [/*'build'*/'compile-ejs', 'compile-base-css', 'compile-js']);
});

// run server from dist and refresh
gulp.task('serve', function(){
  browserSync.init({
    server: './dist'
  })
  browserSync.watch('./dist/**/*.*').on("change", browserSync.reload);
});

// development task
gulp.task('dev', ['watch', 'serve']);


gulp.task('deploy', function () {
  return deploy({branch: 'gh-pages'});
});




var cssfont64 = require('gulp-cssfont64');

gulp.task('ttf', function () {
    gulp.src('fonts/initial/*.ttf')
        .pipe(cssfont64())
        .pipe(gulp.dest('fonts/1'));
});
