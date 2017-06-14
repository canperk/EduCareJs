var gulp = require('gulp');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');

gulp.task('libs', function () {
    return gulp.src([
        'Scripts/Development/Lib/jquery.min.js',
        'Scripts/Development/Lib/knockout.min.js',
        'Scripts/Development/Lib/bootstrap.min.js',
        'Scripts/Development/Lib/bootstrap-notify.min.js'
    ])
    .pipe(concat('lib.js'))
    .pipe(gulp.dest('scripts/dist'));
});

gulp.task('educare', function () {
    return gulp.src([
        'Scripts/Development/EduCare/EduCare.js',
        'Scripts/Development/EduCare/EduCare.Ajax.js',
        'Scripts/Development/EduCare/EduCare.Cookies.js',
        'Scripts/Development/EduCare/EduCare.Exception.js',
        'Scripts/Development/EduCare/EduCare.Extensions.js',
        'Scripts/Development/EduCare/EduCare.Model.js',
        'Scripts/Development/EduCare/EduCare.Notify.js',
        'Scripts/Development/EduCare/Product.js',
        'Scripts/Development/EduCare/Category.js',
        'Scripts/Development/EduCare/Supplier.js'
    ])
    .pipe(concat('ec.js'))
    .pipe(gulp.dest('scripts/dist'));
});

gulp.task('watch', function () {
    gulp.watch('scripts/Development/EduCare/**/*.js', ['educare']);
});

gulp.task('default', ['educare', 'watch']);