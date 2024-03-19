import VistaHTMLFormularioCliente from "./modules/VistaHTMLFormularioCliente.js";
import { validarCliente } from "./modules/validaciones.js";
import API from "./modules/API.js";

VistaHTMLFormularioCliente.formCliente.addEventListener("submit", evento => {
    evento.preventDefault();

    const clienteNuevo = {
        nombre: VistaHTMLFormularioCliente.inputNombreCliente.value,
        email: VistaHTMLFormularioCliente.inputCorreoCliente.value,
        telefono: VistaHTMLFormularioCliente.inputTelefonoCliente.value,
        empresa: VistaHTMLFormularioCliente.inputEmpresaCliente.value
    }

    const respuestaValidacion = validarCliente(clienteNuevo);

    if(respuestaValidacion.ok){
        registrarCliente(clienteNuevo)
        
    } else{
        VistaHTMLFormularioCliente.desplegarAlertaError(respuestaValidacion.mensaje);
    }
})

/**
 * 
 * @param {Object} datosClienteNuevo 
 * @param {string} datosClienteNuevo.nombre 
 * @param {string} datosClienteNuevo.email
 * @param {string} datosClienteNuevo.telefono
 * @param {string} datosClienteNuevo.empresa
 */
async function registrarCliente(datosClienteNuevo) {
    datosClienteNuevo.id = `${Date.now()}`;

    const respuestaRegistrarCliente = await API.registrarClienteNuevo(datosClienteNuevo);
    
    if(respuestaRegistrarCliente.ok){
        VistaHTMLFormularioCliente.desplegarAlertaExito("Cliente registrado exitosamente");
        VistaHTMLFormularioCliente.formCliente.reset();

        setTimeout(() => {
            window.location.href = "index.html";
        }, 3000);
    } else{
        VistaHTMLFormularioCliente.desplegarAlertaError("Ha ocurrido un error registrando el cliente, por favor intentelo mas tarde.");
    }

    

}

