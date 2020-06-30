const valor = 'Global'

function minhaFuncao(){
    console.log(valor)
} // a funcao carrega o contexto lexico dela

function exec(){
    const valor = 'local'
    minhaFuncao()
}

exec()