let usuario = prompt("Bienvenido a Main Fundas! Escriba CONTINUAR para seleccionar su funda preferida")


if (usuario === "CONTINUAR") {
    alert ("Bienvenido!")
} else {
    alert ("Por favor escriba CONTINUAR")
} 

let fundaUno = prompt("Funda TPU brillo: valor $1000. Escriba AGREGAR para agregar el producto al carrito")

if (fundaUno === "AGREGAR") {
    alert ("Producto agregado al carrito!")
} else {
    alert ("Por favor escriba AGREGAR")
}

let fundaDos = prompt("Funda Silicona: valor $1000. Escriba AGREGAR para sumar el segundo producto al carrito")

if (fundaDos === "AGREGAR") {
    alert ("Producto agregado al carrito!")
} else {
    alert ("Por favor escriba AGREGAR")
}


function suma (producto1, producto2) {
    console.log(producto1 + producto2);
}

suma(1000,1000);
alert("El total de su compra es $2000")
