import Imagen from "../types/Imagen.js";

const URL_API_PIXABAY = "https://pixabay.com/api/?key=42823482-3dbcd3262fd286d5d52298d89&q={terminoDeBusqueda}&per_page=30&page=${paginaActual}"

/**
 * 
 * @param {string} terminoDeBusqueda 
 * @param {number} paginaActual 
 * 
 * @returns {string}
 */
function obtenerAPIURLConTerminoDeBusqueda(terminoDeBusqueda, paginaActual) {
    return URL_API_PIXABAY.replace("{terminoDeBusqueda}", terminoDeBusqueda).replace("{paginaActual}", paginaActual);
}

/**
 * 
 * @param {string} terminoDeBusqueda 
 * 
 * @returns {Imagen[]}
 */
export function buscarImagenesDelTerminoDeBusqueda(terminoDeBusqueda, paginaActual = 1) {
    return fetch(obtenerAPIURLConTerminoDeBusqueda(terminoDeBusqueda, paginaActual)).then(respuesta => respuesta.json());
}