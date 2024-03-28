import vistaHTML from "./modules/vistaHTML.js";
import validacion from "./modules/validacion.js";
import api from "./modules/api.js";
import pedido from "./modules/pedido.js";

document.addEventListener("DOMContentLoaded", ()=>{
    
    vistaHTML.buttonGuardarCliente.addEventListener("click", evento => {
        pedido.establecerMesa(vistaHTML.inputMesa.value);
        pedido.establecerHora(vistaHTML.inputHora.value);

        const respuestaValidaciónCliente = validacion.validarPedido(pedido.obtenerPedido());
        
        if(! respuestaValidaciónCliente.Ok){
            vistaHTML.desplegarAlertaError(respuestaValidaciónCliente.mensaje)
        } else {

            vistaHTML.cerrarModal();
            vistaHTML.mostrarSeccionesDeLaPagina();

            api.obtenerPlatillos().then(platillos => vistaHTML.desplegarPlatillos(platillos));
        }

    });
})