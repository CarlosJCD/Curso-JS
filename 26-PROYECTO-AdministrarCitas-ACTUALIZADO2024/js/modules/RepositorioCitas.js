import Cita from "../types/Cita.js";

/**
 * @type {Cita[]}
 */

let citasRegistradas = []

/**
 * 
 * @param {Cita} datosCita 
 */
function registrarCita(datosCita) {
    datosCita.id = Date.now();
    citasRegistradas.push(datosCita)
}

/**
 * 
 * @returns {Cita[]}
 */
function obtenerCitasRegistradas() {
    return [...citasRegistradas];
}

/**
 * 
 * @param {number} idCita 
 */
function buscarCitaPorId(idCita) {
    return citasRegistradas.find(citaRegistrada => citaRegistrada.id === idCita)
}

/**
 * 
 * @param {Cita} cita 
 */
function actualizarCita(cita) {
    citasRegistradas = citasRegistradas.map( citaRegistrada => citaRegistrada.id === cita.id ? cita : citaRegistrada);
}

/**
 * 
 * @param {number} idCita 
 */
function eliminarCita(idCita) {
    citasRegistradas = citasRegistradas.filter(citaRegistrada => citaRegistrada.id !== idCita);
}



export default{
    registrarCita,
    obtenerCitasRegistradas,
    buscarCitaPorId,
    actualizarCita,
    eliminarCita
}