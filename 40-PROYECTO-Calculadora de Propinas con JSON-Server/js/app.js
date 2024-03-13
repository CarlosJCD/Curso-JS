import vistaHTML from "./modules/vistaHTML.js";
import validacion from "./modules/validacion.js";

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
            vistaHTML.revelarSeccionesOcultas();
        }

    });
})