function consertar(numero=0){
    valorEmReais = `R$ ${numero.toFixed(2).toString().replace(".", ",")}`
    return valorEmReais
}

console.log(consertar())
console.log(consertar(0.1 + 0.2))