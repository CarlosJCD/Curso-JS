const MAX_AÑO = new Date().getFullYear()
const MIN_AÑO = MAX_AÑO - 20;

const CLASES_CSS_ALERTA_ERROR = "mensaje mt-10 error";
const CLASES_CSS_ALERTA_EXITO = "mensaje mt-10 correcto"

function SeguroAuto(marca, año, tipo) {
    this.marca = marca;
    this.año = año;
    this.tipo = tipo;
}


function VistaHTML() {
    this.contenedorContenido = document.getElementById("contenido");
    this.formulario = document.getElementById("cotizar-seguro");
    this.selectMarca = document.getElementById("marca")
    this.selectAño = document.getElementById("year");
    this.divResultado = document.getElementById("resultado");
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

VistaHTML.prototype.desplegarAlerta = function( mensajeDeAlerta, tipoDeAlerta = "error" ){

    const divMensajeDeAlerta = document.createElement("div");

    tipoDeAlerta === "error" ? divMensajeDeAlerta.setAttribute("class",CLASES_CSS_ALERTA_ERROR) : divMensajeDeAlerta.setAttribute("class",CLASES_CSS_ALERTA_EXITO) 

    divMensajeDeAlerta.textContent = mensajeDeAlerta;

    this.formulario.insertBefore(divMensajeDeAlerta, this.divResultado);

    setTimeout(() => {
        divMensajeDeAlerta.remove();
    }, 3000);
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
        vista.desplegarAlerta("Todos los campos son obligatorios");
        return;
    }

    vista.desplegarAlerta("Cotizando...", "éxito");
})

