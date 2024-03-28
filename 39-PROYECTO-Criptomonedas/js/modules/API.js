const API_URL_OPCIONES_CRIPTOMONEDAS = 'https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD';
const API_URL_COTIZACION_CRIPTOMONEDA = 'https://min-api.cryptocompare.com/data/pricemultifull?fsyms={criptomoneda}&tsyms={moneda}';


function fetchURL(url){
    return fetch(url).then(respuesta => respuesta.json());
}

function obtenerOpcionesCriptomonedas() {
    return fetchURL(API_URL_OPCIONES_CRIPTOMONEDAS).then(criptomonedasJSON => criptomonedasJSON.Data )
}

/**
 * @param {Object} camposFormularioCotizacion
 * @param {string} camposFormularioCotizacion.moneda 
 * @param {string} camposFormularioCotizacion.criptomoneda 
 */
function consultarCotizacion(camposFormularioCotización) {
    const {moneda, criptomoneda} = camposFormularioCotización;
    return fetchURL(obtenerUrlCotización(camposFormularioCotización)).then(respuesta => respuesta.DISPLAY[criptomoneda][moneda]);
}

/**
 * @param {Object} camposFormularioCotizacion
 * @param {string} camposFormularioCotizacion.moneda 
 * @param {string} camposFormularioCotizacion.criptomoneda 
 */
function obtenerUrlCotización({moneda, criptomoneda}) {
    return API_URL_COTIZACION_CRIPTOMONEDA.replace("{criptomoneda}", criptomoneda).replace("{moneda}", moneda);
}


export default {
    obtenerOpcionesCriptomonedas,
    consultarCotizacion
}