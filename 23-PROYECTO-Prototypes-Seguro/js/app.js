const AÑO_ACTUAL = new Date().getFullYear()
const AÑO_MINIMO = AÑO_ACTUAL - 20;

const CLASES_CSS_ALERTA_ERROR = "mensaje mt-10 error";
const CLASES_CSS_ALERTA_ÉXITO = "mensaje mt-10 correcto"

const COTIZACIÓN_BASE = 2000;

const ID_MARCA_AMERICANO = "1";
const ID_MARCA_EUROPEO = "2";
const ID_MARCA_ASIÁTICO = "3";


const MODIFICADOR_MARCA_AMERICANO = 1.15;
const MODIFICADOR_MARCA_EUROPEO =  1.05;
const MODIFICADOR_MARCA_ASIÁTICO = 1.35;

const SEGURO_BÁSICO = "basico";
const SEGURO_COMPLETO = "completo";

const MODIFICADOR_SEGURO_BÁSICO = 1.30;
const MODIFICADOR_SEGURO_COMPLETO = 1.50;




function SeguroAuto(marca, año, tipoDeSeguro) {
    this.marca = marca;
    this.año = año;
    this.tipoDeSeguro = tipoDeSeguro;
}

SeguroAuto.prototype.obtenerCotizaciónSeguro = function() {
    const {marca, año, tipoDeSeguro} = this;

    let cotización = cotizarPorMarca(marca);

    cotización -= obtenerDescuentoPorAños(año, cotización);

    cotización = aplicarCostoPorTipoDeSeguro(tipoDeSeguro, cotización);

    return cotización;
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
     for(let añoActual = AÑO_ACTUAL; añoActual >= AÑO_MINIMO; añoActual--){
        const optionAño = document.createElement("option")
        optionAño.textContent = añoActual;

        this.selectAño.appendChild(optionAño);
    }
}

VistaHTML.prototype.desplegarAlerta = function( mensajeDeAlerta, tipoDeAlerta = "error" ){

    const divMensajeDeAlerta = document.createElement("div");

    tipoDeAlerta === "error" ? divMensajeDeAlerta.setAttribute("class",CLASES_CSS_ALERTA_ERROR) : divMensajeDeAlerta.setAttribute("class",CLASES_CSS_ALERTA_ÉXITO) 

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

    let seguro = new SeguroAuto(marca, año, tipoDeSeguro);
    
    console.log(seguro.obtenerCotizaciónSeguro());
})


function cotizarPorMarca(marcaAuto) {
    let cotización;

    switch (marcaAuto) {
        case ID_MARCA_AMERICANO:
            cotización = COTIZACIÓN_BASE * MODIFICADOR_MARCA_AMERICANO;
            break;
        case ID_MARCA_EUROPEO:
            cotización = COTIZACIÓN_BASE * MODIFICADOR_MARCA_EUROPEO;
            break;

        case ID_MARCA_ASIÁTICO:
            cotización = COTIZACIÓN_BASE * MODIFICADOR_MARCA_EUROPEO;
            break;
        default:
            cotización = COTIZACIÓN_BASE;
            break;
    }
    return cotización;
}

function obtenerDescuentoPorAños(añoAuto, cotización){
    const diferenciaEnAños =  (AÑO_ACTUAL - añoAuto) * 3 ;
    const descuentoPorAño = ( diferenciaEnAños  * cotización ) / 100;

    return descuentoPorAño;
}

function aplicarCostoPorTipoDeSeguro(tipoDeSeguro, cotización) {
    let cotizaciónNueva;
    switch (tipoDeSeguro) {
        case SEGURO_BÁSICO:
            cotizaciónNueva = cotización * MODIFICADOR_SEGURO_BÁSICO;
            break;
        case SEGURO_COMPLETO:
            cotizaciónNueva = cotización * MODIFICADOR_SEGURO_COMPLETO;
            break;
        default:
            cotizaciónNueva = cotización;
            break;
    }
    return cotizaciónNueva;
}