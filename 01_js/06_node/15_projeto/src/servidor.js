const porta = 3003

const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const bancoDeDados = require('./bancoDeDados')

/*app.get('/produtos', (req, res, next) => {
      res.send({
            nome: 'Notebook',
            preco: 123.45
      })
})*/

app.use(bodyParser.urlencoded({
      extended: true
})) //Pra qualquer requisiçao feita, ele vai passar pelo middleware transformando o corpo da requisicao em objeto

app.get('/produtos', (req, res, next) => {
      res.send(bancoDeDados.getProdutos())
})

app.get('/produtos/:id', (req, res, next) => {
      res.send(bancoDeDados.getProduto(req.params.id))
})

app.post('/produtos', (req, res, next) => {
      const produto = bancoDeDados.salvarProduto({
            nome: req.body.nome,
            preco: req.body.preco
      })
      res.send(produto) //gera um JSON
}) //Cadastrar com Post

app.put('/produtos/:id', (req, res, next) => {
      const produto = bancoDeDados.salvarProduto({
            id: req.params.id,
            nome: req.body.nome,
            preco: req.body.preco
      })
      res.send(produto) //gera um JSON
}) //Alterar com PUT

app.delete('/produtos/:id', (req, res, next) => {
      const produto = bancoDeDados.excluirProduto(req.params.id)
      res.send(produto) //gera um JSON
}) //Excluir com delete



app.listen(porta, () => {
      console.log(`Servidor está executando na porta ${porta}.`)
})