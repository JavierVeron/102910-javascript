// Repaso de Arrays
const nombres = ["Juan", "Maria", "Pedro", "Sophia", "Tomas"];
console.log(nombres);
/* const nuevoNombre1 = prompt("Ingrese su Nombre 1:");
const nuevoNombre2 = prompt("Ingrese su Nombre 2:");
nombres.push(nuevoNombre1); // Agregar un nuevo elemento (al final del array)
console.log(nombres);
nombres.unshift(nuevoNombre2); // Agregar un nuevo elemento (al comienzo del array)
console.log(nombres);
let eliminado1 = nombres.pop(); // Elimina y devuelve un elemento (final del array);
console.log(nombres);
console.log("Valor eliminado: " + eliminado1);
let eliminado2 = nombres.shift(); // Elimina y devuelve un elemento (comienzo del array);
console.log(nombres);
console.log("Valor eliminado: " + eliminado2); */

// Qué pasa cuando queres eliminar valores intermedios #1?
/* const elementosEliminados = nombres.splice(2, 2);
console.log(nombres);
console.log(elementosEliminados); */

// Qué pasa cuando queres eliminar valores intermedios #2?
/* const nombreAEliminar = prompt("Ingrese el Nombre que se desea Eliminar:");
const elementosEliminados = nombres.filter(item => item.toUpperCase() != nombreAEliminar.toUpperCase());
console.log(elementosEliminados); */

// Crear una función que reciba como 2 parámetros un array y un nombre. Y esta devuelva un array con el elemento eliminado, sino lo encuentra devolver el mismo array
// Array, for, function, push, if
/* const nombreAEliminar = prompt("Ingrese el Nombre que se desea Eliminar:");

function eliminarNombre(nombres, nombreAEliminar) {
    const elementosEliminados = [];

    for (let i=0; i<nombres.length; i++) {
        let item = nombres[i];

        if (item.toUpperCase() != nombreAEliminar.toUpperCase()) {
            elementosEliminados.push(item);
        }
    }

    return elementosEliminados;
}

const nuevoArray = eliminarNombre(nombres, nombreAEliminar);
console.log("Nuevo Array:");
console.log(nuevoArray); */

// Crear una función que reciba como 2 parámetros un array y un nombre. Y esta devuelva un array con el elemento eliminado, sino lo encuentra devolver el mismo array
// Utilizar métodos de array
/* const nombreAEliminar = prompt("Ingrese el Nombre que se desea Eliminar:");

function eliminarNombre(nombres, nombreAEliminar) {
    const pos = nombres.findIndex(item => item.toUpperCase() == nombreAEliminar.toUpperCase());    
    nombres.splice(pos, 1);

    return nombres;
}

const nuevoArray = eliminarNombre(nombres, nombreAEliminar);
console.log("Nuevo Array:");
console.log(nuevoArray); */

// Repaso de objetos
/* let marca = "Audi";
let modelo = "A3"
let motor = 1.6
let puertas = 3
let velocidad = 215;
let aceleracion = 8; */

/* const auto = {marca:"Audi", modelo:"A3", motor:1.6, puertas:3, velocidad:215, aceleracion:8};
console.log(auto);
auto.modelo = "A4";
auto.anio = 2026;
console.log(auto);
console.log("Marca: " + auto.marca);
console.log("Modelo: " + auto.modelo);

const autosAudi = [
    {marca:"Audi", modelo:"A1", motor:1.2, puertas:3, velocidad:185, aceleracion:9},
    {marca:"Audi", modelo:"A3", motor:1.6, puertas:3, velocidad:215, aceleracion:8},
    {marca:"Audi", modelo:"A4", motor:2.0, puertas:5, velocidad:235, aceleracion:7}
]

console.log(autosAudi);
console.log("Marca: " + autosAudi[2].marca);
console.log("Modelo: " + autosAudi[2].modelo);
console.log("Velocidad: " + autosAudi[2].velocidad + " km/h");
console.log("Aceleración: " + autosAudi[2].aceleracion + " segundos"); */


// Repaso de Clases (propiedades y métodos)
/* class Auto {
    constructor(valor1, valor2, valor3, valor4, valor5, valor6) {
        this.marca = valor1; // propiedades
        this.modelo = valor2;
        this.motor = valor3;
        this.puertas = valor4;
        this.velocidad = valor5;
        this.aceleracion = valor6;
    }

    darDetalles() {
        return this.marca + " " + this.modelo + " " + this.motor + " (" + this.puertas + " puertas)";
    }
}

const auto1 = new Auto("Audi", "A1", 1.2, 3, 185, 9);
const auto2 = new Auto("Audi", "A3", 1.6, 3, 215, 8);
const auto3 = new Auto("Audi", "A4", 2.0, 5, 235, 7);

console.log(auto1);
console.log(auto1.darDetalles());
console.log(auto2);
console.log(auto3); */


// Ejemplo Zapatillas de Mercado libre
/* const zapatillas = [];

class Zapatilla {
    constructor() {
        this.marca = prompt("Ingrese la Marca:");
        this.nombre = prompt("Ingrese el Nombre:");
        this.precio = prompt("Ingrese el Precio:");
    }

    darDetalles() {
        return this.marca + " " + this.nombre + " $" + this.precio;
    }
}

let cancelar = false;

while (!cancelar) {
    const nuevaZapatilla = new Zapatilla();
    console.log(nuevaZapatilla.darDetalles());
    zapatillas.push(nuevaZapatilla);

    cancelar = !confirm("Desea agregar un nuevo Producto?");
}

console.log(zapatillas); */


// Crear un Clase Celular, donde pueda almacenar Marca, Modelo, Precio, Memoria, Camara
// Definir métodos darNombre() [Marca y Modelo], darPrecio() [Precio en pesos] 
class Celular {
    constructor(valor1, valor2, valor3, valor4, valor5) {
        this.marca = valor1
        this.modelo = valor2
        this.precio = valor3
        this.memoria = valor4 + " GB";
        this.camara = valor5 + " Mpx";
    }

    darNombre() {
        return `${this.marca} ${this.modelo} (${this.memoria} / ${this.camara})`;
    }

    darPrecio() {
        return "$" + this.precio + " pesos";
    }
}

const celular1 = new Celular("Samsung", "Galaxy A17", 419000, 128, 50);
console.log(celular1);
console.log(celular1.darNombre());
console.log(celular1.darPrecio());





























































// TAREA
// Crear una Clase Auto que nos permita agregar los siguientes datos: Marca, Modelo, Motor, Puertas, Velocidad, Aceleracion
// Crear un Método que se llama darDetalles donde informes Marca, Modelo, Motor y Puertas. Ejemplo Audi A3 1.6 (3 puertas)
// Crear un Método que se llame darVelocidad donde informe la velocidad expresados en km/h. Ejemplo: 250 km/h
// Crear un Método que se llame darAceleración donde informa la aceleración expresados en segundos. 0-100 en 7 segundos.
// Crear pruebas del modelo para verificar si cumple lo solicitado

