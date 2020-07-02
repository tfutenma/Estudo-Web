//Operador ... rest(juntar)/spread(espalhar)
//udar rest com parametro de funcao

//usar spread com objetos
const funcionario = {
      nome: 'Maria',
      salario: 12345.00
}
const clone = {
      ativo: true,
      ...funcionario
}
console.log(clone)

//usar spread no array
const grupoA = ['Joao', 'Pedro', 'Gloria']
const grupoFinal = ['Maria', ...grupoA, 'Rafaela']
console.log(grupoFinal)