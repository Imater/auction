var gulp = require('gulp');
var mocha = require('gulp-mocha');
var babel = require('babel/register');

gulp.task('mocha', ['env-test'], function () {
    return gulp.src(['server/tests/*.js'], {read: false})
        // gulp-mocha needs filepaths so you can't have any plugins before it
        .pipe(mocha({
          reporter: 'list',
          compilers: {
            js: babel
          }
        })).on('error', function(err){
          console.log(err.toString());
          this.emit('end');
        });
});
