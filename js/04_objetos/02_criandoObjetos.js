//Usando notacao literal
const obj1 = {}
console.log(obj1)

//Object em JS
console.log(typeof Object, typeof new Object)
const obj2 = new Object
console.log(obj2)

//funcoes construtoras
function Produto(nome, preco, desconto){
    this.nome = nome
    this.getPrecoComDesconto = () => {
        return preco * (1 - desconto) 
    }
}


const p1 = new Produto('Caneta', 7.99, 0.15)
const p2 = new Produto('Notebook', 2900, 0.1)
console.log(p1.getPrecoComDesconto())
console.log(p2.getPrecoComDesconto())


//Funcao Factory
function criarFuncionario(nome, salarioBase, faltas){
    return{
        nome,
        salarioBase,
        faltas,
        getSalario() {
            return (salarioBase/30)*(30-faltas)
        }
    }
}

const f1 = criarFuncionario('João', 8000, 4)
const f2 = criarFuncionario('MAria', 10000 , 10)
console.log(f1.getSalario())
console.log(f2.getSalario())

//Object create
const filha = Object.create(null)
filha.nome = 'Ana'
console.log(filha)

//Funcao famosa que retorna objeto
const fromJSON = JSON.parse('{"info":"Sou um JSON"}')
console.log(fromJSON.info)