const API_URL_OPCIONES_CRIPTOMONEDAS = 'https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD';
const API_URL_COTIZACION_CRIPTOMONEDA = 'https://min-api.cryptocompare.com/data/pricemultifull?fsyms={criptomoneda}&tsyms={moneda}';


async function fetchURL(url){
    const respuesta = await fetch(url);

    return await respuesta.json();
}

async function obtenerOpcionesCriptomonedas() { 
    const criptomonedas = await fetchURL(API_URL_OPCIONES_CRIPTOMONEDAS)
    return await criptomonedas.Data;
}

/**
 * @param {Object} camposFormularioCotizacion
 * @param {string} camposFormularioCotizacion.moneda 
 * @param {string} camposFormularioCotizacion.criptomoneda 
 */
async function consultarCotizacion(camposFormularioCotización) {
    const {moneda, criptomoneda} = camposFormularioCotización;
    const datosCotización = await fetchURL(obtenerUrlCotización(camposFormularioCotización));
    
    return await datosCotización.DISPLAY[criptomoneda][moneda];
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