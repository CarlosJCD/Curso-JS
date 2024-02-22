const MAX_AÑO = new Date().getFullYear()
const MIN_AÑO = MAX_AÑO - 20;

const selectAño = document.getElementById("year");

function seguroAuto(marca, año, tipo) {
    this.marca = marca;
    this.año = año;
    this.tipo = tipo;
}

function VistaHTML() {}

VistaHTML.prototype.cargarSelectAños = () => {
     for(let añoActual = MAX_AÑO; añoActual >= MIN_AÑO; añoActual--){
        const optionAño = document.createElement("option")
        optionAño.textContent = añoActual;

        selectAño.appendChild(optionAño);
    }
}

let vista = new VistaHTML();

document.addEventListener("DOMContentLoaded", () => {
    vista.cargarSelectAños();
})

