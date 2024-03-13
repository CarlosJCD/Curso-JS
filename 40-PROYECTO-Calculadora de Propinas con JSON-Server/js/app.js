import vistaHTML from "./modules/vistaHTML.js";
import validacion from "./modules/validacion.js";
import api from "./modules/api.js";

document.addEventListener("DOMContentLoaded", ()=>{
    
    vistaHTML.buttonGuardarCliente.addEventListener("click", evento => {
        const cliente = {
            mesa: vistaHTML.inputMesa.value,
            hora: vistaHTML.inputHora.value,
            pedidos: []
        }

        const respuestaValidaciónCliente = validacion.validarCliente(cliente);
        
        if(! respuestaValidaciónCliente.Ok){
            vistaHTML.desplegarAlertaError(respuestaValidaciónCliente.mensaje)
        } else {
            vistaHTML.cerrarModal();
            vistaHTML.mostrarSeccionesDeLaPagina();

            api.obtenerPlatillos().then(platillos => vistaHTML.desplegarPlatillos(platillos));
        }

    });
})