
const contenedorResultadoBusqueda = document.getElementById("resultado");

const selectAños = document.getElementById("year");

const MAX_YEAR = new Date().getFullYear();
const MIN_YEAR = MAX_YEAR - 10;


document.addEventListener("DOMContentLoaded", event => {
    desplegarResultadoBúsqueda(autos)
    cargarFiltroAños();
})


function desplegarResultadoBúsqueda(autosFiltrados) {
    autosFiltrados.forEach(auto => {
        const {marca, modelo, year, precio, puertas, color, transmision} = auto;

        const registroAutoHTML = document.createElement("p");

        registroAutoHTML.innerText = `
        ${marca} - ${modelo} - ${year} - ${puertas} Puertas - Transmisión: ${transmision} - Precio: ${precio} - Color: ${color}
        `;
        
        contenedorResultadoBusqueda.appendChild(registroAutoHTML);
    });
}

function cargarFiltroAños(){
    for(let i = MAX_YEAR; i >= MIN_YEAR; i--){
        const añoOption = document.createElement("option");
        
        añoOption.value = i;
        añoOption.textContent = i;

        selectAños.appendChild(añoOption)

    }
}