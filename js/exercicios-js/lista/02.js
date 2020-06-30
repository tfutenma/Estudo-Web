function classificarTriangulo(lado1 = 1, lado2 = 1, lado3 = 1) {
    if (Number.isSafeInteger(lado1) && Number.isSafeInteger(lado2) && Number.isSafeInteger(lado3)) {
        if (lado1 == lado2 && lado2 == lado3) console.log("É Equilátero")
        else if (lado1 != lado2 && lado1 != lado3 && lado2 != lado3) console.log("É Escaleno")
        else console.log("É Isósceles")
    }
}

classificarTriangulo()
classificarTriangulo(2)
classificarTriangulo(1, 2, 3)
classificarTriangulo(2, 2, 2)
classificarTriangulo(1, 2, 2)