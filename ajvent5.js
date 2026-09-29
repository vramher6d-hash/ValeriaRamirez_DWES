function decodeSantaPin(code) {

    // el matchall devuelve coincidencias respecto a lo de regex101
    const ops = code.matchAll(/\[(\d[+-]*|<)\]/g)

    const calcular = [...ops].map(o => o[1])
    console.log(calcular)

    let pin = ""

    // se recorre las operaciones
    for (const operacion of calcular) {

        console.log(operacion)

        if (operacion === "<") {
            pin += pin[pin.length - 1]
            continue
        }

        // lo partimos en numero y en texto introducido
        // como "1" y 1 no es lo mismo, entonces lo convertimos
        let numero = Number(operacion[0])

        for (let i = 1; i < operacion.length; i++) {

            if (operacion[i].includes("+")) {
                numero++
            }

            if (operacion[i].includes("-")) {
                numero--
            }
        }

        if (numero === 10) {
            numero = 0
        }
        else if (numero === -1) {
            numero = 9
        }

        // actualizamos el numero segun el resultado
        pin += numero
    }

    if (pin.length < 4) {
        return null
    }
    return pin
}


// -------------------------------
console.log(decodeSantaPin('[1++][2-][3+][<]'))
console.log(decodeSantaPin('[9+][0-][4][<]'))
console.log(decodeSantaPin('[1+][2-]'))