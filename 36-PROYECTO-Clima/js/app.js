import { obtenerClimaDeLaAPI } from "./modules/APIClima.js";
import { desplegarAlertaDeError, desplegarDatosClima, desplegarSpinner, formClima, inputCiudad, selectPais } from "./modules/VistaHTML.js"
import { validarDatosClima, validarFormularioDelClima } from "./modules/validaciones.js";


document.addEventListener("DOMContentLoaded",  () =>{
    formClima.addEventListener('submit', (evento)=>{
        evento.preventDefault()

        const ciudad = inputCiudad.value;
        const pais = selectPais.value;

        const resultadoValidacionFormulario = validarFormularioDelClima(ciudad, pais);

        if(!resultadoValidacionFormulario.ok){
            desplegarAlertaDeError(resultadoValidacion.mensaje);
        }

        desplegarSpinner();
        obtenerClimaDeLaAPI(ciudad, pais).then(datosClima =>{
            
            const resultadoValidacionDatosClima = validarDatosClima(datosClima);

            if(!resultadoValidacionDatosClima.ok){
                desplegarAlertaDeError(resultadoValidacionDatosClima.mensaje);
                return;
            }

            desplegarDatosClima(datosClima);
        });

    });
})