
const contenedorResultadoBusqueda = document.getElementById("resultado");

const selectAños = document.getElementById("year");

const selectsFiltros = document.querySelectorAll("select");

const MAX_YEAR = new Date().getFullYear();
const MIN_YEAR = MAX_YEAR - 10;

const ATRIBUTOS_AUTO = Object.keys(autos[0]);

let filtrosBúsqueda = {
    marca: "",
    year: "",
    maximo: 0,
    minimo: 0,
    puertas: "",
    color: "",
    transmision: ""
}

document.addEventListener("DOMContentLoaded", event => {
    desplegarResultadoBúsqueda(autos)
    cargarFiltroAños();
});


selectsFiltros.forEach(selectFiltro => {
    selectFiltro.addEventListener("change", event => {
        actualizarFiltrosBúsqueda(event.target);
        aplicarFiltrosBúsqueda();
    })
})


function desplegarResultadoBúsqueda(autosFiltrados) {
   contenedorResultadoBusqueda.innerHTML = "";

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
}

function aplicarFiltrosBúsqueda() {
    const autosFiltrados = autos.filter(auto => {
        for(let atributoAuto of ATRIBUTOS_AUTO){
            if(atributoAuto === "precio"){
                if(filtrosBúsqueda["minimo"] && !precioCumpleValorMínimo(auto[atributoAuto])) return false;
    
                if(filtrosBúsqueda["maximo"] && !precioCumpleValorMáximo(auto[atributoAuto])) return false;
            } 
            if(filtrosBúsqueda[atributoAuto] && !atributoValido(auto[atributoAuto], atributoAuto)) return false;
        }
        return true
    });

    desplegarResultadoBúsqueda(autosFiltrados);
}

function atributoValido(valorAtributo, nombreAtributo) {
    return valorAtributo == filtrosBúsqueda[nombreAtributo];
}

function precioCumpleValorMínimo(precio) {
    return precio >= filtrosBúsqueda["minimo"];
}

function precioCumpleValorMáximo(precio) {
    return precio <= filtrosBúsqueda["maximo"];
}