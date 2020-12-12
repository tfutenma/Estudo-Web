function mediaPonderada(codigo, nota1, nota2, nota3) {
      let notas = []
      notas.push(nota1)
      notas.push(nota2)
      notas.push(nota3)
      notas.sort((a, b) => a < b ? 1 : -1)
      const media = (((notas[0] * 4) + (notas[1] * 3) + (notas[2] * 3)) / 10)
      console.log(`Codigo Aluno: ${codigo}`)
      console.log(`Nota 1 : ${nota1}`)
      console.log(`Nota 2 : ${nota2}`)
      console.log(`Nota 3 : ${nota3}`)
      console.log(`Media : ${media}`)
      if (media >= 5) {
            console.log('APROVADO')
      } else {
            console.log('REPROVADO')
      }
}

mediaPonderada(14, 3, 10, 10)
mediaPonderada(111, 5, 3, 3)