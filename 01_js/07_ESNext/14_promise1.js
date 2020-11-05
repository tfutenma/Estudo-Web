const primeiroElemento = arrayOuString => arrayOuString[0]

const letraMinuscula = letra => letra.toLowerCase()

let p = new Promise(function (resolve) {
      resolve(['Ana', 'Bia', 'Carlos'])
})

p
      .then(array => array[0]) // = .then(primeiroElemento)
      .then(primeiroElemento)
      .then(letraMinuscula)
      .then(console.log) // = .then(v => console.log(v))