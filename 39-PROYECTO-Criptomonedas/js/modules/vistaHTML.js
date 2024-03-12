const CLASE_CSS_ALERTA_ERROR = "error";
const CLASE_CSS_PARRAFO_PRECIO = 'precio';

const ID_ALERTA_ERROR = "alertaError"

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

function desplegarCotización(cotizacion) {
    const parrafosCotizacion = construirHtmlCotizacion(cotizacion);
    
    divResultado.replaceChildren(...parrafosCotizacion);
}

function construirHtmlCotizacion({ PRICE, HIGHDAY, LOWDAY, CHANGEPCT24HOUR, LASTUPDATE }) {
    const parrafoPrecio = construirParrafoDeCotización(`El Precio es: <span> ${PRICE} </span>`, CLASE_CSS_PARRAFO_PRECIO);

    const parrafoPrecioAlto = construirParrafoDeCotización(`Precio más alto del día: <span>${HIGHDAY}</span>`)

    const parrafoPrecioBajo = construirParrafoDeCotización(`Precio más bajo del día: <span>${LOWDAY}</span>`)
    
    const parrafoUltimasHoras = construirParrafoDeCotización(`Variación últimas 24 horas: <span>${CHANGEPCT24HOUR}%</span>`)
    
    const parrafoUltimaActualización = construirParrafoDeCotización(`Última Actualización: <span>${LASTUPDATE}</span>`)

    return [parrafoPrecio, parrafoPrecioAlto, parrafoPrecioBajo, parrafoUltimasHoras, parrafoUltimaActualización];
}

function construirParrafoDeCotización(htmlInterno, claseCSS = "") {
    const parrafoCotización = document.createElement("p");

    if(claseCSS) parrafoCotización.classList.add(claseCSS);

    parrafoCotización.innerHTML = htmlInterno;

    return parrafoCotización;
}


export default {
    formCotizarCriptomoneda,
    selectMoneda,
    selectCriptoMoneda,
    deplegarOpcionesCriptomonedas,
    deplegarAlertaError,
    desplegarCotización
}