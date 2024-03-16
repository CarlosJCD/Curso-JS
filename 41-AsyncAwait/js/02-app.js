function descargarClientes() {
    return new Promise((resolve, reject) => {
        const error = true;

        setTimeout( () => {
            if(!error) {
                resolve('El Listado de Clientes se descargo correctamente'); 
            } else {
                reject('No se pudo aplicar el descuento');
                
            }            
        }, 3000);

    });
}


async function ejecutar() {
    try {
        const respuesta = await descargarClientes(); // Deten la ejecución hasta que sea ejecutado...
        console.log(respuesta);
    } catch (error) {
        console.log(error)
    }

}
ejecutar();

console.log(2+2);