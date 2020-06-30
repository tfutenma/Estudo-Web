let num1 = 1
let num2 = 2


num1++
console.log(num1)
--num1
console.log(num1)


console.log( num2-- === ++num1 )
console.log( --num2 === num1++ ) //mostra que o prefix tem prioridade