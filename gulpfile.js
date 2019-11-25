// gulp-sass gulp-clean-css gulp-rename
let gulp = require('gulp'),
	sass = require('gulp-sass'), //将sass编译成css
	cleancss = require('gulp-clean-css'),
	rename = require('gulp-rename'),
	ugilify = require('gulp-uglify'),
	concat = require('gulp-concat'),
	imagemin = require('gulp-imagemin'),
	babel = require('gulp-babel');
	

// 发布任务css
gulp.task('sass', () => {
	gulp.src('./src/sass/*.scss')
	.pipe(sass({outputStyle:'expanded'}))
	.pipe(cleancss())
	.pipe(rename({suffix : '.min'}))
	.pipe(gulp.dest('./dist/css'));
});
// 发布任务js
gulp.task('js',()=>{
		gulp.src('./src/js/es5/*.js')
			// .pipe(concat('min.js'))
			.pipe(ugilify())
			.pipe(rename({suffix : '.min'}))
			.pipe(gulp.dest('./dist/js'));
	});
// 压缩图片
	gulp.task('img',()=>{
		gulp.src('./src/img/*/*')
		.pipe(imagemin())
		.pipe(gulp.dest('./dist/img'));
	})
//将es6转化成es5
	gulp.task('es6',()=>{
		gulp.src('./src/js/es6/*.js')
		.pipe(babel({
			presets:['@babel/env']
		}))
		.pipe(gulp.dest('./src/js/es5'));
	})
gulp.task('default',()=>{
	gulp.watch('./src/sass/*.scss',['sass']);
	gulp.watch('./src/js/es5/*.js',['js']);
	gulp.watch('./src/img/*',['img']);
	gulp.watch('./src/js/es6/*.js',['es6']);
});