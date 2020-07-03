function jurosCompostos() {
    return (this.capInic * (1 + this.juros) ** this.tempo)
}

function jurosSimples() {
    return ((this.capInic *( 1 + this.juros * this.tempo)))
}


const juros = function (capInic, juros, tempo) {
    this.capInic = capInic
    this.juros = juros
    this.tempo = tempo
    console.log("Em juros simples:", jurosSimples())
    console.log("Em juros compostos:", jurosCompostos())
}


juros(100, 0.1, 2)