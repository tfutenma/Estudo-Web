const carrinho = [
    '{ "nome": "Borracha", "preco":3.45}',
    '{ "nome": "Caderno", "preco":13.95}',
    '{ "nome": "Kit de Lapis", "preco":41.22}',
    '{ "nome": "Caneta", "preco":7.50}'
]

const transforma = json => JSON.parse(json)
const apenasPreco = produto => produto.preco


const resultado = carrinho.map(transforma).map(apenasPreco)
console.log(resultado)
