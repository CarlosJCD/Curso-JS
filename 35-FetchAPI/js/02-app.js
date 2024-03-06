const btnCargarJSONObjeto = document.getElementById("cargarJSON");

btnCargarJSONObjeto.onclick = imprimirEnConsolaObjetoJSON;

function imprimirEnConsolaObjetoJSON(e){
    urlArchivoJSON = 'data/empleados.json'

    fetch(urlArchivoJSON).then(respuesta => respuesta.json()).then(datosJSON => mostrarHTML(datosJSON)).catch(error => console.log(error));
}

function mostrarHTML(empleados) {
    const contenido = document.getElementById('contenido');

    let html = '';

    empleados.forEach( empleado => {
        const { id, nombre, empresa, trabajo} = empleado;

        html += `
            <p>Empleado: ${nombre} </p>
            <p>ID: ${id} </p>
            <p>Empresa: ${empresa} </p>
            <p>Trabajo: ${trabajo} </p>
        `
    });

    contenido.innerHTML = html;
    
}