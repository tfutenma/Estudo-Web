// Funcao em JS é First-Class Object (Citizens)
//Higher-order function (trata a funcao como um dado que habilita programacao funcional)

//criar de forma literal
function fun1(){ } 

//Armazenar em uma variavel
const fun2 = function(){}

//Armazenar em um array
const array = [function(a,b) {return a + b}, fun1, fun2]
console.log(array[0](2,3))


//Armazenar em uma tributo de objeto
const obj = {}
obj.falar = function () {return 'Opa'}
console.log(obj.falar())

//Passar funçao como parametro
function executar(func){
    func()
}
executar(function() { console.log('Executando...') } )

//Uma Funcao pode retornar/conter outra funcao
function soma(a, b){
    return function(c){
        console.log(a + b + c)
    }
}
soma(2,3)(2)
const cincoMais = soma(2,3)
cincoMais(5)



