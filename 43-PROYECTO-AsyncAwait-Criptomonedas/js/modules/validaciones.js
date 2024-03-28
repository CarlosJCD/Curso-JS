
/**
 * @param {Object} camposFormularioCotizacion
 * @param {string} camposFormularioCotizacion.moneda 
 * @param {string} camposFormularioCotizacion.criptomoneda 
 */
function validarCamposFormularioCotizacion(camposFormularioCotizacion) {
    const {moneda, criptomoneda} = camposFormularioCotizacion;

    if(moneda === ""){
        return {ok : false, mensaje: "Elija una moneda de entre las opciones"}
    }
    
    if(criptomoneda === ""){
        return {ok : false, mensaje: "Elija una criptomoneda de entre las opciones"}
    }

    return {ok: true, mensaje: ""}
}

export default {
    validarCamposFormularioCotizacion
}