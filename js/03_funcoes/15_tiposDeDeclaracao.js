/*function declaration -- O JS sempre prepara as funcoes ao executar o arquivo, 
    entao pode ser chamada antes de ser declarada 
*/
console.log(soma(3, 4))
function soma(x, y){
    return x + y
}

//function expression (anonima) -- so chamar apos a declaracao
const sub = function(x, y) {
    return x - y
}

//named function expression -- so chamar apos a declaracao
const mult = function mult(x, y){
    return x * y
}
