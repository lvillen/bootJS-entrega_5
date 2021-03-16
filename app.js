const carrito = [{
        id: 198752,
        name: "Tinta DJ27 Color",
        price: 52.95,
        count: 3,
        premium: true
    },
    {
        id: 75621,
        name: "Impresora ticketera PRO-201",
        price: 32.75,
        count: 2,
        premium: true
    },
    {
        id: 54657,
        name: "Caja de rollos de papel para ticketera",
        price: 5.95,
        count: 3,
        premium: false
    },
    {
        id: 3143,
        name: "Caja de folios DIN-A4 80gr",
        price: 9.95,
        count: 2,
        premium: false
    }
];

// Mostrar una estructura de carrito de la compra.

//Listar todos los elementos
console.log("LISTAR ELEMENTOS POR CONSOLA")
function imprimir(item) {
    console.log("---------")
    for (propiedad in item) {
        console.log(propiedad + ": " + item[propiedad]);
    }
}

for (item of carrito) {
    imprimir(item);
}

console.log("///////////////")

// Eliminar un producto del carrito de la compra.
console.log("ELIMINAR PRODUCTOS")
function eraseId(productId) {
    for (i = 0; i < carrito.length; i++) {
        if (carrito[i].id === productId) {
            carrito.splice(i, 1);
        }
    }
    return carrito
}

eraseId(198752)

for (item of carrito) {
    imprimir(item);
}

//Calcular el total de la compra
console.log("CALCULAR EL TOTAL DE LA COMPRA")
let total = 0;

for (item of carrito) {
    total += item.price * item.count;
}

console.log("El total de su compra es: " + total)

//Filtrar los elementos que sean premium
console.log("FILTRAR ELEMENTOS PREMIUM")
for (item of carrito) {
    if (item.premium) imprimir(item)
}

//Productos prime, gastos de la compra gratis
console.log("SI TODOS LOS PRODUCTOS SON PREMIUM, FREE SHIPPING")

function freeShipping() {
    let premium = true;
    for (item in carrito) {
        if (!carrito[item].premium) {
            premium = false;
        }
    }
    if (premium === false) {
        console.log("Su pedido tiene gastos de envío");
    } else {
        console.log("Gastos de envío cero");
    }
    //carrito.some() > Guardar para ver
}

// function isPremium(item) {
//     return item.premium;
// }

freeShipping()

//Modificar el precio para aplicar un 5% si la compra es superior a 50
console.log("SI LA COMPRA SUPERA LOS 50€, 10% DESCUENTO")
function discount(total){
    if (total > 50) {
        total = total * 0.9;
        console.log("A su compra se le ha aplicado un descuento del 10%, quedando en: " + total);
    }
}

discount(total)