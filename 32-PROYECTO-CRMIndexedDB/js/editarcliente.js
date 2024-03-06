import VistaHTMLFormularioCliente from "./modules/VistaHTMLFormularioCliente.js";
import { actualizarRegistroCliente, obtenerClientePorId } from "./modules/database.js";
import { validarCliente } from "./modules/validaciones.js";

let idCliente;

document.addEventListener("DOMContentLoaded",()=>{
    const urlSearchParams = new URLSearchParams(window.location.search);

    idCliente = parseInt(urlSearchParams.get("id"))
    if(idCliente){
        obtenerClientePorId(idCliente).then(cliente=>{
            VistaHTMLFormularioCliente.desplegarClienteEnELFormulario(cliente);
        }).catch(() => {window.location.href = "index.html"})
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

    actualizarRegistroCliente(clienteEditado).then(() =>{
        VistaHTMLFormularioCliente.desplegarAlertaExito("Cliente actualizado exitosamente")
        setTimeout(() => {
            window.location.href = "index.html"
        }, 2000);
    }).catch(()=>VistaHTMLFormularioCliente.desplegarAlertaError("Ha ocurrido un error al actualizar el cliente, por favor inténtelo mas tarde."));;
})