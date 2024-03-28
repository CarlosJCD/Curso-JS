import { formBuscarImagenes, inputBusqueda, desplegarAlertaDeErrorDelFormulario, desplegarImagenes, desplegarPaginacion } from "./modules/vistaHTML.js";
import { validarBusquedaDeImagenes } from "./modules/validacion.js";
import { buscarImagenesDelTerminoDeBusqueda } from "./modules/API.js";



document.addEventListener("DOMContentLoaded", ()=>{
     formBuscarImagenes.addEventListener("submit", evento => {
        evento.preventDefault();

        const terminoBusqueda = inputBusqueda.value;

        const respuestaValidacionTerminoBusqueda = validarBusquedaDeImagenes(terminoBusqueda)

        if(!respuestaValidacionTerminoBusqueda.ok){
            desplegarAlertaDeErrorDelFormulario(respuestaValidacionTerminoBusqueda.mensaje);
            return;
        }

        buscarImagenesDelTerminoDeBusqueda(terminoBusqueda).then(respuestaImagenes => {
            desplegarImagenes(respuestaImagenes.hits);

            
            desplegarPaginacion(respuestaImagenes.totalHits);


        });
     })
})