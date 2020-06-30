

function rand({ min = 0, max = 1000 }){
    const valor = Math.random() *(max - min) + min
    return Math.floor(valor) 
}

const obj = { max: 50, min: 40 }
//console.log(rand()) || Da erro pois nao é possivel destruturar algo undefined ou nulo
/* A melhor solucao é colocar um valor padrao para o destructuring
* function rand({ min = 0, max = 1000 } = {}){ || veja que tem o valor padrao
    const valor = Math.random() *(max - min) + min
    return Math.floor(valor) 
}*/
console.log(rand({}))
console.log(rand(obj))
console.log(rand({min:995}))


