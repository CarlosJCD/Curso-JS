const MAX_AÑO = new Date().getFullYear()
const MIN_AÑO = MAX_AÑO - 20;

function seguroAuto(marca, año, tipo) {
    this.marca = marca;
    this.año = año;
    this.tipo = tipo;
}

function VistaHTML() {
    this.formulario = document.getElementById("cotizar-seguro");
    this.selectMarca = document.getElementById("marca")
    this.selectAño = document.getElementById("year");
}

VistaHTML.prototype.obtenerInputRadioDelTipoDeSeguro = function() {
    return document.querySelector("input[name='tipo']:checked")
}

VistaHTML.prototype.cargarSelectAños = function() {
     for(let añoActual = MAX_AÑO; añoActual >= MIN_AÑO; añoActual--){
        const optionAño = document.createElement("option")
        optionAño.textContent = añoActual;

        this.selectAño.appendChild(optionAño);
    }
}

let vista = new VistaHTML();

document.addEventListener("DOMContentLoaded", () => {
    vista.cargarSelectAños();
})

vista.formulario.addEventListener("submit", evento =>{
    evento.preventDefault();

    const marca = vista.selectMarca.value;
    const año = vista.selectAño.value;
    const tipoDeSeguro = vista.obtenerInputRadioDelTipoDeSeguro().value;

    if(!marca || !año || !tipoDeSeguro){
        console.log("No pasa validación");
    }
})

