function gerarNumerosEntre(min, max) {
      if (min > max) {
            [min, max] = [max, min]
      }
      return new Promise(resolve => {
            const fator = max - min + 1
            const aleatorio = parseInt(Math.random() * fator) + min
            resolve(aleatorio)
      })
}

gerarNumerosEntre(30, 100)
      .then(num => num * 10)
      .then(numGerado => `O número gerado foi ${numGerado}`)
      .then(console.log)