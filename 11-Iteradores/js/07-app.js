const carrito = [
    {nombre: 'Monitor', precio: 500},
    {nombre: 'Escritorio', precio: 150},
    {nombre: 'Mouse', precio: 35},
    {nombre: 'PC gamer', precio: 419},
    {nombre: 'Lampara de mesa', precio: 275}
]

for(let producto of carrito){
    console.log(`Producto: ${producto.nombre} Precio: ${producto.precio}`);
}