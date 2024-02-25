const idProductos = new WeakMap();

const producto = {
    nombre: "Laptop",
    precio: 159
}

idProductos.set(producto, Date.now())

console.log(idProductos);

console.log(idProductos.has(producto));
console.log(idProductos.get(producto));
console.log(idProductos.delete(producto));

console.log(idProductos);