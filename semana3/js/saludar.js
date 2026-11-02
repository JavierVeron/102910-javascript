// Es una función flecha
const bienvenida = (nombre) => {
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

// Es una función tradicional
function salida(texto) {
    console.log(texto);
}

// Es una función anónima
const saludar = function(nombre) {
    bienvenida(nombre);
    pregunta(nombre);
    despedida(nombre);
}