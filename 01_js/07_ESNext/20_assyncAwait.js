function esperarPor(tempo = 1000) {
      return new Promise(function (resolve) {
            setTimeout(() => resolve(), tempo)
      })
}


// let p = esperarPor(1000)
//       .then(() => console.log('Executando promise '))
//       .then(esperarPor)
//       .then(() => console.log('Executando promise '))
//       .then(esperarPor)
//       .then(() => console.log('Executando promise '))
//       .then(esperarPor)
//       .then(() => console.log('Executando promise '))

// async function executarSemAwait() {
//       esperarPor(1000)
//       console.log('Async 1')
//       esperarPor(1000)
//       console.log('Async 2')
//       esperarPor(1000)
//       console.log('Async 3')
//       esperarPor(1000)
//       console.log('Async 4')
// }
// executarSemAwait()

function retornaEm5() {
      return new Promise(resolve => {
            setTimeout(() => resolve(10), 2000)
      })
}
async function executarComAwait() {
      let valor = await retornaEm5()

      await esperarPor(1000)
      console.log(`Await ${valor}`)
      await esperarPor(1000)
      console.log(`Await ${valor + 1}`)
      await esperarPor(1000)
      console.log(`Await ${valor + 2}`)
      await esperarPor(1000)
      console.log(`Await ${valor + 3}`)

      return valor + 4
}
// executarComAwait().then(console.log)

async function executarDeVerdade() {
      const valor = await executarComAwait()
      console.log(valor)
}

executarDeVerdade()