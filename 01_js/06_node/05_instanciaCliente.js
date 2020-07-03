const contadorA = require('./03_instanciaUnica')
const contadorB = require('./03_instanciaUnica')

const contadorC = require('./04_instanciaNova')() //funcao factory
const contadorD = require('./04_instanciaNova')() //funcao factory

contadorA.inc()
contadorA.inc()
console.log(contadorB.valor) //Da pra ver que a instancia unica carrega memoria cache

contadorC.inc()
contadorC.inc()
console.log(contadorD.valor) //Como sao instancias diferentes por factory, retorna diferente