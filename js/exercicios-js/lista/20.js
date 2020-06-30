function cedulas(valor){
    let qtd
        if(valor/100>0){
            qtd = Math.floor(valor/100)
            console.log(`${qtd} notas de R$100`)
            valor = valor - (qtd * 100)
        }
        if(valor/50 > 0){
            qtd = Math.floor(valor/50)
            console.log(`${qtd} notas de R$50`)
            valor = valor - (qtd * 50)
        }
        if(valor/10 > 0){
            qtd = Math.floor(valor/10)
            console.log(`${qtd} notas de R$10`)
            valor = valor - (qtd * 10)
        }
        if(valor/5 > 0){
            qtd = Math.floor(valor/5)
            console.log(`${qtd} notas de R$5`)
            valor = valor - (qtd * 5)
        } 
        if(valor/1 > 0){
            qtd = Math.floor(valor/1)
            console.log(`${qtd} notas de R$1`)
            valor = valor - (qtd * 1)
        }
}
    

cedulas(201)
cedulas(512)
cedulas(225)
cedulas(275)