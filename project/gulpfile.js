const 	gulp = require('gulp'),
		imagemin = require('gulp-imagemin'),
		clean = require('gulp-clean'),
		concat = require('gulp-concat'),
		htmlReplace = require('gulp-html-replace'),
		uglify = require('gulp-uglify'),
		usemin = require('gulp-usemin'),
		cssmin = require('gulp-cssmin'),
		browserSync = require('browser-sync'),
		jshint = require('gulp-jshint'),
		jshintStylish = require('jshint-stylish'),
		csslint = require('gulp-csslint'),
		sass = require('gulp-sass');

/*
 * Command: npm run gulp
 * Scope: Task 'copy' deletes current `/dist` folder using task 'clean'
 * and copy all files from `/src` to `/dist`,
 * 'build-img' minifies images,
 * 'usemin' minifies js and css
*/
	gulp.task('default', ['copy'], function() {
		gulp.start('build-img', 'usemin');
	});

	gulp.task('copy', ['clean'], function() {
	    return 	gulp.src('src/**/*')
				.pipe(gulp.dest('dist'));
	});

	gulp.task('clean', function() {
		return 	gulp.src('dist')
				.pipe(clean());
	});

	gulp.task('build-img', function() {
	    gulp.src('src/assets/img/**/*')
	    	.pipe(imagemin())
	    	.pipe(gulp.dest('dist/assets/img'));
	});

	gulp.task('usemin', function() {
		gulp.src('dist/**/*.html')
			.pipe(usemin({
				'js' : [uglify],
				'css' : [cssmin]
			}))
			.pipe(gulp.dest('dist'));
	});


/*
 * Command: npm run gulp server
 * Scope: Creates a server using port 3000,
 * from `src` folder,
 * and watch for changes on all files
*/
	gulp.task('server', function() {
		browserSync.init({
			server: {
				baseDir: 'src'
			}
		});
		gulp.watch('src/assets/js/**/*.js').on('change', function(event) {
			gulp.src(event.path)
				.pipe(jshint())
				.pipe(jshint.reporter(jshintStylish));
		});
		gulp.watch('src/assets/scss/**/*.scss').on('change', function(event) {
			gulp.src(['src/assets/scss/**/*.scss', '!source/assets/css/**/_*.[scss|sass'])
				.pipe(sass({
					includePaths: ['node_modules']
				}).on('error', sass.logError))
				.pipe(csslint())
				.pipe(csslint.formatter("compact"))
				.pipe(gulp.dest('src/assets/css'));
		});
		gulp.watch('src/**/*').on('change', browserSync.reload);
	});