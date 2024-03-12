import API from "./modules/API.js";
import vistaHTML from "./modules/vistaHTML.js";


document.addEventListener("DOMContentLoaded", ()=>{
    API.obtenerOpcionesCriptomonedas().then(criptomonedas => vistaHTML.deplegarOpcionesCriptomonedas(criptomonedas))

    vistaHTML.formCotizarCriptomoneda.addEventListener("submit", ()=>{

    })
})