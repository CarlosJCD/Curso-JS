const ID_ALERTA_ERROR = "alertaError"
const CLASE_CSS_ALERTA_ERROR = "error";


const formCotizarCriptomoneda = document.getElementById("formulario");
const selectMoneda = document.getElementById("moneda");
const selectCriptoMoneda = document.getElementById("criptomonedas");

const divResultado = document.getElementById("resultado");

/**
 * 
 * @param {any[]} criptomonedas 
 */
function deplegarOpcionesCriptomonedas(criptomonedas) {
    const optionsCriptomonedas = criptomonedas.map(criptomoneda => construirOptionCriptomoneda(criptomoneda));

    selectCriptoMoneda.append(...optionsCriptomonedas);
}

function construirOptionCriptomoneda(criptomoneda){
    const { FullName, Name } = criptomoneda.CoinInfo;
    
    const optionCriptomoneda = document.createElement('option');
    optionCriptomoneda.value = Name;
    optionCriptomoneda.textContent = FullName;

    return optionCriptomoneda;
}

/**
 * 
 * @param {string} mensajeAlertaError 
 */
function deplegarAlertaError(mensajeAlertaError) {
    
    if(!obtenerAlertaErrorExistente()){
        const divAlertaError = construirDivAlertaError(mensajeAlertaError);

        formCotizarCriptomoneda.appendChild(divAlertaError);

        setTimeout(() => {
            divAlertaError.remove();
        }, 3000);
    }
}

function obtenerAlertaErrorExistente() {
    return document.getElementById(ID_ALERTA_ERROR);
}

/**
 * 
 * @param {string} mensajeAlertaError 
 * @returns {HTMLDivElement}
 */
function construirDivAlertaError(mensajeAlertaError) {
    const divAlertaError = document.createElement("div");
    divAlertaError.id = ID_ALERTA_ERROR;
    divAlertaError.classList.add(CLASE_CSS_ALERTA_ERROR);
    divAlertaError.textContent = mensajeAlertaError

    return divAlertaError;
}


export default {
    formCotizarCriptomoneda,
    selectMoneda,
    selectCriptoMoneda,
    deplegarOpcionesCriptomonedas,
    deplegarAlertaError
}