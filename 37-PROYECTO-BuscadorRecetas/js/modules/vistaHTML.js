import Platillo from "../types/Platillo.js";
import Categoria from "../types/Categoria.js";

export const selectCategorias = document.getElementById("categorias");

const divVentanaModal = document.getElementById("modal")

const divResultadoPlatillos = document.getElementById("resultado")

const CLASE_BOOTSTRAP_DIV_CONTENEDOR_PLATILLO = 'col-md-4';
const CLASES_BOOTSTRAP_DIV_CARD_PLATILLO = ['card', 'mb-4'];
const CLASE_BOOTSTRAP_IMG_PLATILLO = 'card-img-top';
const CLASE_BOOTSTRAP_CARD_BODY_PLATILLO = 'card-body';
const CLASES_BOOTSTRAP_H3_PLATILLO = ['card-title', 'mb-3'];
const CLASES_BOOTSTRAP_PLATILLO = ['btn', 'btn-danger', 'w-100'];
const CLASES_BOOTSTRAP_H2_CATEGORIA = ['text-center', 'text-black', 'my-5'];


/**
 * 
 * @param {Categoria[]} categorias 
 */
export function desplegarCategorias(categorias){
    
    const divCategorias = categorias.map(categoria => {
        const {strCategory: nombreCategoria} = categoria;
        return construirOptionCategoria(nombreCategoria);
    })

    divCategorias.unshift(construirOptionDefault());

    selectCategorias.replaceChildren(...divCategorias);
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
    optionDefault.selected = true;
    optionDefault.disabled = true;
    return optionDefault;
}

/**
 * 
 * @param {Platillo[]} platillos 
 */
export function desplegarPlatillosDeLaCategoria(platillos){
    

    const nodosHTMLPlatillos = platillos.map(platillo => {
        
        const { strMeal, strMealThumb } = platillo;

        const divContenedorPlatillo = construirDivContenedorPlatillo();

        const divCardPlatillo = construirDivCardPlatillo();

        const imgPlatillo = construirImgPlatillo(strMeal, strMealThumb);

        const divCardBodyPlatillo = construirDivCardBodyPlatillo();

        const h3Platillo = construirH3Platillo(strMeal);

        const buttonPlatillo = construirButtonPlatillo();

        divCardBodyPlatillo.appendChild(h3Platillo);
        divCardBodyPlatillo.appendChild(buttonPlatillo);

        divCardPlatillo.appendChild(imgPlatillo);
        divCardPlatillo.appendChild(divCardBodyPlatillo);

        divContenedorPlatillo.appendChild(divCardPlatillo);

        return divContenedorPlatillo;
    })

    nodosHTMLPlatillos.unshift(construirH2Categoria(platillos.length));

    divResultadoPlatillos.replaceChildren(...nodosHTMLPlatillos);
}

function construirDivContenedorPlatillo() {
    const divContenedorPlatillo = document.createElement('DIV');
    divContenedorPlatillo.classList.add(CLASE_BOOTSTRAP_DIV_CONTENEDOR_PLATILLO);
    
    return divContenedorPlatillo;
}

function construirDivCardPlatillo() {
    const divCardPlatillo = document.createElement('DIV');
    divCardPlatillo.classList.add(...CLASES_BOOTSTRAP_DIV_CARD_PLATILLO);

    return divCardPlatillo;
}

/**
 * 
 * @param {string} nombrePlatillo 
 * @param {string} linkPlatillo 
 * @returns 
 */
function construirImgPlatillo(nombrePlatillo, linkPlatillo) {

    const imgPlatillo = document.createElement("img");
    imgPlatillo.classList.add(CLASE_BOOTSTRAP_IMG_PLATILLO)
    imgPlatillo.alt = `Imagen del platillo ${nombrePlatillo}`;
    imgPlatillo.src = linkPlatillo;

    return imgPlatillo;
}

function construirDivCardBodyPlatillo() {
    const divCardBodyPlatillo = document.createElement('DIV');
    divCardBodyPlatillo.classList.add(CLASE_BOOTSTRAP_CARD_BODY_PLATILLO);

    return divCardBodyPlatillo;
    
}


function construirH3Platillo(nombrePlatillo) {
    const h3Platillo = document.createElement('H3');
    h3Platillo.classList.add(...CLASES_BOOTSTRAP_H3_PLATILLO);
    h3Platillo.textContent = nombrePlatillo;

    return h3Platillo;
}

function construirButtonPlatillo() {
    const buttonPlatillo = document.createElement('BUTTON');
    buttonPlatillo.classList.add(...CLASES_BOOTSTRAP_PLATILLO);
    buttonPlatillo.textContent = 'Ver Receta'
    
    return buttonPlatillo;
}

function construirH2Categoria(cantidadPlatillos) {
    const h2Categoria = document.createElement("H2");

    h2Categoria.classList.add(...CLASES_BOOTSTRAP_H2_CATEGORIA);
    h2Categoria.textContent = cantidadPlatillos ? 'Resultados': 'No Hay Resultados';

    return h2Categoria;
}