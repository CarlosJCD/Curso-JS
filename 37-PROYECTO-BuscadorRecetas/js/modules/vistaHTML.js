import Platillo from "../types/Platillo.js";
import Categoria from "../types/Categoria.js";
import { obtenerRecetaDelPlatillo } from "./API.js";
import RecetaPlatillo from "../types/RecetaPlatillo.js";
import { agregarPlatilloAFavoritos, eliminarPlatilloDeFavoritos, estaPlatilloEnFavoritos } from "./localStorage.js";

const CLASE_BOOTSTRAP_DIV_CONTENEDOR_PLATILLO = 'col-md-4';
const CLASE_BOOTSTRAP_IMG_PLATILLO = 'card-img-top';
const CLASE_BOOTSTRAP_CARD_BODY_PLATILLO = 'card-body';
const CLASE_BOOTSTRAP_UL_LISTA_INGREDIENTES = 'list-group';
const CLASE_BOOTSTRAP_LI_INGREDIENTE = 'list-group-item';

const CLASES_BOOTSTRAP_DIV_CARD_PLATILLO = ['card', 'mb-4'];
const CLASES_BOOTSTRAP_H3_PLATILLO = ['card-title', 'mb-3'];
const CLASES_BOOTSTRAP_PLATILLO = ['btn', 'btn-danger', 'w-100'];
const CLASES_BOOTSTRAP_H2_CATEGORIA = ['text-center', 'text-black', 'my-5'];
const CLASES_BOOTSTRAP_BUTTON_AÑADIR_A_FAVORITOS = ['btn', 'btn-danger', 'col'];
const CLASES_BOOTSTRAP_BUTTON_CERRAR_MODAL = ['btn', 'btn-secondary', 'col'];
const CLASES_BOOTSTRAP_PARRAFO_FAVORITOS_VACIO = ['fs-4', 'text-center', 'font-bold', 'mt-5'];

const MAX_NUM_INGREDIENTES = 20;

export const selectCategorias = document.getElementById("categorias");

const divResultadoPlatillos = document.getElementById("resultado");

const h1TituloModal = document.getElementById("modal-title");
const divBodyModal = document.getElementById("modal-body");
const divFooterModal = document.getElementById("modal-footer");

const divToast = document.getElementById("toast");
const divToastBody = document.getElementById("toast-body");


const modal = new bootstrap.Modal('#modal', {});

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
export function desplegarPlatillos(platillos){
    

    const nodosHTMLPlatillos = platillos.map(platillo => {
        
        const {idMeal, strMeal, strMealThumb } = platillo;

        const divContenedorPlatillo = construirDivContenedorPlatillo();

        const divCardPlatillo = construirDivCardPlatillo();

        const imgPlatillo = construirImgPlatillo(strMeal, strMealThumb);

        const divCardBodyPlatillo = construirDivCardBodyPlatillo();

        const h3Platillo = construirH3Platillo(strMeal);

        const buttonPlatillo = construirButtonPlatillo(idMeal);

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

function construirButtonPlatillo(idPlatillo) {
    const buttonPlatillo = document.createElement('BUTTON');
    buttonPlatillo.classList.add(...CLASES_BOOTSTRAP_PLATILLO);
    buttonPlatillo.textContent = 'Ver Receta'
    buttonPlatillo.onclick = () =>{
        obtenerRecetaDelPlatillo(idPlatillo).then(recetaPlatillo => {desplegarModalConReceta(recetaPlatillo)})
    }

    return buttonPlatillo;
}

function construirH2Categoria(cantidadPlatillos) {
    const h2Categoria = document.createElement("H2");

    h2Categoria.classList.add(...CLASES_BOOTSTRAP_H2_CATEGORIA);
    h2Categoria.textContent = cantidadPlatillos ? 'Resultados': 'No Hay Resultados';

    return h2Categoria;
}

/**
 * 
 * @param {RecetaPlatillo} recetaPlatillo 
 */
function desplegarModalConReceta(recetaPlatillo) {
    const { idMeal, strInstructions, strMeal, strMealThumb } = recetaPlatillo;


    h1TituloModal.textContent = strMeal;
    divBodyModal.innerHTML =`
    <img class="img-fluid" src="${strMealThumb}" alt="receta ${strMeal}" />
    <h3 class="my-3">Instrucciones</h3>
    <p>${strInstructions}</p>
    <h3 class="my-3">Ingredientes y Cantidades</h3>
    `;

    divBodyModal.appendChild(construirUlIngredientesReceta(recetaPlatillo));

    const platillo = {idMeal, strMeal, strMealThumb};

    const botonesModal = [crearButtonAñadirRecetaAFavoritos(platillo), crearButtonCerrarModal()];

    divFooterModal.replaceChildren(...botonesModal);
    
    modal.show()
}

/**
 * 
 * @param {RecetaPlatillo} recetaPlatillo 
 * @returns {HTMLUListElement}
 */
function construirUlIngredientesReceta(recetaPlatillo){

    const ulIngredientes = document.createElement("ul");
    ulIngredientes.classList.add(CLASE_BOOTSTRAP_UL_LISTA_INGREDIENTES);

    for (let numIngrediente = 1; numIngrediente <= MAX_NUM_INGREDIENTES; numIngrediente++) {
        const nombreIngrediente = recetaPlatillo[`strIngredient${numIngrediente}`];
        const cantidadIngrediente = recetaPlatillo[`strMeasure${numIngrediente}`];

        const liIngrediente = document.createElement("li");
        liIngrediente.classList.add(CLASE_BOOTSTRAP_LI_INGREDIENTE);
        liIngrediente.textContent = `${nombreIngrediente} - ${cantidadIngrediente}`
        
        ulIngredientes.appendChild(liIngrediente);
    }

    return ulIngredientes;
}

/**
 * 
 * @param {Platillo} platillo 
 * @returns {HTMLButtonElement}
 */
function crearButtonAñadirRecetaAFavoritos(platillo) {
    const buttonAñadirRecetaAFavoritos = document.createElement("button");

    buttonAñadirRecetaAFavoritos.classList.add(...CLASES_BOOTSTRAP_BUTTON_AÑADIR_A_FAVORITOS);
    buttonAñadirRecetaAFavoritos.textContent = estaPlatilloEnFavoritos(platillo.idMeal) ? "Eliminar de Favoritos": "Añadir A Favoritos" ;

    
    buttonAñadirRecetaAFavoritos.addEventListener("click", () => {
        if(! estaPlatilloEnFavoritos(platillo.idMeal)){
            agregarPlatilloAFavoritos(platillo)
            desplegarToastConMensaje("Platillo Añadido a Favoritos")
            buttonAñadirRecetaAFavoritos.textContent = "Eliminar de favoritos"
        } else{
            eliminarPlatilloDeFavoritos(platillo.idMeal);
            desplegarToastConMensaje("Platillo Eliminado de Favoritos")
            buttonAñadirRecetaAFavoritos.textContent = "Añadir a favoritos"
        }
    })

    return buttonAñadirRecetaAFavoritos

}

/**
 * 
 * @returns {HTMLButtonElement}
 */
function crearButtonCerrarModal() {
    const buttonCerrarModal = document.createElement("button");
    buttonCerrarModal.classList.add(...CLASES_BOOTSTRAP_BUTTON_CERRAR_MODAL);
    buttonCerrarModal.textContent = "Cerrar";

    buttonCerrarModal.onclick = () => {
        modal.hide();
    }

    return buttonCerrarModal

}

/**
 * 
 * @param {string} mensaje 
 */
function desplegarToastConMensaje(mensaje) {
    const toast = new bootstrap.Toast(divToast);
    divToastBody.textContent=mensaje;
    toast.show()
}


export function desplegarTextoFavoritosVacio() {
    const parrafoFavoritosVacio = construirParrafoFavoritosVacio();
    divResultadoPlatillos.appendChild(parrafoFavoritosVacio);
}


function construirParrafoFavoritosVacio() {
    const parrafoFavoritosVacio = document.createElement('P');
    parrafoFavoritosVacio.textContent = 'No hay favoritos aún';
    parrafoFavoritosVacio.classList.add(...CLASES_BOOTSTRAP_PARRAFO_FAVORITOS_VACIO);

    return parrafoFavoritosVacio;
}