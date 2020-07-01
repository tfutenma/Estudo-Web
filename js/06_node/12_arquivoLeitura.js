const fs = require('fs')

const caminho = __dirname + '/11_arquivo.json'

//sincrono..
const conteudo = fs.readFileSync(caminho, 'utf-8')
console.log(conteudo)

//assincrono por isso executa depois
fs.readFile(caminho, 'utf-8', (err, conteudo) => {
      const config = JSON.parse(conteudo)
      console.log(`${config.db.host}:${config.db.port}`)
})

//executa de forma síncrona
const config = require('./11_arquivo.json')
console.log(config.db)

fs.readdir(__dirname, (err, arquivos) => {
      console.log('Conteúdo da pasta...')
      console.log(arquivos)
})