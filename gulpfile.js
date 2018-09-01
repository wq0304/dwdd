var gulp = require("gulp");
gulp.task("thefive",function(){
	console.log("链接完成！")
});
//拷贝index的文件
gulp.task("copy-index",function(){
	return gulp.src("*.html")
	.pipe(gulp.dest("dist")).pipe(connect.reload())
});
//多个文件合并到一个文件夹里，并且剔除一些文件
gulp.task("data",function(){
	return gulp.src(["*.json","*.txt","*.php","!package.json"]).pipe(gulp.dest("dist/data")).pipe(connect.reload())
});
//实现图片的拷贝
gulp.task("images",function(){
	return gulp.src("images/**/*").pipe(gulp.dest("dist/images")).pipe(connect.reload())
});
//实现js的拷贝
gulp.task("js",function(){
	return gulp.src("js/**/*").pipe(gulp.dest("dist/js")).pipe(connect.reload())
});
//一次性执行上面三个任务
gulp.task("bulid",["copy-index","images","data"],function(){
	console.log("编译完成");
});
//监听
gulp.task("watch",function(){
	gulp.watch("*.html",["copy-index"]);
	gulp.watch("images/**/*",["images"]);
	gulp.watch(["*.json","*.txt","*.php","!package.json"],["data"]);
	gulp.watch("index.scss",["scss"]);
	gulp.watch(["js/demo1.js","js/demo2.js"],["concat"]);
	gulp.watch("js/**/*",["js"]);
	gulp.watch("list.scss",["listscss"]);
	gulp.watch("login.scss",["loginscss"]);
	gulp.watch("regist.scss",["registscss"]);
	gulp.watch("detail.scss",["detailscss"]);
	gulp.watch("car.scss",["carscss"]);
});
//scss
var scss = require("gulp-sass-china");
//压缩css
var minifyCss = require("gulp-minify-css");
var rename = require("gulp-rename");
gulp.task("scss",function(){
	return gulp.src("index.scss")
	.pipe(scss())//转为css
	.pipe(gulp.dest("dist/css"))
	.pipe(minifyCss())
	.pipe(rename("index.min.css"))
	.pipe(gulp.dest("dist/css"))
	.pipe(connect.reload())
});
gulp.task("listscss",function(){
	return gulp.src("list.scss")
	.pipe(scss())//转为css
	.pipe(gulp.dest("dist/css"))
	.pipe(minifyCss())
	.pipe(rename("list.min.css"))
	.pipe(gulp.dest("dist/css"))
	.pipe(connect.reload())
});
gulp.task("loginscss",function(){
	return gulp.src("login.scss")
	.pipe(scss())//转为css
	.pipe(gulp.dest("dist/css"))
	.pipe(minifyCss())
	.pipe(rename("login.min.css"))
	.pipe(gulp.dest("dist/css"))
	.pipe(connect.reload())
});
gulp.task("registscss",function(){
	return gulp.src("regist.scss")
	.pipe(scss())//转为css
	.pipe(gulp.dest("dist/css"))
	.pipe(minifyCss())
	.pipe(rename("regist.min.css"))
	.pipe(gulp.dest("dist/css"))
	.pipe(connect.reload())
});
gulp.task("detailscss",function(){
	return gulp.src("detail.scss")
	.pipe(scss())//转为css
	.pipe(gulp.dest("dist/css"))
	.pipe(minifyCss())
	.pipe(rename("detail.min.css"))
	.pipe(gulp.dest("dist/css"))
	.pipe(connect.reload())
});
gulp.task("carscss",function(){
	return gulp.src("car.scss")
	.pipe(scss())//转为css
	.pipe(gulp.dest("dist/css"))
	.pipe(minifyCss())
	.pipe(rename("car.min.css"))
	.pipe(gulp.dest("dist/css"))
	.pipe(connect.reload())
});
//两个文件合并压缩js文件
var concat = require("gulp-concat");
var uglify = require("gulp-uglify");
gulp.task("concat",function(){
	return gulp.src(["js/demo1.js","js/demo2.js"])
	.pipe(concat("demo.js"))
	.pipe(gulp.dest("dist/js"))
	.pipe(uglify())
	.pipe(rename("demo.min.js"))
	.pipe(gulp.dest("dist/js"))
	.pipe(connect.reload())
});
//创建服务器并进行实时监听
var connect = require("gulp-connect");
gulp.task("server",function(){
	connect.server({
		root:"dist",
		livereload:true,
		port:9000
	})
});
gulp.task("default",["watch","server"]);