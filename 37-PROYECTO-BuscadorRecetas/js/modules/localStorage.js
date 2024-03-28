import Platillo from "../types/Platillo.js";

const LLAVE_PLATILLOS_FAVORITOS = "platillosFavoritos"

/**
 * 
 * @param {Platillo} platillo 
 */
export function agregarPlatilloAFavoritos(platillo) {
    const platillosFavoritos = obtenerPlatillosFavoritosDelLocalStorage();
    platillosFavoritos.push(platillo)
    actualizarPlatillosFavoritosEnLocalStorage(platillosFavoritos);
}

/**
 * 
 * @param {string} idPlatillo 
 */
export function eliminarPlatilloDeFavoritos(idPlatillo) {
    let platillosFavoritos = obtenerPlatillosFavoritosDelLocalStorage();

    platillosFavoritos = platillosFavoritos.filter(platilloFavorito => platilloFavorito.idMeal !== idPlatillo )

    actualizarPlatillosFavoritosEnLocalStorage(platillosFavoritos);
}

/**
 * 
 * @param {string} idPlatillo
 * 
 * @returns {boolean}
 */
export function estaPlatilloEnFavoritos(idPlatillo) {
    const platillosFavoritos = obtenerPlatillosFavoritosDelLocalStorage();
    return platillosFavoritos.some(platilloFavorito => platilloFavorito.idMeal === idPlatillo)
}


/**
 * 
 * @returns {Platillo[]}
 */
export function obtenerPlatillosFavoritosDelLocalStorage(){
    return JSON.parse(localStorage.getItem(LLAVE_PLATILLOS_FAVORITOS)) ?? [];
}

function actualizarPlatillosFavoritosEnLocalStorage(platillosFavoritos){
    localStorage.setItem(LLAVE_PLATILLOS_FAVORITOS, JSON.stringify(platillosFavoritos));
}