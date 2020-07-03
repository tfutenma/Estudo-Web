//funcao construtora
function Pessoa(nome = 'Anonimo'){
    this.nome = nome

    this.falar = function (){
        return console.log(`Meu nome é ${this.nome}`)
    }

} //problema no constexto lexico

const p1 = new Pessoa('Thiago')
p1.falar()



const criarPessoa = nome => {
    return {
        falar: () => console.log(`Meu nome é ${nome}`)
    }
} //Factory tem vantagem pois nao tem o problema do contexto Lexico

const p2 = criarPessoa('Joao')
p2.falar()


