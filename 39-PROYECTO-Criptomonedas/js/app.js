import API from "./modules/API.js";
import validaciones from "./modules/validaciones.js";
import vistaHTML from "./modules/vistaHTML.js";


document.addEventListener("DOMContentLoaded", ()=>{
    API.obtenerOpcionesCriptomonedas().then(criptomonedas => vistaHTML.deplegarOpcionesCriptomonedas(criptomonedas))

    vistaHTML.formCotizarCriptomoneda.addEventListener("submit", evento =>{
        evento.preventDefault();
        
        console.log();
        const camposFormularioCotización = {
            moneda: vistaHTML.selectMoneda.value,
            criptomoneda: vistaHTML.selectCriptoMoneda.value
        }

        const respuestaValidacionFormularioCriptomoneda = validaciones.validarCamposFormularioCotizacion(camposFormularioCotización);
    
        if(!respuestaValidacionFormularioCriptomoneda.ok){
            vistaHTML.deplegarAlertaError(respuestaValidacionFormularioCriptomoneda.mensaje);
            return
        }

        console.log(camposFormularioCotización);
        
    })
})