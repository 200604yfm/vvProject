//1 引入下载的包
const gulp = require('gulp');
const del = require('del');
const htmlmin = require('gulp-htmlmin');
const cssmin = require('gulp-cssmin');
const autoprefixer = require('gulp-autoprefixer');
const babel = require('gulp-babel');
const uglify = require('gulp-uglify');
const sass = require('gulp-sass');
const webserver = require('gulp-webserver');
const src = require('gulp-webserver');

//2. 书写规则
const htmlHandler = function(){
    return gulp.src('./src/pages/*.html')
    .pipe(htmlmin({
        removeAttributeQuotes:true, //移除属性上的双引号
        removeComments:true,      //移除注释
        collapseWhitespace:true,  //移除所有空格,变成一行代码
        minifyCSS:true,  //把页面里style标签里面的css样式也去空格
        minifyJS:true,   //把页面里script标签里面的js代码也去空格
        collapseBooleanAttributes:true //把值为布尔值的属性简写
    })).
    pipe(gulp.dest('./dist/pages'))
}
const cssHandler = function(){
    return gulp.src('./src/css/*.css')
    .pipe(autoprefixer())
    .pipe(cssmin())
    .pipe(gulp.dest('./dist/css'))
}
const jsHandler = function(){
    return gulp.src('./src/js/*.js')
    .pipe(babel({
        presets:["@babel/env"]
    }))
    .pipe(uglify())
    .pipe(gulp.dest('./dist/js'))
}
const imgHandler = function(){
    return gulp.src('./src/images/**')
    .pipe(gulp.dest('./dist/images'))
}
const libHandler = function(){
    return gulp.src('./src/lib/**')
    .pipe(gulp.dest('./dist/lib'))
}
const fontHandler = function(){
    return gulp.src('./src/font/**')
    .pipe(gulp.dest('./dist/font'))
}
const phpHandler = function(){
    return gulp.src('./src/php/**')
    .pipe(gulp.dest('./dist/php'))
}
const delHandler = function(){
    return del(['./dist'])
}

const webserverHandler = function(){
    return gulp.src('./dist')
    .pipe(webserver({
        port:8090,   //端口号,0-6635之间,尽量不要用0-1023
        open:'./pages/index.html', //默认打开的首页, 路径从dist开始书写
        livereload:true, //热更新, 当dist里面代码有变化的时候自动刷新浏览器
        
        // proxies:[        //这个第三方模块还可以帮助我们配置代理
        //                  //直接在使用webserver的时候添加一个配置项:   proxies:[]
        //     {
        //         source: '/abc', //表示请求的地址
        //         target: 'http://127.0.0.1/json.php'//你要代理的地址
        //     },
        //     {
        //         source: '/eee', //表示请求的地址
        //         target: 'http://127.0.0.1/json.php'//你要代理的地址
        //     }
        // ]
    }))
}

const watchHandler = function(){
    gulp.watch('./src/pages/*.html', htmlHandler);
    gulp.watch('./src/css/*.css', cssHandler);
    gulp.watch('./src/js/*.js', jsHandler);
    gulp.watch('./src/images/**', imgHandler);
    gulp.watch('./src/lib/**', libHandler);
    gulp.watch('./src/font/**', fontHandler);
    gulp.watch('./src/php/**', phpHandler);
}

//3 导出
// module.exports.html = htmlHandler;
// module.exports.css = cssHandler;
// module.exports.js = jsHandler;
// module.exports.images = imgHandler;
// module.exports.lib = libHandler;
// module.exports.del = delHandler;

//gulp.series()  用来逐步执行多个任务
//gulp.parallel() 用来同时执行多个任务
module.exports.default = gulp.series(
    delHandler,
    gulp.parallel(
        htmlHandler,
        cssHandler,
        jsHandler,
        imgHandler,
        libHandler,
        fontHandler,
        phpHandler
    ),
    webserverHandler,
    watchHandler,
)