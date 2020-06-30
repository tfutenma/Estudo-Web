class Pessoa {
    constructor(nome){
        this.nome = nome
    }
    falar() {
        console.log(`Meu nome é ${this.nome}`)
    }
} //Tomar cuidado com o contecto lexico

const p1 = new Pessoa('João')
p1.falar()

const criarPessoa = nome => {
    return {
        falar: () => console.log(`Meu nome é ${nome}`)
    }
} //Factory tem vantagem pois nao tem o problema do contexto Lexico

const p2 = criarPessoa('Joao')
const p3 = criarPessoa('Ale')

p2.falar()
p3.falar()