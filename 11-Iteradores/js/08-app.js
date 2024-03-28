const producto = {
    nombre: 'Monitor', precio: 500
}

for(let propiedad in producto){
    console.log(`${producto[propiedad]}`);
}


for(let [llave, valor] of Object.entries(producto)){
    console.log(valor);
}