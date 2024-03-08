import { desplegarAlertaDeError, formClima, inputCiudad, selectPais } from "./modules/VistaHTML.js"
import { validarFormularioDelClima } from "./modules/validaciones.js";


document.addEventListener("DOMContentLoaded", () =>{
    formClima.addEventListener('submit', (evento)=>{
        evento.preventDefault()

        const ciudad = inputCiudad.value;

        const pais = selectPais.value;

        const resultadoValidacion = validarFormularioDelClima(ciudad, pais);

        if(!resultadoValidacion.ok){
            desplegarAlertaDeError(resultadoValidacion.mensaje);
        }


    });
})