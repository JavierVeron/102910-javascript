// Práctica de Control de Ciclos y Lógica
/* Crear el Calculo de IMC solicitando peso (kgs) y altura (mts) una vez que obtengan el imc (peso / altura al cuadrado), informar la composición corporal:

Peso inferior al normal 	Menos de 18.5
Normal 	                    18.5 – 24.9
Peso superior al normal  	25.0 – 29.9
Obesidad 	                Más de 30.0 */

// TIP => TAUTOLOGIA
// AND => &&
// V && V => V
// V && F => F
// F && V => F
// F && F => F

// OR => ||
// V || V => V
// V || F => V
// F || V => V
// F || F => F

/* const peso = parseFloat(prompt("Ingrese su Peso:"));
const altura = parseFloat(prompt("Ingrese su Altura:"));
const imc = peso / (altura * altura);
alert("IMC: " + imc.toFixed(2));

if (imc < 18.5) {
    alert("Peso inferior al normal");
} else if (imc >= 18.5 && imc <= 24.9) {
    alert("Normal")
} else if (imc >= 25 && imc <= 29.9) {
    alert("Peso superior al normal")
} else {
    alert("Obesidad");
} */


// Anto
/* let peso = parseFloat("67");
let altura = parseFloat("1.62");
let imc = peso / (altura * altura);
console.log("Tu IMC es " + imc.toFixed(2));

if (imc >= 30) {
    console.log("Obesidad")
} else if (imc >= 25) {
    console.log("Sobrepeso")
} else if (imc >= 18.5){
    console.log("Normal")
} else {
    console.log("Peso inferior al normal")
} */


// Switch
/* const opcion = prompt("Elija una opción (A/B/C):").toUpperCase();

switch(opcion) {
    case "A":
        alert("Elegiste: A!")
        break;
    case "B":
        alert("Elegiste: B!!")
        break;
    case "C":
        alert("Elegiste: C!!!")
        break;
    default:
        alert("Elegiste: OTRA OPCION!")
        break;
} */

// Es equivalente con if...else
/* if (opcion == "A") {
    alert("Elegiste: A!");
} else if (opcion == "B") {
    alert("Elegiste: B!!");
} else if (opcion == "C") {
    alert("Elegiste: C!!!");
} else {
    alert("Elegiste: OTRA OPCION!")
} */

// FOR (ciclo de iteracion fijo)
//const vueltas = parseInt(prompt("Cuantas vueltas queres dar"));

// FOR
/* for (let i=1; i<=vueltas; i++) {
    alert("Vuelta: " + i);
} */

// WHILE (si no se cumple la condicion de entrada, puede ser que nunca se ejecute)
/* let i = 1;

while (i<=vueltas) {
    if (i == 3) {
        console.log("Salto la vuleta #3");
        i++;
        continue;
    }

    alert("Vuelta: " + i);

    if (i == 2) {
        console.log("Corto en la vuleta #2");
        //break;
    }

    i++;
} */

// DO WHILE (se ejecuta al menos 1 vez)
/* let i = 1;

do {
    alert("Vuelta: " + i);
    i++;
} while (i<=vueltas); */


// CARRITO DE COMPRAS
// Constuir un carrito, donde se pregunta cuantos productos se quieran agregar.
// En función a ese numero solicitar el precio del producto
// Al finalizar informar el total a pagar

/* const productos = parseInt(prompt("Cúantos productos querés agregar?"));
let totalAPagar = 0;

for (let i=1; i<=productos; i++) {
    let precio = parseFloat(prompt("Ingrese el valor del Producto #" + i));
    totalAPagar = totalAPagar + precio;
    //totalAPagar += precio; // Es equivalente
}

alert("El total a pagar es: $" + totalAPagar); */


// Repaso de For
// 0..9 (10 vueltas)
/* for (let i=0; i<10; i++) {
    alert("Valor de I: " + i);
} */

// 1..10 (10 vueltas)
/* for (let i=1; i<=10; i++) {
    alert("Valor de I: " + i);
} */


// CREAR CARRITO DE COMPRAS DE TOUCHE SPORT
// Constuir un carrito, donde se pregunta cuantos productos se quieran agregar.
// En función a ese numero solicitar el precio del producto
// Al finalizar informar el total a pagar
// Preguntar si es primera compra, si es asi obtener un 10% de descuento (del total)

const primerCliente = confirm("Estás comprando por Primera Vez?"); // boolean => true / false
const descuento = 10;
const productos = parseInt(prompt("Cúantos productos querés agregar?"));
let subtotal = 0;
let total = 0;
let precioDescuento = 0;

for (let i=1; i<=productos; i++) {
    let precio = parseFloat(prompt("Ingrese el valor del Producto #" + i));
    subtotal = subtotal + precio;
}

if (primerCliente) {
    precioDescuento = ((subtotal * descuento) / 100);
    console.log("Descuento: " + precioDescuento);
}

total = subtotal - precioDescuento;
alert("Total de Productos: " + productos + "\n" + "Subtotal: $" + subtotal + "\n" + "Descuento: $" + precioDescuento + "\n" + "Total: $" + total);