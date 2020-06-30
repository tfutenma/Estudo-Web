function tratarErroELancar(erro){
    //throw new Error('erro x')
    //throw 10
    //throw true
    //throw ' mensagem ' 
    throw {
        nome: erro.name,
        msg: erro.message,
        date: new Date
    }
}

function imprimirNomeFritado (obj){
    try{
        console.log(obj.name.toUpperCase() + '!!!')
    } catch (e){
        tratarErroELancar(e)
    } finally{
        console.log('Final')
    }
}


const obj = { nome: 'Roberto' } //passar parametro errado para UpperCase() dar erro
imprimirNomeFritado(obj)