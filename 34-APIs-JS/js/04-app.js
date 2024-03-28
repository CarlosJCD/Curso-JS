const btnAbrirPantallaCompleta = document.getElementById("abrir-pantalla-completa");
const btnCerrarPantallaCompleta = document.getElementById("salir-pantalla-completa");

btnAbrirPantallaCompleta.onclick = abrirPantallaCompleta;
btnCerrarPantallaCompleta.onclick = cerrarPantallaCompleta;

function abrirPantallaCompleta(e) {
    document.documentElement.requestFullscreen();
}

function cerrarPantallaCompleta(e) {
    document.exitFullscreen()
}