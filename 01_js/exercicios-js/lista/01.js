function calculo(valor1 = 0, valor2 = 0){
    if(Number.isInteger(valor1) && Number.isInteger(valor2)){
        console.log(" =================== ")
        console.log("Soma:",valor1 + valor2)
        console.log("Subtracao:",valor1 - valor2)
        console.log("Multiplicacao:",valor1 * valor2)
        console.log("Divisao:",valor1 / valor2)        
    } else {
        console.log("======\nNao é Numero")
    }
}

calculo()
calculo(2)
calculo(2,3)
calculo(2,'oi')

