import { obtenerPlatillosFavoritosDelLocalStorage } from "./modules/localStorage.js"
import { desplegarPlatillos, desplegarTextoFavoritosVacio } from "./modules/vistaHTML.js"

document.addEventListener("DOMContentLoaded",() => {
    const platillosFavoritos = obtenerPlatillosFavoritosDelLocalStorage();

    if(platillosFavoritos.length <= 0){
        desplegarTextoFavoritosVacio();
    } else{
        desplegarPlatillos(platillosFavoritos)
    }
})