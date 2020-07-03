const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json'
const axios = require('axios')

const isChinesa = funcionario => funcionario.pais === 'China'
const isMulher = funcionario => funcionario.genero === 'F'
const reduceMenor = (funcionario, fAtual) => {
    return funcionario.salario < fAtual.salario ? funcionario : fAtual
}

axios.get(url).then(response => {
    const funcionarios = response.data
    
    const func = funcionarios
        .filter(isChinesa)
        .filter(isMulher)
        .reduce(reduceMenor)
    
    console.log(func)
})


//para recriar o node_modules, basta dar npm i com o package.json
