
const CLASES_TAILWIND_PARRAFO_ERROR = ['bg-red-100', "border-red-400", "text-red-700", "px-4", "py-3", "rounded",  "max-w-lg", "mx-auto", "mt-6", "text-center"];

const ID_ALERTA_ERROR = "alertaError";

export const divResultado = document.getElementById("resultado");

export const formBuscarImagenes = document.getElementById("formulario");

export const inputBusqueda = document.getElementById("termino");

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

