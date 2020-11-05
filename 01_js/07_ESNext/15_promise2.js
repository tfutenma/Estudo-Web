// setTimeout(function () {
//       console.log('Executando callback')

//       setTimeout(function () {
//             console.log('Executando 2')

//             setTimeout(function () {
//                   console.log('Executando 3')
//             }, 2000)

//       }, 2000)

// }, 2000)


let i = 1


function esperarPor(tempo = 3000) {
      return new Promise(function (resolve) {
            setTimeout(function () {
                  console.log('Executando promise ', i)
                  i = i + 1
                  resolve()
            }, tempo)
      })
}


let p = esperarPor(1000)
      .then(() => esperarPor(1000))
      .then(() => esperarPor(1000))
      .then(esperarPor)