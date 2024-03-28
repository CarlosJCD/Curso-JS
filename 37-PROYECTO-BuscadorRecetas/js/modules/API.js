import Categoria from "../types/Categoria.js";
import Platillo from "../types/Platillo.js";
import RecetaPlatillo from "../types/RecetaPlatillo.js";

const urlCategoriasAPI = 'https://www.themealdb.com/api/json/v1/1/categories.php'

const urlPlatillosDeLaCategoriaAPI = 'https://www.themealdb.com/api/json/v1/1/filter.php?c={categoria}'

const urlRecetaDelPlatilloAPI = 'https://themealdb.com/api/json/v1/1/lookup.php?i={idPlatillo}'


/**
 * 
 * @param {string} categoria 
 */
function obtenerURLPlatillosDeLaCategoria(categoria){ return urlPlatillosDeLaCategoriaAPI.replace('{categoria}',categoria) }

function obtenerURLRecetaDelPlatillo(idPlatillo){ return urlRecetaDelPlatilloAPI.replace('{idPlatillo}',idPlatillo) }

function fetchURL(url) {
    return new Promise((resolve, reject) => {
        fetch(url).then(respuesta => resolve(respuesta.json())).catch(error => reject(error));
    })
}

/**
 * 
 * @returns {Categoria[]}
 */
export function obtenerCategoriasDeLaAPI(){ return fetchURL(urlCategoriasAPI).then(categoriasJSON => categoriasJSON.categories) }

/**
 * 
 * @param {string} categoria 
 * 
 * @returns {Platillo[]}
 */
export function obtenerPlatillosDeLaCategoria(categoria) { return fetchURL(obtenerURLPlatillosDeLaCategoria(categoria)).then(platillosJSON => platillosJSON.meals) }


/**
 * 
 * @param {string} idPlatillo 
 * 
 * @returns {RecetaPlatillo} Receta del platillo
 */
export function obtenerRecetaDelPlatillo(idPlatillo) { return fetchURL(obtenerURLRecetaDelPlatillo(idPlatillo)).then(recetaJSON => recetaJSON.meals[0]) }
