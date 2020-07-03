const aprovados = ['Aghata', 'Aldo', 'Daniel', 'Raquel']

aprovados.forEach(function(nome, indice, array, undefined){
    console.log(`${ indice + 1 } ${nome}`)
})

aprovados.forEach((nome, indice) => console.log(nome, indice))

const exibirAprovados = aprovado => console.log(aprovado)
aprovados.forEach(exibirAprovados)