//par bome/valor
const saudacao = 'Opa' //contexto lexico 1

function exec() {
    const saudacao = 'Faala' //contexto lexico 2
    return saudacao
}

//Objetos sao grupos alinhados de pares nome/valor
const Cliente = {
    nome: 'Pedro',
    idade: 32,
    peso: 90,
    endereco: {
        logradouro: 'Rua Muito Legal',
        numero: 123,
        nome: 'É isso'
    }
}

console.log(saudacao)
console.log(exec())
console.log(Cliente)
