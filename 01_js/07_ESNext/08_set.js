//nao aceita repeticao e nao é indexado

const times = new Set()
times.add('Sao Paulo')
times.add('Palmeiras')
times.add('Corinthias')
times.add('Flamengo')
times.add('Sao Paulo')
console.log(times)
console.log(times.size)
console.log(times.has('Sao Paulo'))
console.log(times.has('sao paulo'))
times.delete('Palmeiras')
console.log(times.has('Palmeiras'))

const nomes = ['Raquel', 'Lucas', 'Julia', 'Lucas']
const nomesSet = new Set(nomes)
console.log(nomesSet)