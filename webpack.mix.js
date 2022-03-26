let mix = require('laravel-mix');

mix
  .js('assets/js/bundle.js', 'build/js')
  .sass('assets/scss/style.scss', 'build/scss')
  .browserSync("http://www.map-viewer.test");