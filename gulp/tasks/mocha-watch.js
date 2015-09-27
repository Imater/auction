var gulp = require('gulp');
var mocha = require('gulp-mocha');

gulp.task('mocha-watch', ['env-test', 'mocha'], function() {
    gulp.watch(['server/**/*.js', 'test/**/*.js', 'src/**/*.{js,jsx}'], ['env-test', 'mocha']);
});
