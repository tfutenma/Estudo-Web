const crianca2 = {
      altura: 150,
      taxaCrescimento: 2
}
const crianca1 = {
      altura: 130,
      taxaCrescimento: 4
}


function calculaTempo(crianca1, crianca2) {
      return (crianca1.altura - crianca2.altura) / (crianca2.taxaCrescimento - crianca1.taxaCrescimento)
}

function calculaCrescimento(crianca1, crianca2) {

      if (crianca1.altura > crianca2.altura) {
            console.log(`A criança 1 é maior com ${crianca1.altura}cm`)
            if (crianca1.taxaCrescimento >= crianca2.taxaCrescimento) {
                  console.log(`A criança 2 não ultrapassará a 1, pois a taxa de crescimento é menor`)
            } else {
                  const tempo = calculaTempo(crianca1, crianca2)
                  console.log(`Irá demorar ${tempo} anos para a criança 2 ultrapassar`)
            }
      } else if (crianca2.altura > crianca1.altura) {
            console.log(`A criança 2 é maior com ${crianca2.altura}cm`)
            if (crianca2.taxaCrescimento >= crianca1.taxaCrescimento) {
                  console.log(`A criança 1 não ultrapassará a 2, pois a taxa de crescimento é menor`)
                  console.log(`Irá demorar ${tempo} anos para ultrapassar`)
            } else {
                  const tempo = calculaTempo(crianca2, crianca1)
                  console.log(`Irá demorar ${tempo} anos para a criança 1 ultrapassar`)
            }
      } else {
            console.log(`As crianças tem tamanhos iguais`)
      }

}

calculaCrescimento(crianca1, crianca2)