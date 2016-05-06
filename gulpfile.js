var gulp = require('gulp'),
	concat =  require('gulp-concat'),
	jade = require('gulp-jade'),
	stylus = require('gulp-stylus'),
	nib = require('nib'),
	wiredep = require('gulp-wiredep');


var sourcePaths = {
	concatenar:"js/**/*.js",
	style:"css/**/*.styl",
	template:"index.jade"
}

gulp.task('concatenar',function(){
	gulp.src(sourcePaths.concatenar)
	.pipe(concat('app.js'))
	.pipe(gulp.dest(''))
});
gulp.task("style",function(){
	gulp.src('css/estilos.styl')
	.pipe(stylus({use:nib(),compress:false}))
	.pipe(gulp.dest(''));
});
gulp.task("template",function(){
	gulp.src(sourcePaths.template)
	.pipe(jade({pretty:true}))
	.pipe(gulp.dest(''))
});


gulp.task("watch",['concatenar','style','template'],function(){
	gulp.watch(sourcePaths.concatenar,['concatenar'])
	gulp.watch(sourcePaths.style,['style'])
	gulp.watch(sourcePaths.template,['template'])
})




gulp.task("default",['watch']);