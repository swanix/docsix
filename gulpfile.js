//-----------------------------------------------------
// Swanix - Tool Docs
// by Sebastian Serna
// (c) 2019-present
//-----------------------------------------------------

const { src, dest, watch, series, parallel } = require('gulp');
// General plugins
const browserSync = require('browser-sync');
const rename = require("gulp-rename");
const plumber = require('gulp-plumber');
// Project specific
const sass = require('gulp-sass'); 
const cleanCSS = require('gulp-clean-css');
const concat = require('gulp-concat');
const terser = require('gulp-terser');


//-----------------------------------------------------
// Server tasks
//-----------------------------------------------------

function watch_files() {
  browserSync.init({
    server: {
        baseDir: 'docs',
        index: 'index.html',
        ghostMode: false,
        serveStaticOptions: {
          extensions: ['html']
        }
    }
  });

  watch('./docs/**/*').on('change', browserSync.reload);
  watch('./docs/**/*.html').on('change', browserSync.reload);
  watch('./src/**/*.scss', series(sass_compiler, reload));
  watch('./src/**/*.js', series(js_concat, reload));
  watch('package.json', series(sass_compiler, reload));
}

function reload(done) {
    browserSync.reload();
    done();
}

//-----------------------------------------------------
// Sass compiler task
//-----------------------------------------------------

// Sass paths
var inputSass = 'src/styles/*.scss';
var outputSass = 'dist/';
var outputDocs = 'docs/dist/';
var sassOptions = {
  errLogToConsole: true,
  outputStyle: 'expanded'
};

function sass_compiler() {
  return src(inputSass)
    .pipe(plumber())
    .pipe(sass(sassOptions).on('error', sass.logError))
    .pipe(dest(outputSass))
    .pipe(dest(outputDocs))
    .pipe(cleanCSS())
    .pipe(rename('tool-docs.min.css'))
    .pipe(dest(outputSass))
    .pipe(dest(outputDocs));
}

//-----------------------------------------------------
// JavaScript Concat files 
//-----------------------------------------------------

// JS paths
var inputJs = [
  "src/scripts/tool-docs-version.js",
  "src/scripts/docsify.js",
  "src/scripts/tool-docs.js",
  "src/scripts/docsify-pagination.js",
  "src/scripts/docsify-copy-code.js",
  "src/scripts/docsify-tabs.js",
  "src/scripts/docsify-mustache.js",
  "src/scripts/clipboard.js"
];
var outputJs = 'dist/';
var outputJsDocs = 'docs/dist/';

function js_concat() {
  return src(inputJs)
    .pipe(plumber())
    .pipe(concat('tool-docs.js'))
    .pipe(dest(outputJs))
    .pipe(dest(outputJsDocs))
    .pipe(rename('tool-docs.min.js'))
    .pipe(terser())
    .pipe(dest(outputJs))
    .pipe(dest(outputJsDocs));
}

//-----------------------------------------------------
// TASKS
//-----------------------------------------------------

exports.default = watch_files;
exports.watch = watch_files;
exports.sass = series(sass_compiler);
exports.js = series(js_concat);
exports.build = series(sass_compiler, js_concat);