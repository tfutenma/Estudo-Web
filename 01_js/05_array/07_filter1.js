//Filter sempre retorna um Array
const produtos = [
    {nome: 'Notebook', preco: 2499, fragil: true},
    {nome: 'iPad Pro', preco: 4199, fragil: true},
    {nome: 'Copo de Vidro', preco: 21.49, fragil: true},
    {nome: 'Copo de Plástico', preco: 18.99, fragil: false}
]

console.log(produtos.filter(function(p) {
    return p.preco > 4000
}))

const isCaro = produto => produto.preco > 1000
const isFragil = produto => produto.fragil 

const resultado = produtos.filter(isCaro).filter(isFragil)
console.log(resultado)