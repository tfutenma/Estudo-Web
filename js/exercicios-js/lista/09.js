/*  Todo aluno recebe uma nota de 0 a 100. 
*   Alunos com nota abaixo de 40 são reprovados
*   Se a diferença entre a nota e o proximo multiplo de 5 for menor que 3, arredondar a nota para esse prox multiplo de 5
*   Se a nota for abaixo de 38, não é feita nenhum arredondamento pois essa nota resulta em reprovação
*/

function arredonda(nota) {
    if (nota < 38) {
        nota = nota
    } else if (nota % 5 >= 3){
        nota = nota + (5 - (nota % 5))
    }
    return nota
}

function classifica(nota){
    let arrendondada = arredonda(nota)
    if(arredonda<=40) return `Reprovado com nota ${arrendondada}`
    else return `Aprovado com nota ${arrendondada}`
}

console.log(classifica(38))
console.log(classifica(37))
console.log(classifica(42))
console.log(classifica(43))