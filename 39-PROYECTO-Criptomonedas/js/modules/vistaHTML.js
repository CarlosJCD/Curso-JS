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


export default {
    formCotizarCriptomoneda,
    selectMoneda,
    selectCriptoMoneda,
    deplegarOpcionesCriptomonedas,
}