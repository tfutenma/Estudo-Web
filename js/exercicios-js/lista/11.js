/*
*   Anos bissextos 4 em 4 anos
*   100 em 100 não é ano bissexto
*   400 em 400 é ano bissexto
*/

function isBissexto(ano) {
    if(ano <= 0){
        return false
    } else if (ano % 400 == 0) {
        return true
    } else if (ano % 100 == 0) {
        return false
    } else if (ano % 4 == 0) {
        return true
    } else{
        return false  
    } 
}

console.log(isBissexto(1003))
console.log(isBissexto(1900))
console.log(isBissexto(1004))
console.log(isBissexto(600))
console.log(isBissexto(1904))
console.log(isBissexto(1008))
console.log(isBissexto(1912))
console.log(isBissexto(2000))