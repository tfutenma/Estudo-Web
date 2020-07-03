/*08) Pedro joga N jogos de basquete por temporada. Para saber como está ele está progredindo, ele mantém
registro de todos os as pontuações feitas por jogo. Após cada jogo ele anota no novo valor e confere se o
mesmo é maior ou menor que seu melhor e pior desempenho. Dada uma lista string = “pontuação1 pontuação2
pontuação3 etc..”, escreva uma função que ao recebê-la irá comparar os valores um a um e irá retornar um
vetor com o número de vezes que ele bateu seu recorde de maior número de pontos e quando fez seu pior
jogo. (Número do pior jogo).*/

const string = '10, 20, 20, 8, 25, 3, 0, 30, 1'
const string1 = '2, 3, 1, 4, 5, 6, 4'
const string2 = "30, 40, 20, 4, 51, 25, 42, 38, 56, 0"


console.log(string + "\n")

function comparar(listaPontuacao) {
    let pontuacoes = listaPontuacao.split(', ')
    let maiorPonto = pontuacoes[0]
    let countRecorde = 0
    let piorJogo = 1
    let piorPonto = pontuacoes[0]

    for (let i=1; i < pontuacoes.length; i++) {
        if (pontuacoes[i] > maiorPonto) {
            maiorPonto = pontuacoes[i]
            countRecorde++
        } else if (pontuacoes[i] < piorPonto[0]) {
            piorJogo = i + 1
            piorPonto[0] = pontuacoes[i]
        }
    }

    let resultado = [countRecorde, piorJogo]
    return resultado
}


console.log(comparar(string))
console.log(comparar(string1))
console.log(comparar(string2))