var gulp = require('gulp'); //获取gulp
var browsersync = require('browser-sync').create(); //获取browsersync

//删除dist目录下文件
var del = require('del');
gulp.task('clean', function(cb) {
    return del(['dist/*'], cb);
})

//操作js文件
gulp.task('scripts', function() {
    gulp.src('js/*.js') //需要操作的源文件
        .pipe(gulp.dest('dist/js')) //把操作好的文件放到dist/js目录下
        .pipe(browsersync.stream()); //文件有更新自动执行
});

//操作css文件
gulp.task('style', function() {
    gulp.src('css/*.css')
        .pipe(gulp.dest('dist/css'))
        .pipe(browsersync.stream());
});

// 操作字体
gulp.task('fonts', function() {
    gulp.src('fonts/*')
        .pipe(gulp.dest('dist/fonts'))
        .pipe(browsersync.stream());
});

var imagemin = require('gulp-imagemin'); //图片压缩插件
gulp.task('image', function() {
    gulp.src('imgs/*.{png,jpg,jpeg,gif}')
        .pipe(imagemin())
        .pipe(gulp.dest('dist/imgs'))
        .pipe(browsersync.stream());
});

var htmlmin = require('gulp-htmlmin'); //html压缩插件
gulp.task('html', function() {
    gulp.src('*.html')
        .pipe(htmlmin({
            collapseWhitespace: true, //压缩html
            collapseBooleanAttributes: true, //省略布尔属性的值
            removeComments: true, //清除html注释
            removeEmptyAttributes: true, //删除所有空格作为属性值
            removeScriptTypeAttributes: true, //删除type=text/javascript
            removeStyleLinkTypeAttributes: true, //删除type=text/css
            minifyJS: true, //压缩页面js
            minifyCSS: true //压缩页面css
        }))
        .pipe(gulp.dest('dist'))
        .pipe(browsersync.stream());
});
gulp.task('html2', function() {
    gulp.src('pages/*.html')
        .pipe(htmlmin({
            collapseWhitespace: true, //压缩html
            collapseBooleanAttributes: true, //省略布尔属性的值
            removeComments: true, //清除html注释
            removeEmptyAttributes: true, //删除所有空格作为属性值
            removeScriptTypeAttributes: true, //删除type=text/javascript
            removeStyleLinkTypeAttributes: true, //删除type=text/css
            minifyJS: true, //压缩页面js
            minifyCSS: true //压缩页面css
        }))
        .pipe(gulp.dest('dist/pages'))
        .pipe(browsersync.stream());
});

gulp.task('serve', ['clean'], function() {
    gulp.start('scripts', 'style', 'image', 'html', 'html2', 'fonts');
    browsersync.init({
        port: 2016,
        server: {
            baseDir: ['dist']
        }
    });
    gulp.watch('js/*.js', ['scripts']); //监控文件变化，自动更新
    gulp.watch('style/*.css', ['style']);
    gulp.watch('images/*.*', ['image']);
    gulp.watch('*.html', ['html']);
    gulp.watch('pages/*.html', ['html2']);
    gulp.watch('fonts/*', ['fonts']);
});

gulp.task('default', ['serve']);