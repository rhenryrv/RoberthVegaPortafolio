const {src, dest, watch, series} = require('gulp');
const sass= require('gulp-sass')(require('sass'));
const imagemin =require('gulp-imagemin');
const notify = require('gulp-notify');
const webp = require('gulp-webp');
const concat = require('gulp-concat');

//Utilidades css
const autoprefixer = require('autoprefixer'); //agrega prefijos en algunos casos son utiles
const postcss = require('gulp-postcss');//agrega p´rocesamiento al css
const cssnano = require('cssnano');
const sourcemaps = require('gulp-sourcemaps');

//Utilidades JS
const terser = require('gulp-terser-js'); //codigo mejorado para produccion


const paths = {
    imagenes: 'src/img/**/*',
    css: './src/scss/**/*.scss',
    js:'./src/js/**/*.js',
}

function css(){
    return src(paths.css)
        .pipe( sourcemaps.init())
        .pipe( sass())
        .pipe( postcss([autoprefixer(),cssnano()]))
        .pipe( sourcemaps.write('.'))
        .pipe( dest("./build/css"))
}

function javascript(){
    return src(paths.js)
    .pipe( sourcemaps.init())
    .pipe( concat('bundle.js'))
    .pipe( terser())
    .pipe( sourcemaps.write('.'))
    .pipe( dest('./build/js'))
}
//Remplazado por nano
// function minificarcss(){
//     return src(paths.css)
//     .pipe(sass({
//         outputStyle: 'compressed'
//     }))
//     .pipe(dest("./build/css"));
// }

function imagenes(){
    return src(paths.imagenes)
    .pipe(imagemin())
    .pipe(dest('./build/img'))
    .pipe(notify({message: 'Imagen Minificada'}));
}

function versionWebp() {
    return src(paths.imagenes)
    .pipe(webp())
    .pipe(dest('./build/img'))
    .pipe( notify({message: 'Version Webp Lista'}));
}


function watchArchivos(){
    watch(paths.css, css);//*= a la carpeta actual - **= todos los archivos con esa extencion
    watch(paths.js, javascript);
}
exports.javascript = javascript; 
exports.css = css;
// exports.minificarcss =minificarcss;
exports.imagenes = imagenes;
exports.watchArchivos =watchArchivos;

exports.default = series(css, watchArchivos);
