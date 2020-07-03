//ES8 Object.values/Object.entries
const obj = {
      a: 1,
      b: 2,
      c: 3
}
console.log(Object.keys(obj))
console.log(Object.values(obj))
console.log(Object.entries(obj))

//Melhorias na Notacao literal de objetos
const nome = 'carla'
const pessoa = {
      nome, //Passar direto a partir de uma constante
      ola() { //Criar direto, sem ola: function() {}
            return 'Oi gente'
      }
}
console.log(pessoa.nome, pessoa.ola())

//Classe
class Animal {}
class Cachorro extends Animal {
      falar() {
            return 'au au!'
      }
}
console.log(new Cachorro().falar())