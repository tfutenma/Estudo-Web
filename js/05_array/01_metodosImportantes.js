const pilotos = ['Vetel', 'Alonso', 'Raikkonen', 'Massa']
pilotos.pop() //massa saiu do array
console.log(pilotos)

pilotos.push('Verstappen') //adiciona no fim da array
console.log(pilotos)

pilotos.shift() //remove o primeiro da array
console.log(pilotos)

pilotos.unshift('Hamilton') //adiciona no inicio do Array
console.log(pilotos)


//splice pode adicionar e remover elementos
//adicionar
pilotos.splice(2,0,'Bottas', 'Massa') //comeca no indice 2, 0 remocoes
console.log(pilotos)
//remover
pilotos.splice(3,1) // remove 1 a partir do indice 3
console.log(pilotos)

//slice
const algunsPilotos1 = pilotos.slice(2) // pega o array a partir do indice 2 de pilotos
console.log(algunsPilotos1)
const algunsPilotos2 = pilotos.slice(1, 4) // pega o array a partir do indice 1 de pilotos ate o indice 4 sem incluir ele
console.log(algunsPilotos2)