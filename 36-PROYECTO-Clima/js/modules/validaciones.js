
const respuestaValidacion = {ok : true, mensaje: ""};

/**
 * 
 * @param {string} ciudad 
 * @param {string} pais 
 * 
 * @returns {respuestaValidacion} - Respuesta de la validación
 * 
 */
export function validarFormularioDelClima(ciudad, pais) {
    if (ciudad === '') {
        return {ok: false, mensaje: "Por favor, ingrese una ciudad"}
    }
    
    if (pais === '') {
        return {ok: false, mensaje: "Por favor, seleccione un país"}
    }
    
    
    return {ok: true, mensaje: ""}
}

/**
 * 
 * @returns {respuestaValidacion} - Respuesta de la validación
 * 
 */
export function validarDatosClima(datosClima){
    if(datosClima.cod === "404"){
        return {ok: false, mensaje: "Ciudad no encontrada"}
    }

    return {ok: true}
}