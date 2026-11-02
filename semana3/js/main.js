// Funciones
// Declarar una función sin parámetros y sin return
/* function saludar() {
    console.log("Hola a Todos!")
}

saludar(); // Sin paréntesis no se ejecuta la función */

// Declarar una función con parámetros y sin return
/* function saludar(nombre) {
    console.log("Hola, " + nombre)
}

saludar("Javier");
saludar("Sophia");
let name = prompt("Type your name:");
saludar(name);
saludar(prompt("Ingrese su Nombre:"));
saludar(123); */

// Solicitud de datos hasta 3 veces. Sino consigue los datos, corta el proceso
/* function saludar(nombre, apellido) {
    const INTENTOS = 3;

    for (let i=1; i<=INTENTOS; i++) { // iteracciones, ciclos, vueltas finito (un numero dado)
        if (!nombre || nombre == "") {
            nombre = prompt("Intento: #" + i + "\n" + "2- Ingrese su Nombre:")
        }
    
        if (!apellido || apellido == "") {
            apellido = prompt("Intento: #" + i + "\n" + "2- Ingrese su Apellido:")
        }
    }

    if (!nombre && !apellido) {
        alert("Sin los datos no puedo saludarte. Que tengas un buen día!");
    } else {
        alert("Hola, " + nombre + " " + apellido);
    }
} */

// Solicitud de datos eternamente, hasta que consiga datos
/* function saludar(nombre, apellido) {
    let i=1;

    while (!nombre || !apellido) {
        if (!nombre || nombre == "") {
            nombre = prompt("Intento: #" + i + "\n" + "2- Ingrese su Nombre:")
        }
    
        if (!apellido || apellido == "") {
            apellido = prompt("Intento: #" + i + "\n" + "2- Ingrese su Apellido:")
        }

        i++;
    }

    alert("Hola, " + nombre + " " + apellido);
} */

/* //saludar("Sophia", "Hacot");
//saludar("Sophia", "Hacot", "Buenos Aires", "Argentina");
//saludar("Sophia");
//saludar("");
//saludar();
//saludar();
let Nombre = prompt("1- Ingrese su Nombre");
let Apellido = prompt("1- Ingrese su Apellido");

saludar(Nombre, Apellido); */


// Función con parámetros y con return
/* function saludar(nombre, apellido) {
    if (!nombre || nombre == "") {
        nombre = prompt("Intento: #" + i + "\n" + "2- Ingrese su Nombre:")
    }

    if (!apellido || apellido == "") {
        apellido = prompt("Intento: #" + i + "\n" + "2- Ingrese su Apellido:")
    }

    if (!nombre && !apellido) {
        return "Sin los datos no puedo saludarte. Que tengas un buen día!";
    } else {
        return "Hola, " + nombre + " " + apellido;
    }
}

let mensaje = saludar("javier", "gimenez");
console.log(mensaje.toLowerCase());
alert(mensaje.toUpperCase());

function sumar(valor1, valor2) {
    return valor1 + valor2
}

let resultado = sumar(10, 20);
console.log("La suma es: " + resultado);

function potenciaPor2(numero) {
    return numero * numero
}

let resultado2 = potenciaPor2(8);
console.log("Potencia: " + resultado2); */


// Otra forma de Declarar funciones
// Opción #2: Funciones anónimas (no llevan nombre de función), convendria que esten asignadas a una constante
// Es una mala practica definir una función anónima bajo una variable, siempre deben ir en CONSTANTES
/* let saludar = function() {
    console.log("Hola a Todos!");
}

saludar = "hola" // pisamos la función por un string

//saludar(); //ejecutar la función
console.log(saludar); */

// Es buena práctica definir como CONSTATE porque no podes pisar la constante
/* const saludar = function() {
    console.log("Hola a Todos!");
}

//saludar = "hola"; // No se pude modificar la constante

saludar(); */

/* const saludar = function(nombre, apellido) {
    return "Hola, " + nombre + " " + apellido;
}

let resultado = saludar("Juan", "Perez");
console.log(resultado); */


// Opción #3: Funciones flecha o arrow functions, no se usa la palabra function se usa una =>
/* const saludar = () => {
    console.log("Hola a Todos!");
} */

/* const saludar = (nombre, apellido) => {
    return "Hola, " + nombre + " " + apellido;
}

let resultado = saludar("Juan", "Perez");
console.log(resultado); */


// Funcion que llama a varias funciones
/* const bienvenida = (nombre) => {
    salida("Hola, " + nombre);
}

const pregunta = (nombre) => {
    let mensaje = "Cómo estás, " + nombre + "?";
    salida(mensaje);
}

const despedida = (nombre) => {
    let texto = "Que tengas un buen día, ";
    salida(texto + nombre + "!");
}

const salida = (texto) => {
    console.log(texto);
}

const saludar = (name) => {
    bienvenida(name);
    pregunta(name);
    despedida(name);
}

saludar("Sophia");
saludar("Anto");
saludar("Bruno");
saludar("Fabianny"); */

/* saludar("Sophia");
saludar("Anto");
saludar("Bruno");
saludar("Fabianny");
console.log("hola");
alert(sumar(20, 50)); */


// Scope (ambito de la variable)
// Ejemplo #1 => variable global
/* let numero = 100; // Una variable global

const calculo = (valor) => {
    numero = numero + valor; // Modificar la variable global
    return numero;
}

const resultado = calculo(20);
alert("El resultado es: " + resultado); //120
alert("El valor de la variable número es: " + numero); //120 */

// Ejemplo #2 => varible local
/* let numero = 100; // Una variable global

const calculo = (valor) => {
    let numero = 100; // => variable local (solamente puedo acceder dentro de la función)
    numero = numero + valor; // Modificar la variable local
    console.log(numero);
    return numero;
}

numero = 50; // Modificar la variable global, a la variable local no la modifique
const resultado = calculo(20);
alert("El resultado es: " + resultado); //120
alert("El valor de la variable número es: " + numero); //100 */


