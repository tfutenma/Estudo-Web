const {
      promises
} = require("fs")

function gerarNumerosEntre(min, max, tempo) {
      if (min > max) {
            [min, max] = [max, min]
      }
      return new Promise(resolve => {
            setTimeout(function () {
                  const fator = max - min + 1
                  const aleatorio = parseInt(Math.random() * fator) + min
                  resolve(aleatorio)
            }, tempo)

      })
}

function gerarVariosNumeros() {
      return Promise.all([
            gerarNumerosEntre(1, 60, 1000),
            gerarNumerosEntre(1, 60, 5000),
            gerarNumerosEntre(1, 60, 1000),
            gerarNumerosEntre(1, 60, 1000),
            gerarNumerosEntre(1, 60, 1000),
            gerarNumerosEntre(1, 60, 1000),
            gerarNumerosEntre(1, 60, 1000),
      ])
}

console.time('tempo')
gerarVariosNumeros().then(numeros => console.log(numeros))
      .then(() => {
            console.timeEnd('tempo')
      })