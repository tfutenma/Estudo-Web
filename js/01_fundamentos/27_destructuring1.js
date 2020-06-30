//novo recurso do ES2015

//USANDO OBJETO

const pessoa = {
    nome: 'Ana',
    idade: 5,
    endereco: {
        logradouro: 'Rua X',
        numero: 10
    }
}
const { nome, idade } = pessoa
console.log(nome)
console.log(idade)


const {nome: n , idade: i } = pessoa
console.log(n)
console.log(i)

const { sobrenome, bem_Humorada = true} = pessoa
console.log(sobrenome)
console.log(bem_Humorada)

const { endereco: { logradouro, numero, cep } } = pessoa
console.log(logradouro, numero, cep)

//const { conta: { ag, numero } } = pessoa || NÃO EXISTE DE FORMA ANINHADA
//console.log(ag, numero) || NÃO FUNCIONA POIS NAO ESTÁ ANINHADO