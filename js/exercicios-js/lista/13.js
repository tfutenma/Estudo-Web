function isUtil(dia){

    switch (dia){
        case 7:
            console.log('Fim de semana')
            break
        case 6:            
        case 5:            
        case 4:            
        case 3:            
        case 2:
            console.log('Dia útil')
            break
        case 1:
            console.log('Fim de semana')
            break
        default:
            console.log('Dia inválido')
            break
    }
}

isUtil(1)
isUtil(2)
isUtil(3)
isUtil(4)
isUtil(5)
isUtil(6)
isUtil(7)
isUtil(8)
isUtil(0)