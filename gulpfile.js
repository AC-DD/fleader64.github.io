var gulp = require('gulp'),
	watch = require('gulp-watch'),
	/*file = require('gulp-file'),*/
	bs = require('browser-sync').create();

gulp.task('default',function(){
	bs.init({
		server: {baseDir: "./"}
	})
	watch('./**/*',bs.reload);
	// gulp.watch('./**/*').on('change',bs.reload);
	//gulp.watch('css/*').on('change',bs.reload);

})/*
gulp.task('init',function(){

	file('style.css','')
	.pipe(gulp.dest('css/'))
	
	

	return file('index.html','')
	.pipe(gulp.dest('./'))

});*/