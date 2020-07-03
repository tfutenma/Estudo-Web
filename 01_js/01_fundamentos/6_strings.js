const escola = "Esc0la"
const escola2 = "Escolaaa"
console.log(escola.charAt(4)) //retorna o caractere no indice 4
console.log(escola.charAt(10)) //retorna vazio quando o indice nao existe
console.log(escola.charCodeAt(3)) //retorna valor unicode
console.log(escola.indexOf('E')) //retorna o indice da letra "E"
console.log(escola2.indexOf('a')) //retorna o primeiro index só
console.log(escola.substring(1)) //vai do indice 1 ate o ultimo
console.log(escola.substring(0, 3)) //vai do indice 0 ate o 2
console.log(escola.concat(" de JS") + "!") //concatena valores
console.log(escola.replace('0', 'o')) /*substitui o caracter "0" por outro caracter é possivel utilizar estruturas regulares
                                            por exemplo /\d/g /\w/g (Regex) */
console.log('Ana,Marina,Pedro'.split(','))



