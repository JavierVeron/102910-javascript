/* // Saludar
alert("Hola Mundo!");

// Modificar Encabezado
const encabezado = document.getElementById("encabezado");
encabezado.innerHTML = "Semana #1 en Coder"; */

// Variables (puede variar su valor a lo largo de su ejecución)
/* let nombre = "Antonela"; // Definiendo una variable y asignando un valor (en 1 solo paso)
let nombre2 = 'Sophia';
let nombre3 = `Julián`; // Template String o Plantilla literal
nombre = "Antonella"; 

let apellido; // Definir una variable (su valor es undefined)
apellido = "Figueira"; // Asignar un valor;

console.log(nombre);
console.log(apellido);
console.log(nombre3);
nombre3 = "Juan";
console.log(nombre3);
let saludo = "Hola, " + nombre + " " + apellido;
console.log(saludo);
alert(saludo);
//alert(saludo.toUpperCase());

// Numbers (int y float)
let edad = 24; // int
let peso = 55.6; // float

// Booleans (booleano true/false)
let soltero = true; // verdadero
let casada = false; // falsa */

// Prompts (sirve para ingresar valores)
/* let nombre = prompt("Ingrese su Nombre:");
let edad = parseInt(prompt("Ingrese su Edad:")); // Es un valor numérico
//let edad = "10";  // al ser un string cuando se sume un valor me lo va a concatenar
edad = edad + 10;

console.log("Hola, soy " + nombre + " y mi edad es " + edad); */

// Calculadora de IMC
// Entradas (altura y peso)
// Proceso => Calcular el IMC => peso dividido al altura al cuadrado (multiplicar por si mismo 2 veces)
// Salida => "Tu IMC es 25%" 

// TIP => prompts, console.log o alert, parseInt()/parseFloat(), toFixed(2)

// Julian
/* let altura = Number(prompt("Ingrese su altura"));
let peso = Number(prompt("Ingrese su peso"));
let resultado = parseFloat(peso / (altura * altura)).toFixed(2);
alert("Su índice de masa corporal es: " + resultado + "%"); */

// Marcos
/* let estaturaM = parseFloat(prompt("ingresa estatura en metros"))
let pesokg = parseFloat (prompt("ingresa tu peso en kilogramos"))
let imc = pesokg / (estaturaM * estaturaM);
imc = imc.toFixed(2);
alert("Su índice de masa corporal es: " + imc + "%"); */

// Sophia
// Calculadora de IMC
// Entradas
let peso = parseFloat(prompt("Ingresa tu peso en kg:"));
let altura = parseFloat(prompt("Ingresa tu altura en metros:"));
// Proceso
let imc = peso / (altura * altura);
// Salida
let salida = "Tu IMC es: " + imc.toFixed(1) + "%"
console.log(salida);
// También se muestra en pantalla
alert(salida);