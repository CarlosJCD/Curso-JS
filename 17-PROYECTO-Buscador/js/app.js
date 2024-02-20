
const contenedorResultadoBusqueda = document.getElementById("resultado");

const selectAños = document.getElementById("year");

const selectsFiltros = document.querySelectorAll("select");

const MAX_YEAR = new Date().getFullYear();
const MIN_YEAR = MAX_YEAR - 10;

const filtrosBúsqueda = {
    marca: "",
    year: "",
    maximo: "",
    minimo: "",
    puertas: "",
    transmision: "",
    color: ""
}

document.addEventListener("DOMContentLoaded", event => {
    desplegarResultadoBúsqueda(autos)
    cargarFiltroAños();
});


selectsFiltros.forEach(selectFiltro => {
    selectFiltro.addEventListener("change", event => {
        actualizarFiltrosBúsqueda(event.target);
    })
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

function actualizarFiltrosBúsqueda(selectFiltro){
    filtrosBúsqueda[selectFiltro.id] = selectFiltro.value;
    console.log(filtrosBúsqueda);
}