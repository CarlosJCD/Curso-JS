import VistaHTMLNuevoCliente from "./modules/VistaHTMLNuevoCliente.js";

VistaHTMLNuevoCliente.formNuevoCliente.addEventListener("submit",(evento)=>{
    evento.preventDefault();

    const clienteNuevo = {
        nombre: VistaHTMLNuevoCliente.inputNombreCliente.value,
        email: VistaHTMLNuevoCliente.inputCorreoCliente.value,
        telefono: VistaHTMLNuevoCliente.inputTelefonoCliente.value,
        empresa: VistaHTMLNuevoCliente.inputEmpresaCliente.value
    }

    const respuestaValidacion = validarInformacionClienteNuevo(clienteNuevo);

    if(!respuestaValidacion.ok) VistaHTMLNuevoCliente.desplegarAlertaError(respuestaValidacion.mensaje);


})

function validarInformacionClienteNuevo(clienteNuevo = {nombre:"", email: "",telefono: "",empresa: ""}){
    
    if(clienteNuevo.nombre === ""){
        return {ok: false, mensaje: "Por favor ingrese el nombre del cliente"}
    }
    if(clienteNuevo.email === ""){
        return {ok: false, mensaje: "Por favor ingrese el correo del cliente"}
    }
    if(clienteNuevo.telefono === ""){
        return {ok: false, mensaje: "Por favor ingrese el telefono del cliente"}
    }
    if(clienteNuevo.empresa === ""){
        return {ok: false, mensaje: "Por favor ingrese el nombre de la empresa"}
    }
    
    return {ok: true}
}