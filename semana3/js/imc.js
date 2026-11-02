// Antes de usar funciones
/* const peso = parseFloat(prompt("Ingrese su Peso:"));
const altura = parseFloat(prompt("Ingrese su Altura:"));
const imc = peso / (altura * altura);
console.log("Tu IMC es: " + imc.toFixed(2) + "%");

if (imc < 18.5) {
    console.log("Peso inferior al normal");
} else if (imc >= 18.5 && imc <= 24.9) {
    console.log("Normal")
} else if (imc >= 25 && imc <= 29.9) {
    console.log("Peso superior al normal")
} else {
    console.log("Obesidad")
} */


// Con funciones
const entradaDatos = (texto) => {
    return parseFloat(prompt(texto));
}

const salidaDatos = (texto) => {
    console.log(texto);
}

const obtenerIMC = (peso, altura) => {
    return peso / (altura * altura);
}

const obtenerComposicionCorporal = (imc) => {
    if (imc < 18.5) {
        return ("Peso inferior al normal");
    } else if (imc >= 18.5 && imc <= 24.9) {
        return ("Normal")
    } else if (imc >= 25 && imc <= 29.9) {
        return ("Peso superior al normal")
    } else {
        return ("Obesidad")
    }
}

// #Version #1
/* const calcularIMC = () => {
    const peso = parseFloat(prompt("Ingrese su Peso:"));
    const altura = parseFloat(prompt("Ingrese su Altura:"));
    const imc = obtenerIMC(peso, altura);
    const composicion = obtenerComposicionCorporal(imc);
    console.log("Tu IMC es: " + imc.toFixed(2) + "%");
    console.log(composicion)
} */

// Versión #2
const calcularIMC = () => {
    const peso = entradaDatos("Ingrese su Peso:");
    const altura = entradaDatos("Ingrese su Altura:");
    const imc = obtenerIMC(peso, altura);
    const composicion = obtenerComposicionCorporal(imc);
    salidaDatos("Tu IMC es: " + imc.toFixed(2) + "%");
    salidaDatos(composicion);
}

calcularIMC();