// gulpfile.js 
var gulp = require('gulp');
var server = require('gulp-express');
var pug = require('gulp-pug');
var watch = require('gulp-watch');
 
gulp.task('default',['serverUp', 'compilePugs'])

gulp.task('serverUp', function () {
    // Start the server at the beginning of the task 
    server.run(['server/app.js']);
 
    // Restart the server when file changes 
    gulp.watch(['client/**/*.html'], server.notify);
    gulp.watch(['client/styles/**/*.scss'], ['styles:scss']);
 
    gulp.watch(['client/scripts/**/*.js'], ['jshint']);
    gulp.watch(['server/app.js', 'server/routes/**/*.js'], [server.run]);
});

gulp.task('compilePugs', function buildHTML() {
  return gulp.src('client/views/*.pug')
  .pipe(pug({
    
  }))
  .pipe(watch('client/views/*.pug'))
  .pipe(gulp.dest('client/html'));
});