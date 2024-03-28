import Cita from "../types/Cita.js";
import RespuestaValidacion  from "../types/RespuestaValidacion.js";

/**
 * 
 * @param {Cita} cita 
 * 
 * @returns {RespuestaValidacion}
 */
function ValidarCamposCita(cita){
    if(cita.paciente === "") return {Ok: false, mensaje: "Por favor ingrese el nombre del paciente."}
    if(cita.propietario === "") return {Ok: false, mensaje: "Por favor ingrese el nombre del propietario del paciente."}
    if(cita.email === "") return {Ok: false, mensaje: "Por favor ingrese un email de contacto."}
    if(cita.fecha === "") return {Ok: false, mensaje: "Por favor escoja una fecha para la cita."}
    if(cita.sintomas === "") return {Ok: false, mensaje: "Por favor ingrese los sintomas que presenta el paciente."}

    return {Ok: true, mensaje: ""}
}


export default {
    ValidarCamposCita
}