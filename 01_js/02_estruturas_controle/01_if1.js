function soNoticiaBoa(nota){
    if(nota>=7){
        console.log('Aprovado com ', nota)
    }
}

soNoticiaBoa(8.1)
soNoticiaBoa(6.1)

function seForVerdadeEuFalo(valor){
    if(valor){
        console.log('é verdade... ', valor)
    }
}

seForVerdadeEuFalo()
seForVerdadeEuFalo(null)
seForVerdadeEuFalo(NaN)
seForVerdadeEuFalo('')
seForVerdadeEuFalo(0)

seForVerdadeEuFalo(-1)
seForVerdadeEuFalo(1)
seForVerdadeEuFalo(' ')
seForVerdadeEuFalo('?')
seForVerdadeEuFalo([])
seForVerdadeEuFalo({})

