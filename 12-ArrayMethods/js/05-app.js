const carrito = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500 },
    { nombre: 'Televisión', precio: 100 },
    { nombre: 'Tablet', precio: 200 },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Celular', precio: 700 },
]

let resultado;


carrito.forEach(producto => {
    if(producto.nombre === "Tablet") resultado = producto;
})

console.log(resultado);

resultado = carrito.find(producto => producto.precio === 100)
