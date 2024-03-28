/**
 * In mathematics and computer science, a higher-order function (HOF) is a function that does at least one of the following:
 *      - takes one or more functions as arguments (i.e. a procedural parameter, which is a parameter of a procedure that is itself a procedure),
 *      - returns a function as its result.
 * 
 * All other functions are first-order functions. 
 */

const carrito = [
    { nombre: 'Monitor 20 Pulgadas', precio: 500},
    { nombre: 'Televisión 50 Pulgadas', precio: 700},
    { nombre: 'Tablet', precio: 300},
    { nombre: 'Audifonos', precio: 200},
    { nombre: 'Teclado', precio: 50},
    { nombre: 'Celular', precio: 500},
    { nombre: 'Bocinas', precio: 300},
    { nombre: 'Laptop', precio: 800},
];

const mayorA500 = precio => precio > 500;

const productosPremium = carrito.filter( producto => mayorA500(producto.precio) );

console.log(productosPremium);
