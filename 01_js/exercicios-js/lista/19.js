function calcula(codigo, quantidade){
    switch(codigo){
        case 100:
            resultado = 3 * quantidade
            console.log(`Valor a ser pago: R$${resultado.toFixed(2)}`)
            break
        case 200:
            resultado = 4 * quantidade
            console.log(`Valor a ser pago: R$${resultado.toFixed(2)}`)
            break
        case 300:
            resultado = 5.50 * quantidade
            console.log(`Valor a ser pago: R$${resultado.toFixed(2)}`)
            break
        case 400:
            resultado = 7.50 * quantidade
            console.log(`Valor a ser pago: R$${resultado.toFixed(2)}`)
            break
        case 500:
            resultado = 3.50 * quantidade
            console.log(`Valor a ser pago: R$${resultado.toFixed(2)}`)
            break
        case 600:
            resultado = 2.80 * quantidade
            console.log(`Valor a ser pago: R$${resultado.toFixed(2)}`)
            break
        default:
            console.log('Produto inexistente')
    }
}

calcula(100, 4)
calcula(101, 4)
calcula(200, 4)
calcula(300, 4)
calcula(400, 4)
calcula(500, 4)
calcula(600, 4)