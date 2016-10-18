var gulp = require('gulp');

// require my custom task-functions
var compileEjs = require('./gulpTasks/compileEjs');
var compileCSS = require('./gulpTasks/compileCSS'); //don't use because stylus
var compileStylus = require('./gulpTasks/compileStylus');
var compileJS = require('./gulpTasks/compileJS');
var deploy = require('./gulpTasks/deploy');
var sitemap = require('./gulpTasks/sitemap');


var browserSync = require('browser-sync').create();


//simple tasks

gulp.task('compile-css', function () {
  return compileCSS();
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
gulp.task('build', ['compile-ejs', 'compile-css','compile-js', 'optimize-pictures']);


// wath changes in all files from 'src' and build
gulp.task('watch', function(){
  gulp.watch('./src/**/*.*', [/*'build'*/'compile-ejs', 'compile-css', 'compile-js']);
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

/* TEST */
var cssBase64 = require('gulp-base64');
var cleanCSS = require('gulp-clean-css');

var rename = require('gulp-rename');
var autoprefixer = require('gulp-autoprefixer');


//Without options
gulp.task('cssBase', function () {
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
});
