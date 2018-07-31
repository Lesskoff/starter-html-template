var cssSyntax        = 'scss'; // Syntax: sass or scss;

var gulp           = require('gulp'),
    pug            = require('gulp-pug'),
    browsersync    = require('browser-sync'),
    concat         = require('gulp-concat'),
    uglify         = require('gulp-uglifyjs'),
    cssnano        = require('gulp-cssnano'),
    rename         = require('gulp-rename'),
    cleancss       = require('gulp-clean-css'),
    del            = require('del'),
    imagemin       = require('gulp-imagemin'),
    pngquant       = require('imagemin-pngquant'),
    sass           = require('gulp-sass'),
    cache          = require('gulp-cache'),
    spritesmith    = require("gulp.spritesmith"),
    plumber        = require("gulp-plumber"),
    notify         = require("gulp-notify"),
    newer          = require("gulp-newer"),
    autoprefixer   = require('gulp-autoprefixer');

// Работа с Sass
gulp.task(cssSyntax, function() {
    return gulp.src([
            'app/'+cssSyntax+'/main.'+cssSyntax+'',
        ])
        .pipe(plumber())
        .pipe(sass({
            'include css': true
        }))


    .on("error", notify.onError(function(error) {
            return "Message to the notifier: " + error.message;
        }))
        .pipe(rename({ suffix: '.min', prefix : '' })) // Переименование файла с суффиксом .min
        .pipe(autoprefixer(['last 2 version']))
        .pipe(cleancss( {level: { 1: { specialComments: 0 } } })) // Минифицирование css-файла
        .pipe(gulp.dest('app/css'))
        .pipe(browsersync.reload({
            stream: true
        }));
});

// Работа с Pug
gulp.task('pug', function() {
    return gulp.src('app/pug/pages/*.pug')
        .pipe(plumber())
        .pipe(pug({
            pretty: true
        }))
        .on("error", notify.onError(function(error) {
            return "Message to the notifier: " + error.message;
        }))
        .pipe(gulp.dest('app'));
});

// Browsersync
gulp.task('browsersync', function() {
    browsersync({
        server: {
            baseDir: 'app'
        },
        notify: false,
        // open: false,
        // online: false, // Work Offline Without Internet Connection
        // tunnel: true, tunnel: "projectname", // Demonstration page: http://projectname.localtunnel.me
    })
});

// Работа с JS
gulp.task('scripts', function() {
    return gulp.src([
            // Библиотеки
            'app/libs/magnific/jquery.magnific-popup.min.js',
            'app/libs/bxslider/jquery.bxslider.min.js',
            'app/libs/maskedinput/maskedinput.js',
            'app/libs/slick/slick.min.js',
            'app/libs/validate/jquery.validate.min.js'
        ])
        .pipe(concat('libs.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest('app/js'))
        .pipe(browsersync.reload({
            stream: true
        }));
});


// Сборка спрайтов PNG
gulp.task('cleansprite', function() {
    return del.sync('app/img/sprite/sprite.png');
});


gulp.task('spritemade', function() {
    var spriteData =
        gulp.src('app/img/sprite/*.*')
        .pipe(spritesmith({
            imgName: 'sprite.png',
            cssName: '_sprite.'+cssSyntax+'',
            padding: 15,
            cssFormat: cssSyntax,
            algorithm: 'binary-tree',
            cssTemplate: cssSyntax+'.template.mustache',
            cssVarMap: function(sprite) {
                sprite.name = 's-' + sprite.name;
            }
        }));

    spriteData.img.pipe(gulp.dest('app/img/sprite/')); // путь, куда сохраняем картинку
    spriteData.css.pipe(gulp.dest('app/'+cssSyntax+'/')); // путь, куда сохраняем стили
});
gulp.task('sprite', ['cleansprite', 'spritemade']);

// Слежение
gulp.task('watch', ['browsersync', cssSyntax, 'scripts'], function() {
    gulp.watch('app/'+cssSyntax+'/**/*.'+cssSyntax+'', [cssSyntax]);
    gulp.watch('app/pug/**/*.pug', ['pug']);
    gulp.watch('app/*.html', browsersync.reload);
    gulp.watch(['app/js/*.js', '!app/js/libs.min.js', '!app/js/jquery.js'], ['scripts']);
});

// Очистка папки сборки
gulp.task('clean', function() {
    return del.sync('prodact');
});

// Оптимизация изображений
gulp.task('img', function() {
    return gulp.src(['app/img/**/*', '!app/img/sprite/*'])
        .pipe(cache(imagemin({
            progressive: true,
            use: [pngquant()]

        })))
        .pipe(gulp.dest('product/img'));
});

// Сборка проекта
gulp.task('build', ['clean', 'img', cssSyntax, 'scripts'], function() {
    var buildCss = gulp.src('app/css/*.css')
        .pipe(gulp.dest('product/css'));

    var buildFonts = gulp.src('app/fonts/**/*')
        .pipe(gulp.dest('product/fonts'));

    // Font-awesome fonts
    var buildFontAwesome = gulp.src('app/libs/fontawesome/webfonts/**/*')
        .pipe(gulp.dest('product/libs/fontawesome/webfonts'));

    var buildJs = gulp.src('app/js/**.js')
        .pipe(gulp.dest('product/js'));

    var buildHtml = gulp.src('app/*.html')
        .pipe(gulp.dest('product/'));

    var buildImg = gulp.src('app/img/sprite/sprite.png')
        .pipe(imagemin({
            progressive: true,
            use: [pngquant()]
        }))
        .pipe(gulp.dest('product/img/sprite/'));
});

// Очистка кеша
gulp.task('clear', function() {
    return cache.clearAll();
});

// Дефолтный таск
gulp.task('default', ['watch']);
