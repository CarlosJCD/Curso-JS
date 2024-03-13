import vistaHTML from "./modules/vistaHTML.js";
import validacion from "./modules/validacion.js";
import api from "./modules/api.js";
import pedido from "./modules/pedido.js";

document.addEventListener("DOMContentLoaded", ()=>{
    
    vistaHTML.buttonGuardarCliente.addEventListener("click", evento => {

        const respuestaValidaciónCliente = validacion.validarCliente(cliente);
        
        if(! respuestaValidaciónCliente.Ok){
            vistaHTML.desplegarAlertaError(respuestaValidaciónCliente.mensaje)
        } else {
            pedido.establecerMesa(vistaHTML.inputMesa.value);
            pedido.establecerHora(vistaHTML.inputHora.value);
            
            vistaHTML.cerrarModal();
            vistaHTML.mostrarSeccionesDeLaPagina();

            api.obtenerPlatillos().then(platillos => vistaHTML.desplegarPlatillos(platillos));
        }

    });
})