function verifica(inteiro){
    if (typeof(inteiro) !== 'number'){
        return false
    } else if(inteiro % 3 === 0){
        return true
    } else false
    return false
}

console.log(verifica(0))
console.log(verifica(2.2))
console.log(verifica(3))
console.log(verifica('A'))