//Funcao sem retorno
function imprimirSoma(a, b){
    console.log(a+b)
}

imprimirSoma(2,3)
imprimirSoma(2)  //Da em NaN
imprimirSoma(2,3,4,5,6) //Da o valor da soma dos dois primeiros parametros
imprimirSoma() //Da em NaN


//Funcao com retorno
function somar(a, b = 1){ //setar 1 como valor padrao de b
    return a + b
}

console.log(somar(5,8))
console.log(somar(5))
