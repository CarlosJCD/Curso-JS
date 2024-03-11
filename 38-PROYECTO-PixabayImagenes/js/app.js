import { formBuscarImagenes, inputBusqueda, desplegarAlertaDeErrorDelFormulario } from "./modules/vistaHTML.js";
import { validarBusquedaDeImagenes } from "./modules/validacion.js";

document.addEventListener("DOMContentLoaded", ()=>{
     formBuscarImagenes.addEventListener("submit", evento => {
        evento.preventDefault();

        const terminoBusqueda = inputBusqueda.value;

        const respuestaValidacionTerminoBusqueda = validarBusquedaDeImagenes(terminoBusqueda)

        if(!respuestaValidacionTerminoBusqueda.ok){
            desplegarAlertaDeErrorDelFormulario(respuestaValidacionTerminoBusqueda.mensaje);
        }
     })
})