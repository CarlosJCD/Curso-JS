const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio'];

const carrito = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500 },
    { nombre: 'Televisión', precio: 100 },
    { nombre: 'Tablet', precio: 200 },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Celular', precio: 700 },
]

meses.forEach((mes)=>{
    if(mes==="Enero") console.log("Enero Existe");
});

const eneroExiste = meses.includes ("Enero");

if(eneroExiste) console.log("Enero Existe!");


const productoExiste = carrito.some(producto => producto.nombre === "Celular")

console.log(productoExiste);

const febreroExiste = meses.some(mes => mes === "Febrero")

console.log(febreroExiste );