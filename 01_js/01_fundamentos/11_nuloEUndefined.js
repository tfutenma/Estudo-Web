
const a = {name: 'Teste'}
console.log(a)
const b = a //b passa a apontar pro endereço de memoria de a
b.name = 'Opa'
console.log(a) //como b apontava pro endereco de memoria do a, quando altera o objeto em b, altera no endereco de a

let c = 3
let d = c //Tipos primitimos não apontam para o endereco de memoria
d++
console.log(c) 
console.log(d)

let valor
console.log(valor)
valor= null
console.log(valor)
// console.log(valor.toString()) Erro

console.log("-------")
const produto = {}
console.log(produto.preco)
console.log(produto)

produto.preco = 3.5
console.log(produto)

produto.preco = undefined //evitar atribuir undefined
console.log(produto)
console.log(!!produto.preco)

produto.preco = null //sem preco
console.log(!!produto.preco)
console.log(produto)