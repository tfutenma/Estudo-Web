function soNoticiaBoa(nota){
    if(nota>=7){
        console.log('Aprovado com ', nota)
    } else{
        console.log('Reprovado')
    }
}

soNoticiaBoa(6)
soNoticiaBoa(7)
soNoticiaBoa('epa!') //cuidado com a tipagem