function planoSaude(idade){
    let valorBase = 100
    if(idade<0) return 'Idade inválida'
    else if(idade<10) return (valorBase + 80).toFixed(2)
    else if(idade>=10 && idade<=30) return (valorBase + 50).toFixed(2)
    else if(idade>30 && idade<=60) return (valorBase + 95).toFixed(2)
    else if(idade>60) return (valorBase + 130).toFixed(2)
}

console.log(planoSaude(9))
console.log(planoSaude(10))
console.log(planoSaude(30))
console.log(planoSaude(45))
console.log(planoSaude(69))