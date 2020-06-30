//USANDO ARRAY

const [a] = [100]
console.log(a)

const [n1, , n3, n4, n5, n6 = 0] = [10, 7, 9, 2]
console.log(n1)
console.log(n3)
console.log(n5)
console.log(n6) //retorna 0 pois foi definido valor padrao

const [, [, nota]] = [[, 8, 9], [5, 3, 7]]
console.log(nota)

const lista = [1,2,3,4,5]
const [, dois, tres, , cinco] = lista
console.log('------')
console.log(tres)
console.log(cinco)
