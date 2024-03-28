
document.addEventListener('DOMContentLoaded', obtenerDatos);

async function obtenerDatos() {
    try {
        const resultado = await fetch('https://picsum.photos/list');
        const respuesta = await resultado.json();
        console.log(respuesta);
    } catch (error) {
        console.log(error);
    }

}