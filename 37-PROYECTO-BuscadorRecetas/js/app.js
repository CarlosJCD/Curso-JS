import { obtenerCategoriasDeLaAPI, obtenerPlatillosDeLaCategoria } from "./modules/API.js";
import { selectCategorias, desplegarCategorias, desplegarPlatillosDeLaCategoria,  } from "./modules/vistaHTML.js"


document.addEventListener("DOMContentLoaded", ()=>{
    cargarCategoriasDeLaAPI();
    
    selectCategorias.addEventListener("change", cargarPlatillosDeLaCategoriaSeleccionada)
})

function cargarCategoriasDeLaAPI(){
    obtenerCategoriasDeLaAPI().then(categorias => { desplegarCategorias(categorias) })
}

function cargarPlatillosDeLaCategoriaSeleccionada(evento) {
    const categoriaSeleccionada = evento.target.value;

    obtenerPlatillosDeLaCategoria(categoriaSeleccionada).then(platillos => desplegarPlatillosDeLaCategoria(platillos));
}