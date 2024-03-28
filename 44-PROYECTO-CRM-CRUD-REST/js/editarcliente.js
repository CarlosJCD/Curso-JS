import API from "./modules/API.js";
import VistaHTMLFormularioCliente from "./modules/VistaHTMLFormularioCliente.js";
import { validarCliente } from "./modules/validaciones.js";


let idCliente;

document.addEventListener("DOMContentLoaded", ()=>{
    const urlSearchParams = new URLSearchParams(window.location.search);

    idCliente = parseInt(urlSearchParams.get("id"))
    if(idCliente){
        try{
            cargarInfoCliente(idCliente);
        } catch(error) {
            window.location.href = "index.html"
        }
    } else{
        window.location.href = "index.html"
    }
})

VistaHTMLFormularioCliente.formCliente.addEventListener("submit",evento => {
    evento.preventDefault();

    const clienteEditado = {
        id: idCliente,
        nombre: VistaHTMLFormularioCliente.inputNombreCliente.value,
        email: VistaHTMLFormularioCliente.inputCorreoCliente.value,
        telefono: VistaHTMLFormularioCliente.inputTelefonoCliente.value,
        empresa: VistaHTMLFormularioCliente.inputEmpresaCliente.value
    }

    const respuestaValidacion = validarCliente(clienteEditado);

    if(!respuestaValidacion.ok){
        VistaHTMLFormularioCliente.desplegarAlertaError(respuestaValidacion.mensaje);
        return;
    } 

    actualizarDatosCliente(clienteEditado);
})


async function cargarInfoCliente(idCliente){
    const cliente = await API.obtenerCliente(idCliente);
    VistaHTMLFormularioCliente.desplegarClienteEnELFormulario(cliente);
}

async function actualizarDatosCliente(cliente) {
    const respuestaActualizaciónCliente = await API.actualizarCliente(cliente);
    
    if (respuestaActualizaciónCliente.ok) {
        VistaHTMLFormularioCliente.desplegarAlertaExito("Cliente actualizado exitosamente");

        setTimeout(() => {
            window.location.href = "index.html";
        }, 3000);
    } else {
        VistaHTMLFormularioCliente.desplegarAlertaError(respuestaActualizaciónCliente.mensaje);
    }
}