import API from "./modules/API.js";
import validaciones from "./modules/validaciones.js";
import vistaHTML from "./modules/vistaHTML.js";


document.addEventListener("DOMContentLoaded", ()=>{
    cargarOpcionesCriptomonedas()

    vistaHTML.formCotizarCriptomoneda.addEventListener("submit", procedimientoConsultarCotizacion)
})

async function cargarOpcionesCriptomonedas() {
    const opcionesCriptomonedas = await API.obtenerOpcionesCriptomonedas();
    vistaHTML.deplegarOpcionesCriptomonedas(opcionesCriptomonedas)
    
}

async function procedimientoConsultarCotizacion(evento) {
    evento.preventDefault();

    const camposFormularioCotización = {
        moneda: vistaHTML.selectMoneda.value,
        criptomoneda: vistaHTML.selectCriptoMoneda.value
    }

    const respuestaValidacionFormularioCriptomoneda = validaciones.validarCamposFormularioCotizacion(camposFormularioCotización);

    if(!respuestaValidacionFormularioCriptomoneda.ok){
        vistaHTML.deplegarAlertaError(respuestaValidacionFormularioCriptomoneda.mensaje);
        return
    }

    vistaHTML.desplegarSpinner();
    
    const cotizacion = await API.consultarCotizacion(camposFormularioCotización);
    vistaHTML.desplegarCotización(cotizacion)
}