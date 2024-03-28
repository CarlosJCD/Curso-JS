import Imagen from "../types/Imagen.js";
import { buscarImagenesDelTerminoDeBusqueda } from "./API.js";

const CLASES_TAILWIND_PARRAFO_ERROR = ['bg-red-100', "border-red-400", "text-red-700", "px-4", "py-3", "rounded",  "max-w-lg", "mx-auto", "mt-6", "text-center"];
const CLASES_TAILWIND_DIV_CONTENEDOR_IMAGEN = ["w-1/2", "md:w-1/3", "lg:w-1/4", "mb-4", "p-3"];
const CLASES_TAILWIND_ENLACE_PAGINA = ['siguiente', 'bg-yellow-400', 'px-4', 'py-1', 'mr-2', 'mx-auto', 'mb-10', 'font-bold', 'uppercase', 'rounded'];
const ID_ALERTA_ERROR = "alertaError";

export const divResultado = document.getElementById("resultado");

export const formBuscarImagenes = document.getElementById("formulario");

export const inputBusqueda = document.getElementById("termino");

const divPaginacion = document.getElementById("paginacion");

let paginasTotales;

let paginaActual;



/**
 * 
 * @param {string} mensajeDeError 
 */
export function desplegarAlertaDeErrorDelFormulario(mensajeDeError) {
    const parrafoAlertaErrorExistente = obtenerParrafoAlertaDeErrorExistente();

    if(!parrafoAlertaErrorExistente){
        const parrafoAlertaError = construirParrafoAlertaError(mensajeDeError);
    
        formBuscarImagenes.appendChild(parrafoAlertaError);

        setTimeout(() => {
            parrafoAlertaError.remove()
        }, 3000);
    }
}

/**
 * 
 * @returns {HTMLParagraphElement | null}
 */
function obtenerParrafoAlertaDeErrorExistente() {
    return document.getElementById(ID_ALERTA_ERROR);
}

/**
 * 
 * @param {string} mensajeDeError 
 * @returns {HTMLParagraphElement}
 */
function construirParrafoAlertaError(mensajeDeError) {
    const parrafoAlertaError = document.createElement("p");
    parrafoAlertaError.id = ID_ALERTA_ERROR;
    parrafoAlertaError.classList.add(...CLASES_TAILWIND_PARRAFO_ERROR);

    parrafoAlertaError.innerHTML = `
            <strong class="font-bold">Error!</strong>
            <span class="block sm:inline">${mensajeDeError}</span>
    `;
    
    return parrafoAlertaError
}

/**
 * 
 * @param {Imagen[]} imagenes 
 */
export function desplegarImagenes(imagenes) {
    const divsImagenes = construirDivsImagenes(imagenes);

    divResultado.replaceChildren(...divsImagenes);
}

/**
 * 
 * @param {Imagen[]} imagenes 
 * 
 * @returns {HTMLDivElement[]}
 */
function construirDivsImagenes(imagenes) {
    const divsImagenes = imagenes.map(imagen => construirDivContenedorImagen(imagen))

    return divsImagenes;
}

/**
 * 
 * @param {Imagen} imagen
 * 
 * @returns {HTMLDivElement}
 */
function construirDivContenedorImagen(imagen) {
    const { previewURL, likes, views, largeImageURL} = imagen;

    const divContenedorImagen = document.createElement("div");
    divContenedorImagen.classList.add(...CLASES_TAILWIND_DIV_CONTENEDOR_IMAGEN);

    divContenedorImagen.innerHTML = `
    <div class="bg-white ">
        <img class="w-full" src=${previewURL} alt={tags} />
        <div class="p-4">
            <p class="card-text">${likes} Me Gusta</p>
            <p class="card-text">${views} Vistas </p>

            <a href=${largeImageURL} 
            rel="noopener noreferrer" 
            target="_blank" class="bg-blue-800 w-full p-1 block mt-5 rounded text-center font-bold uppercase hover:bg-blue-500 text-white">Ver Imagen</a>
        </div>
    </div>
    `

    return divContenedorImagen;
}


/**
 * 
 * @param {number} totalNumberOfPages 
 */
export function desplegarPaginacion(numeroTotalDeImagenes) {
    const totalDePaginas = Math.ceil(numeroTotalDeImagenes / 30);

    const enlacesPaginacion = [];
    for (let paginaActual = 1; paginaActual < totalDePaginas; paginaActual++) {
        enlacesPaginacion.push(construirEnlacePaginacion(paginaActual))
    }

    divPaginacion.replaceChildren(...enlacesPaginacion);
}

/**
 * 
 * @param {number} numeroDePagina 
 * 
 * @returns {HTMLAnchorElement}
 */
function construirEnlacePaginacion(numeroDePagina) {
    const enlacePagina = document.createElement('a');
    enlacePagina.href = "#";
    
    enlacePagina.textContent = numeroDePagina;

    enlacePagina.addEventListener("click", ()=>{
        buscarImagenesDelTerminoDeBusqueda(inputBusqueda.value, numeroDePagina).then(respuestaJSON => desplegarImagenes(respuestaJSON.hits));
    })
    enlacePagina.classList.add(...CLASES_TAILWIND_ENLACE_PAGINA);
    
    return enlacePagina;
}