require('./06_global')

console.log(MinhaApp.saudacao())

MinhaApp.nome = 'Eita!'
console.log(MinhaApp.nome) // O ideal é tornar o objeto global freeze