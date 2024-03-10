import Categoria from "../types/Categoria.js";
import Platillo from "../types/Platillo.js";

const urlCategoriasAPI = 'https://www.themealdb.com/api/json/v1/1/categories.php'

const urlPlatillosAPI = 'https://www.themealdb.com/api/json/v1/1/filter.php?c={categoria}'


/**
 * 
 * @param {string} categoria 
 */
function obtenerURLPlatillosDeLaCategoria(categoria){
    const url =  urlPlatillosAPI.repeat(1);
    
    return url.replace('{categoria}',categoria);
}

function fetchURL(url) {
    return new Promise((resolve, reject) => {
        fetch(url).then(respuesta => resolve(respuesta.json())).catch(error => reject(error));
    })
}

/**
 * 
 * @returns {Categoria[]}
 */
export function obtenerCategoriasDeLaAPI(){
    return fetchURL(urlCategoriasAPI).then(categoriasJSON => categoriasJSON.categories);
}

/**
 * 
 * @param {string} categoria 
 * 
 * @returns {Platillo[]}
 */

export function obtenerPlatillosDeLaCategoria(categoria) {
    return fetchURL(obtenerURLPlatillosDeLaCategoria(categoria)).then(platillosJSON => platillosJSON.meals);
}