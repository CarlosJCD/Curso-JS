import Imagen from "../types/Imagen.js";

const URL_API_PIXABAY = "https://pixabay.com/api/?key=42823482-3dbcd3262fd286d5d52298d89&q={terminoDeBusqueda}"

/**
 * 
 * @param {string} terminoDeBusqueda 
 * 
 * @returns {string}
 */
function obtenerAPIURLConTerminoDeBusqueda(terminoDeBusqueda) {
    return URL_API_PIXABAY.replace("{terminoDeBusqueda}", terminoDeBusqueda);
}

/**
 * 
 * @param {string} terminoDeBusqueda 
 * 
 * @returns {Imagen[]}
 */
export function buscarImagenesDelTerminoDeBusqueda(terminoDeBusqueda) {
    return fetch(obtenerAPIURLConTerminoDeBusqueda(terminoDeBusqueda)).then(respuesta => respuesta.json()).then(respuestaJSON => respuestaJSON.hits);
}