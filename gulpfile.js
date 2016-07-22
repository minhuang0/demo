var gulp = require('gulp');
var markdown = require('gulp-markdown');

gulp.task('default', function () {
    return gulp.src('README.md')
        .pipe(markdown({lang: 'utf-8'}))
        .pipe(gulp.dest('./'));
});
