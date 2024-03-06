import VistaHTMLFormularioCliente from "./modules/VistaHTMLFormularioCliente.js";
import {registrarCliente } from "./modules/database.js";
import { validarCliente } from "./modules/validaciones.js";

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
        clienteNuevo.id = Date.now();
        registrarCliente(clienteNuevo).then(result =>{
            if(result){
                VistaHTMLFormularioCliente.desplegarAlertaExito("Cliente registrado exitosamente")
                VistaHTMLFormularioCliente.formCliente.reset()
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

