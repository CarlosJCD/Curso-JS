const btnCargarDesdeTXT = document.getElementById("cargarTxt");

btnCargarDesdeTXT.addEventListener("click", cargarDatosDelTxT);

function cargarDatosDelTxT(evento) {
    const urlArchivoDeTexto = 'data/datos.txt'
    fetch(urlArchivoDeTexto).then(respuesta => respuesta.text()).then(infoArchivo => {console.log(infoArchivo)})
}