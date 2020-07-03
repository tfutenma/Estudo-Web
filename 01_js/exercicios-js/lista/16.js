function calculadora(num1, operacao, num2){
    switch(operacao){
        case '+':
            console.log(`O resultado da Adição é: ${num1+num2}`)
            break
        case '-':
            console.log(`O resultado da Subtração é: ${num1-num2}`)
            break
        case '*':
            console.log(`O resultado da Multiplicação é: ${num1*num2}`)
            break
        case '/':
            console.log(`O resultado da Divisão é: ${num1/num2}`)
            break
        default:
            console.log(`Operação inválida`)
    }
}

calculadora(3,'+',3)
calculadora(3,'*',3)
calculadora(3,'-',3)
calculadora(3,'/',3)
calculadora(3,'oi',3)