import { obtenerCategoriasDeLaAPI } from "./API.js";

export const selectCategorias = document.getElementById("categorias");

const divVentanaModal = document.getElementById("modal")

export function cargarCategoriasDeLaAPI(){
    obtenerCategoriasDeLaAPI().then(respuestaAPI =>{
        const { categories: categorias } = respuestaAPI;
        
        const divCategorias = categorias.map(categoria => {
            const {strCategory: nombreCategoria} = categoria;
            return construirOptionCategoria(nombreCategoria);
        })

        divCategorias.unshift(construirOptionDefault());

        selectCategorias.replaceChildren(...divCategorias);
    });
}

/**
 * 
 * @param {string} nombreCategoria
 *  
 */
function construirOptionCategoria(nombreCategoria) {
    const optionCategoria = document.createElement('OPTION');
    optionCategoria.value = nombreCategoria;
    optionCategoria.textContent = nombreCategoria;
    return optionCategoria;
}

function construirOptionDefault() {
    const optionDefault = document.createElement('OPTION');
    optionDefault.textContent = '--Seleccione--';
    return optionDefault;
}