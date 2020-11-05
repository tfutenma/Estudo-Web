function funcionarOuNao(valor, chanceErro) {
      return new Promise((resolve, reject) => {
            try {
                  if (Math.random() < chanceErro) {
                        reject('Ocorreu um erro')
                  } else {
                        resolve(valor)
                  }
            } catch (e) {
                  reject(e)
            }
      })
}

funcionarOuNao('testando', 0.1)
      .then(v => console.log(`Valor: ${v}`))
      .then(
            v => console.log(v),
            err => console.log(`Erro Especifico - ${err}`)
      )
      .catch(err => console.log(`Erro Geral - ${err}`))
      .then(() => console.log(`Fim!`))