const { src, dest, series } = require('gulp');
const concat = require('gulp-concat');
const uglify = require('gulp-uglify');
const clean = require('gulp-clean');

const info = (done) => {
  console.log('Async task "build" called.');
  done();
};

const build = () => {
  return src('src/*.js')
    .pipe(concat('script.js'))
    .pipe(uglify())
    .pipe(dest('build'));
};

const wipe = () => {
  return src('build', { read: false, allowEmpty: true })
    .pipe(clean());
};

exports.info = series(info);
exports.wipe = series(wipe);
exports.build = series(build);
exports.default = series(wipe, build);
