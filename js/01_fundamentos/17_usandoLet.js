let numero = 10
{
    let numero = 2
    console.log('Dentro = ', numero)    
}

console.log('Fora = ', numero)


{
    console.log('Dentro = ', numero)    
}

//let tem escopo global, funcao e bloco