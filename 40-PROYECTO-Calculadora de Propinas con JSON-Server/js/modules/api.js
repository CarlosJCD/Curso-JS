import Platillo from "../types/Platillo.js";

const URL_API_PLATILLOS = "http://localhost:4000/platillos"

function fetchURL(url){
    return fetch(url).then(respuesta => respuesta.json());
}

/**
 * 
 * @returns {Platillo[]}
 */
function obtenerPlatillos() {
    return fetchURL(URL_API_PLATILLOS)
}

export default{
    obtenerPlatillos
}