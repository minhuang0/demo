var gulp = require('gulp'),
    connect = require('gulp-connect');

var markdown = require('gulp-markdown');

gulp.task('connect', function() {
  connect.server({
    port: 8888
  });
});

gulp.task('default', function () {
    return gulp.src('README.md')
        .pipe(markdown({lang: 'utf-8'}))
        .pipe(gulp.dest('./'));
});
