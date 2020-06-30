const pessoa = {
    saudacao: 'Bom dia!',
    falar(){
        console.log(this.saudacao)
    }
}

pessoa.falar()

const falar = pessoa.falar
falar() //Conflito de  paradigmas: POO e PFuncional

const falarDePessoa = pessoa.falar.bind(pessoa) //funcao que Amarra o this ao objeto pessoa
falarDePessoa()