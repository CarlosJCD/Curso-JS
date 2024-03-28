const btnCargarJSONObjeto = document.getElementById("cargarJSON");

btnCargarJSONObjeto.onclick = imprimirEnConsolaObjetoJSON;

function imprimirEnConsolaObjetoJSON(e){
    urlArchivoJSON = 'data/empleado.json'

    fetch(urlArchivoJSON).then(respuesta => respuesta.json()).then(datosJSON => mostrarHTML(datosJSON)).catch(error => console.log(error));
}

function mostrarHTML(empleados){
    const contenido = document.getElementById('contenido');
    const { id, nombre, empresa, trabajo} = empleado;

    contenido.innerHTML = `
        <p>Empleado: ${nombre} </p>
        <p>ID: ${id} </p>
        <p>Empresa: ${empresa} </p>
        <p>Trabajo: ${trabajo} </p>
    `
        
}