const {
      series,
      parallel
} = require('gulp')
const gulp = require('gulp')


const {
      appCSS,
      appHTML,
      appJS,
      appIMG
} = require('./gulpTasks/app')
const {
      depsCSS,
      depsFonts
} = require('./gulpTasks/deps')
const {
      monitorarArquivos,
      servidor
} = require('./gulpTasks/server')

module.exports.default = series(
      parallel(
            series(appHTML, appJS, appIMG, appCSS),
            series(depsCSS, depsFonts)
      ),
      servidor,
      monitorarArquivos
)