import RespuestaValidacion from "../types/RespuestaValidacion.js";

/**
 * 
 * @param {string} terminoBusqueda 
 * 
 * @returns {RespuestaValidacion}
 */
export function validarBusquedaDeImagenes(terminoBusqueda){
    return terminoBusqueda === "" ?  {ok: false, mensaje: "Ingrese un termino de busqueda primero"} : {ok: true, mensaje: ""}
}