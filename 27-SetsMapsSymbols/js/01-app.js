const carrito = new Set();

carrito.add("producto1")
carrito.add("producto2")
carrito.add("producto2")
carrito.add("producto3")

console.log(carrito);

console.log(carrito.size);

console.log(carrito.has("producto2"));

carrito.delete("producto3")

console.log(carrito);

carrito.forEach(producto => console.log(producto))