var gulp = require("gulp");
// gulp.task("task1",function () { //创建个任务   task1
//     console.log("111111");
    
//     gulp.src("./src/js/*").pipe(gulp.dest("./dist/abc"));
// });

var uglify = require('gulp-uglify');//js压缩
var conCat = require('gulp-concat');//文件合并
var cssmin = require('gulp-minify-css');//css压缩
gulp.task("task1",done =>  { //创建个任务   task1
    console.log("111111");
    gulp.src("./src/js/*")
        .pipe(conCat("hb.js"))
        .pipe(uglify())
        .pipe(gulp.dest("./dist/js"));
    
    // gulp.src("./src/js/*").pipe(gulp.dest("./dist/js"));
    done();
});

