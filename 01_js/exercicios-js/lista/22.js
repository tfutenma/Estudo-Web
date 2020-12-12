function calculaJuros(mes, valor) {
      if (mes > 0 && mes <= 12) {
            const atraso = mes - 1
            const juros = (valor * ((1 + (5 / 100)) ** atraso)).toFixed(2)
            return juros
      } else {
            return 'Mês inválido.'
      }
}

console.log(calculaJuros(4, 100))