const API_URL_OPCIONES_CRIPTOMONEDAS = 'https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD';


function fetchURL(url){
    return fetch(url).then(respuesta => respuesta.json());
}


function obtenerOpcionesCriptomonedas() {
    return fetchURL(API_URL_OPCIONES_CRIPTOMONEDAS).then(criptomonedasJSON => criptomonedasJSON.Data )
}


export default {
    obtenerOpcionesCriptomonedas
}