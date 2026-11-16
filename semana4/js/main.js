// Ejercicio #1
// Crear un Array donde vamos a cargar manualmente 5 productos (nombre) e informar el total de productos cargados y los nombres de cada uno de ellos

// v1 - Marcos Nuñez => APROBADO
/* let productos = ["Teclado mecánico", "Mouse inalámbrico", "Monitor 24 pulgadas", "Auriculares gamer", "Alfombrilla XL"];
console.log(`Total de productos cargados: ${productos.length}`);
console.log("Listado de productos:");
for (let i = 0; i < productos.length; i++) {
    console.log(`- Producto ${i + 1}: ${productos[i]}`);
} */

// v2 - Marcos Nuñez => APROBADO
/* let productos = [];
for (let i = 0; i < 5; i++) {
    let nombreProducto = prompt(`Ingresa el nombre del producto ${i + 1} de 5:`);
   
   
    if (nombreProducto && nombreProducto.trim() !== "") {
        productos.push(nombreProducto.trim());
    } else {
        alert("Por favor, ingresa un nombre válido.");
        i--; // Repetir la iteración si el dato fue inválido
    }
}

console.log(`Total de productos cargados: ${productos.length}`);
console.log("Listado de productos:");
for (let i = 0; i < productos.length; i++) {
    console.log(`- Producto ${i + 1}: ${productos[i]}`);
} */

// v3 - Tomas Occhiuto => (USANDO FUNCIONES) => APROBADO
/* function cargarProductos() {
    const productos = [];
    
    productos.push("Teclado Mecánico");
    productos.push("Mouse Gamer");
    productos.push("Auriculares Inalámbricos");
    productos.push("Monitor 24\"");
    productos.push("Alfombrilla XL");
    return productos;
}
function informarProductos(productos) {
    const total = productos.length;
    
    console.log(`Total de productos cargados: ${total}`);
    console.log("Nombres de los productos:");
    
    productos.forEach((producto, indice) => {
        console.log(`- [${indice + 1}] ${producto}`);
    });
}
const listaProductos = cargarProductos();
informarProductos(listaProductos); */

// v4 - Tomas Occhiuto => (USANDO FUNCIONES, CARGAR MANUALMENTE LOS PRODUCTOS, QUE NO SEAN 5... QUE SEAN LOS QUE YO QUIERA) => 
/* function cargarProductos() {
    const productos = [];
    let continuar = true;

    while (continuar) {
        let producto = true;
        
        while (producto) {
            producto = prompt("Ingrese el Nombre del Producto:");

            if (!producto) {
                break;
            }

            productos.push(producto);

            if (producto.length > 0) {
                break;
            }
        }

        continuar = confirm("Desea agregar más productos?");
    }
    
    return productos;
}
function informarProductos(productos) {
    const total = productos.length;
    
    console.log(`Total de productos cargados: ${total}`);
    console.log("Nombres de los productos:");
    
    productos.forEach((producto, indice) => {
        console.log(`- [${indice + 1}] ${producto}`);
    });
}
const listaProductos = cargarProductos();
informarProductos(listaProductos); */

// v4 - Tomas Occhiuto => (USANDO FUNCIONES, CARGAR MANUALMENTE LOS PRODUCTOS, QUE NO SEAN 5... QUE SEAN LOS QUE YO QUIERA) => 
/* function cargarProductos() {
    const productos = [];
    let respuesta = prompt("¿Deseas cargar productos? (si/no)")
    
    while (respuesta === "si") {
        let nombreProducto = prompt("Ingresa el nombre del producto:");
        
        if (nombreProducto && nombreProducto.trim() !== "") {
            productos.push(nombreProducto.trim());
        } else {
            alert("El nombre no puede estar vacío.");
        }
        
        respuesta = prompt("¿Deseas cargar otro producto? (si/no)")

        if (respuesta) {
            respuesta = respuesta.toLowerCase().trim();
        } else {
            respuesta = "no";
        }
    }
    
    return productos;
}
function informarProductos(productos) {
    const total = productos.length;
    
    console.log(`Total de productos cargados: ${total}`);
    console.log("Nombres de los productos:");
    
    productos.forEach((producto, indice) => {
        console.log(`- [${indice + 1}] ${producto}`);
    });
}
const listaProductos = cargarProductos();
informarProductos(listaProductos); */


// v6 Julian Compierchio
/* function productCharge() {
    const products = [];
    let a = -1
    do {
        products.push(prompt(`Ingrese el nombre del producto núm : ${a + 2}`));
        a++;
        console.log(a);
    }
    while (products[a] !== null);
    products.pop();
    return products;
}
function informarProductos(productos) {
    const total = productos.length;
    
    console.log(`Total de productos cargados: ${total}`);
    console.log("Nombres de los productos:");
    
    productos.forEach((producto, indice) => {
        console.log(`- [${indice + 1}] ${producto}`);
    });
}
const listaProductos = productCharge();
informarProductos(listaProductos); */


// Multiarrays => Array dentro de un Array => múltiples dimensiones
//const productos = ["zapatillas", "remeras", "pantalones"]; // 1 dimensión
/* const productos = [["zapatillas", 150000], ["remera", 15000], ["jogger", 75000]];
console.log(productos[1]);
console.log(productos[1][0] + " $" + productos[1][1]); */

/* const persona = ["nombre", "apellido", "dni", "email", "telefono", "celular"];
const personas = [
    ["Tomas", "Occhiuto", 11222333, "tomas.oc@gmail.com", null, 112223333444],
    ["Julian", "Compierchio", 11222333, "juli.comp@gmail.com", null, 112223333444],
    ["Antonella", "Figueira", 11222333, "anto.figueira@gmail.com", null, 112223333444]
]
const personas2 = [
    ["Tomas", "Occhiuto", 11222333, ["tomas.oc@gmail.com", 1161812254, 112223333444]],
    ["Julian", "Compierchio", 11222333, ["juli.comp@gmail.com"], null, null],
    ["Antonella", "Figueira", 11222333, ["anto.figueira@gmail.com", null, 112223333444]]
]

console.log(personas);
console.log(personas[2][3]);
console.log(personas2);
console.log("Email: " + personas2[0][3][0]); */


// Cargar Productos con Nombre y Precio e Informar todos los productos agregados y el total a pagar
/* function cargarProductos() {
    const productos = [];
    let respuesta = prompt("¿Deseas cargar productos? (si/no)")
    
    while (respuesta === "si") {
        let nombreProducto = prompt("Ingresa el nombre del producto:");
        
        if (nombreProducto && nombreProducto.trim() !== "") {
            
        } else {
            alert("El nombre no puede estar vacío.");
        }

        let precioProducto = prompt("Ingresa el precio del producto:");
        
        if (precioProducto && precioProducto.trim() !== "") {

        } else {
            alert("El nombre no puede estar vacío.");
        }

        const producto = [nombreProducto, precioProducto];
        console.log(producto);
        productos.push(producto); // pushear un array con nombre y precio
        
        respuesta = prompt("¿Deseas cargar otro producto? (si/no)")

        if (respuesta) {
            respuesta = respuesta.toLowerCase().trim();
        } else {
            respuesta = "no";
        }
    }
    
    return productos;
}
function informarProductos(productos) {
    const total = productos.length;
    let suma = 0;
    
    console.log(`Total de productos cargados: ${total}`);
    console.log("Nombres de los productos:");
    
    productos.forEach((producto, indice) => {
        console.log(`- [${indice + 1}] ${producto[0] + " $" + producto[1]}`);
        //suma = suma + parseFloat(producto[1]);
        suma += parseFloat(producto[1]); // es equivalente
    });

    console.log("El total a pagar es $" + suma);
    
}
const listaProductos = cargarProductos();
informarProductos(listaProductos); */

// Crear un array donde van a ingresar manualmente valores numericos. Informar el total de elementos y la suma total. En caso de no haber productos informar: "No hay productos". Encapsular todo en funciones.

// Julian Compierchio => OK
/* function productCharge() {
    const products = [];
    let a = 0;
    let productName;
    let productPrice;
    do {
        productName = prompt(`Ingrese el nombre del producto núm: ${a + 1}`);
        if (productName === null || productName.trim() === "") {
            break;
        }
        productPrice = prompt(`Ingrese el precio del producto núm: ${a + 1}`);
        if (productPrice === null) {
            break;
        }
        if (isNaN(Number(productName)) && productPrice.trim() !== ""
            && !isNaN(Number(productPrice))) {
            products[a] = [productName.trim(), parseFloat(productPrice)];
            a++;
        } else if (productName.trim() === "" || !isNaN(Number(productName))) {
            alert("Ingrese un nombre válido para el producto, no puede estar vacío ni ser un número.");
        } else if (productPrice.trim() === "" || isNaN(Number(productPrice))) {
 alert("Ingrese un precio válido para el producto, no puede estar vacío ni ser una letra.");
        }
    } while (productName !== null && productName.trim() !== "");
    return products;
}
function showProducts(products) {
    let i = 0;
    let totalPrice = 0;
    for (const product of products) {
        if (product[0][0] === undefined) {
            alert("No hay productos");
        }
        alert(`Producto N°[${i + 1}] ${products[i][0]} - Precio: $${products[i][1]}`);
        totalPrice += products[i][1];
        i++;
    }
    alert(`Total a pagar: $${totalPrice}`);
}
const listaProductos = productCharge();
showProducts(listaProductos); */

// Marcos Nuñez => OK
/* function analizarValores(valores) {
   
   
    if (valores.length === 0) {
        console.log("No hay productos");
        return;
    }
   
    let totalElementos = valores.length;
   
    let sumaTotal = 0;
    // for (let i = 0; i < valores.length; i++) {
        //sumaTotal += valores[i];
    //} 
    for (const valor of valores) {
        sumaTotal += valor;
    }
    console.log(`Total de elementos: ${totalElementos}`);
    console.log(`Suma total: ${sumaTotal}`);
}
console.log("--- Prueba con elementos ---");
let preciosProductos = [1500, 3200, 850, 4200, 1200, 5000];
analizarValores(preciosProductos);
console.log("\n--- Prueba sin elementos ---");
let carritoVacio = [];
analizarValores(carritoVacio); */


// Cargar Productos a un Carrito de Compras
// Si un Producto es Juego y un otro Producto es Consola, aplicar 30% de Descuento en el total de la Compra
// Informar los Productos agregados, el total a pagar y el descuento aplicado

// TIP
// Crearse un array de productos (4 o 5)
// Crear un array de carrito de compra (vacío)


// ID, NOMBRE, APELLIDO, DNI, TELEFONO, EMAIL
/* 1, JUAN, PEREZ, 11222333, 11222333444, null
1, JOSE, PEREZ, 11222333, null, null
1, JHOSE, PEREZ, AA, null, null
1, JHOSE, PEREZ, BB, null, null */
