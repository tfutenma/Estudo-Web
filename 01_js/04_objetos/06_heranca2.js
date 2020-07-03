//Cadeia de prototipos
Object.prototype.atrib0 = 'Objeto' //Nao recomendado

const avo = { atrib1 : 'A'}
const pai = { __proto__ : avo, atrib2: 'B', atrib3: 3}
const filho = { __proto__:pai, atrib3: 'C'}
console.log(filho.atrib0, filho.atrib1, filho.atrib2, filho.atrib3)

const carro = {
    velAtual : 0,
    velMax : 200,
    acelerarMais(delta){
        if (this.velAtual + delta <= this.velMax){
            this.velAtual += delta
        } else {
            this.velAtual = this.velMax
        }
    },
    status() {
        return `${this.velAtual}Km/h de ${this.velMax}Km/h`
    }
}

const ferrari = {
    modelo: 'F40',
    velMax: 324, //shadowing
}
const volvo = {
    modelo: 'V40',
    status() {
        return `${this.modelo}: ${super.status()}`
    }
}

Object.setPrototypeOf(ferrari, carro)
Object.setPrototypeOf(volvo, carro)
console.log(ferrari)
console.log(volvo)

volvo.acelerarMais(100)
console.log(volvo.status())

ferrari.acelerarMais(350)
console.log(ferrari.status())