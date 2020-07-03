//factory de objetos

function criarObjeto (nome = 'Anonimo', idade = 18){
    return {
        nome,
        idade,
        pais: 'Brasil'
    }
}

const pessoa1 = criarObjeto('Thiago', 22)
const pessoa2 = criarObjeto('Edmilson', 90)
const pessoa3 = criarObjeto()

console.log(pessoa1)
console.log(pessoa2)
console.log(pessoa3)