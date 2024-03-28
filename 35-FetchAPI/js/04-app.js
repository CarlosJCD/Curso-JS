const btnCargarAPI = document.getElementById("cargarAPI");

btnCargarAPI.onclick = obtenerDatosAPI;

function obtenerDatosAPI(e) {
    const urlAPI = 'https://picsum.photos/list';

    fetch(urlAPI).then(respuesta => respuesta.json()).then(datosJSON => mostrarHTML(datosJSON)).catch(error => console.log(error))
}

function mostrarHTML(datos){
    
    const contenido = document.querySelector('#contenido');

    let html = '';

    datos.forEach( perfil => {
        const { author, post_url } = perfil;

        html += `
            <p>Autor: ${author} </p>
            <a href="${post_url}" target="_blank">Ver Imagen</a>
        `
    });

    contenido.innerHTML = html;
    
}