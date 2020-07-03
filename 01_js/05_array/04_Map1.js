//Map sempre retorna um Array
const nums = [1, 2, 3, 4, 5]

//For com propósito
let resultado = nums.map(function(e){
    return e * 2
})
console.log(resultado)

let vezesTres = nums.map(e => e*3)
console.log(vezesTres, 'Vezes 3')

const soma10 = e => e + 10
const triplo = e => e * 3
const paraDinheiro = e => `R$${parseFloat(e).toFixed(2).replace('.', ',')}`

let soma = nums.map(soma10).map(triplo).map(paraDinheiro)
console.log(soma)
