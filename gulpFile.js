var gulp = require('gulp');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
gutil = require('gulp-util')

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

gulp.task('educareDEV', function () {
    var files = [
        'Scripts/Development/EduCare/EduCare.js',
        'Scripts/Development/EduCare/EduCare.Ajax.js',
        'Scripts/Development/EduCare/EduCare.Cookies.js',
        'Scripts/Development/EduCare/EduCare.Exception.js',
        'Scripts/Development/EduCare/EduCare.Extensions.js',
        'Scripts/Development/EduCare/EduCare.Model.js',
        'Scripts/Development/EduCare/EduCare.Notify.js',
        'Scripts/Development/EduCare/EduCare.Enums.js',
        'Scripts/Development/EduCare/EduCare.Storage.js',
        'Scripts/Development/EduCare/Product.js',
        'Scripts/Development/EduCare/Category.js',
        'Scripts/Development/EduCare/Supplier.js'
    ];

    return gulp.src(files)
        .pipe(concat('ec.js'))
        .pipe(gulp.dest('scripts/dist'))
        .pipe(gulp.dest('scripts/dist'));
});

gulp.task('educarePROD', function () {
    var files = [
        'Scripts/Development/EduCare/EduCare.js',
        'Scripts/Development/EduCare/EduCare.Ajax.js',
        'Scripts/Development/EduCare/EduCare.Cookies.js',
        'Scripts/Development/EduCare/EduCare.Exception.js',
        'Scripts/Development/EduCare/EduCare.Extensions.js',
        'Scripts/Development/EduCare/EduCare.Model.js',
        'Scripts/Development/EduCare/EduCare.Notify.js',
        'Scripts/Development/EduCare/EduCare.Enums.js',
        'Scripts/Development/EduCare/EduCare.Storage.js',
        'Scripts/Development/EduCare/Product.js',
        'Scripts/Development/EduCare/Category.js',
        'Scripts/Development/EduCare/Supplier.js'
    ];

    return gulp.src(files)
        .pipe(concat('ec.js'))
        .pipe(gulp.dest('scripts/dist'))
        .pipe(uglify())
        .on('error', function (err) { gutil.log(gutil.colors.red('[Error]'), err.toString()); })
        .pipe(gulp.dest('scripts/dist'));
});

gulp.task('watch', function () {
    gulp.watch('scripts/Development/EduCare/**/*.js', ['educareDEV']);
});

gulp.task('default', ['educareDEV', 'watch']);