const CLASES_TAILWIND_ALERTA_ERROR = ['bg-red-100', "border-red-400", "text-red-700", "px-4", "py-3", "rounded", "relative", "max-w-md", "mx-auto", "mt-6", "text-center" ];

export const divContenedorClima = document.getElementById("container");

export const divContenedorResultado = document.getElementById("resultado");

export const formClima = document.getElementById("formulario");

export const inputCiudad = document.getElementById("ciudad");

export const selectPais = document.getElementById("pais");

/**
 * 
 * @param {string} mensajeError 
 */
export function desplegarAlertaDeError(mensajeError) {
    const alertaAnterior = document.getElementById("alertaError")

    if(!alertaAnterior){    
        const divAlertaError = document.createElement("div");
        
        divAlertaError.classList.add(...CLASES_TAILWIND_ALERTA_ERROR);
        divAlertaError.id = "alertaError"
        divAlertaError.innerHTML = `
            <strong class="font-bold">Error!</strong>
            <span class="block sm:inline">${mensajeError}</span>
        `;
        
        divContenedorClima.appendChild(divAlertaError);
        
        setTimeout(() => {
            divAlertaError.remove();
        }, 3000);
    }
        
}