import VistaHTMLFormularioCliente from "./modules/VistaHTMLFormularioCliente.js";
import { crearConexionDB, registrarCliente } from "./modules/database.js";

document.addEventListener("DOMContentLoaded", () => crearConexionDB())

VistaHTMLFormularioCliente.formNuevoCliente.addEventListener("submit", evento => {
    evento.preventDefault();

    const clienteNuevo = {
        nombre: VistaHTMLFormularioCliente.inputNombreCliente.value,
        email: VistaHTMLFormularioCliente.inputCorreoCliente.value,
        telefono: VistaHTMLFormularioCliente.inputTelefonoCliente.value,
        empresa: VistaHTMLFormularioCliente.inputEmpresaCliente.value
    }

    const respuestaValidacion = validarInformacionClienteNuevo(clienteNuevo);

    if(respuestaValidacion.ok){
        clienteNuevo.id = Date.now();
        registrarCliente(clienteNuevo).then(result =>{
            if(result){
                VistaHTMLFormularioCliente.desplegarAlertaExito("Cliente registrado exitosamente")
                VistaHTMLFormularioCliente.formNuevoCliente.reset()
                setTimeout(() => {
                    window.location.href = "index.html"
                }, 3000);
            } else{
                VistaHTMLFormularioCliente.desplegarAlertaError("Ha ocurrido un error al registrar el cliente, por favor inténtelo mas tarde.");
            }
        });
    } else{
        VistaHTMLFormularioCliente.desplegarAlertaError(respuestaValidacion.mensaje);
    }



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