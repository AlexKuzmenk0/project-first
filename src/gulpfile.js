const gulp        = require('gulp');
const browserSync = require('browser-sync');
const scss = require("gulp-scss");
const rename = require("gulp-rename");
const autoprefixer = require('gulp-autoprefixer');const clean = require('gulp-clean');


gulp.task('server', function () {
    
    browserSync({
        server: {
            baseDir: "src"
        }
    });
});

gulp.task('styles', function () {
    return gulp.src("src/css*.+(scss|sass")
        .pipe(scss({ outputStyle: 'compressed' }).on('error', scss.logError))
        .pipe(rename({
            prefix: "",
            suffix: ".min",
        }))
        .pipe(autoprefixer({
			cascade: false
        }))
        .pipe(clean({force: true}))
        .pipe(gulp.dest("src/css"))
        .pipe(browserSync.stream());
})

gulp.task('watch', function () {
    gulp.watch("src/css*.+(scss|sass", gulp.parallel("styles"))
    gulp.eatch("src/*.html").on("change", browserSync.reload);
});

gulp.task("default", gulp.parallel("watch", "server", "styles"));