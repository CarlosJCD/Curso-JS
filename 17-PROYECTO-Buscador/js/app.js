
const contenedorResultadoBusqueda = document.getElementById("resultado");

document.addEventListener("DOMContentLoaded", event => {
    desplegarResultadoBúsqueda(autos)
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