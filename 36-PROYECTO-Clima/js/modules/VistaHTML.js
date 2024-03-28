const CLASES_TAILWIND_ALERTA_ERROR = ['bg-red-100', "border-red-400", "text-red-700", "px-4", "py-3", "rounded", "relative", "max-w-md", "mx-auto", "mt-6", "text-center" ];

const CLASES_TAILWIND_PARRAFO_NOMBRE_CIUDAD = ['font-bold', 'text-2xl']

const CLASES_TAILWIND_PARRAFO_TEMPERATURA_ACTUAL = ['font-bold', 'text-6xl']

const CLASES_TAILWIN_DIV_DATOS_CLIMA = ['text-center', 'text-white'];

const CLASE_TAILWIND_RANGO_TEMPERATURA = 'text-xl'

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

export function desplegarSpinner() {
    divContenedorResultado.replaceChildren(...[crearDivSpinner()])
}

function crearDivSpinner() {
    const divSpinner = document.createElement('div');

    divSpinner.innerHTML=`
    <div class="sk-circle1 sk-circle"></div>
    <div class="sk-circle2 sk-circle"></div>
    <div class="sk-circle3 sk-circle"></div>
    <div class="sk-circle4 sk-circle"></div>
    <div class="sk-circle5 sk-circle"></div>
    <div class="sk-circle6 sk-circle"></div>
    <div class="sk-circle7 sk-circle"></div>
    <div class="sk-circle8 sk-circle"></div>
    <div class="sk-circle9 sk-circle"></div>
    <div class="sk-circle10 sk-circle"></div>
    <div class="sk-circle11 sk-circle"></div>
    <div class="sk-circle12 sk-circle"></div>
  `;

    console.log(divSpinner);
  return divSpinner;
}

export function desplegarDatosClima(datosClima){
    const {nombreCiudad, temperaturaActual, temperaturaMaxima, temperaturaMinima} = procesarDatosClima(datosClima);

    const divDatosClima = crearDivDatosClima();

    divDatosClima.replaceChildren(...[
        crearParrafoNombreCiudad(nombreCiudad),
        crearParrafoTemperaturaActual(temperaturaActual),
        crearParrafoRangoTemperatura("Max", temperaturaMaxima),
        crearParrafoRangoTemperatura("Min", temperaturaMinima),
    ]);

    divContenedorResultado.replaceChildren(...[divDatosClima]);
}

function procesarDatosClima(datosClima) {
    const { name, main: { temp, temp_max, temp_min } } = datosClima;

    return {
        nombreCiudad: name, 
        temperaturaActual: KelvinACentigrados(temp),
        temperaturaMaxima: KelvinACentigrados(temp_max),
        temperaturaMinima: KelvinACentigrados(temp_min)
    }

}

function KelvinACentigrados(grados) {
    return parseInt( grados - 273.15);
  }

function crearParrafoNombreCiudad(nombreCiudad) {
    const parrafoNombreCiudad = document.createElement('p');
    parrafoNombreCiudad.innerHTML = `Clima en: ${nombreCiudad}`;
    parrafoNombreCiudad.classList.add(...CLASES_TAILWIND_PARRAFO_NOMBRE_CIUDAD);

    return parrafoNombreCiudad;
}

function crearParrafoTemperaturaActual(temperaturaActual) {
    const parrafoTemperaturaActual = document.createElement('p');
    parrafoTemperaturaActual.innerHTML = `${temperaturaActual} &#8451;`;
    parrafoTemperaturaActual.classList.add(...CLASES_TAILWIND_PARRAFO_TEMPERATURA_ACTUAL)
    return parrafoTemperaturaActual;
}

function crearParrafoRangoTemperatura(etiquetaRango ,temperatura) {
    const parrafoRangoTemperatura = document.createElement('p');
    parrafoRangoTemperatura.innerHTML = `${etiquetaRango}: ${temperatura} &#8451;`;
    parrafoRangoTemperatura.classList.add(CLASE_TAILWIND_RANGO_TEMPERATURA)

    return parrafoRangoTemperatura;
}

function crearDivDatosClima() {
    const divDatosClima = document.createElement('div');
    divDatosClima.classList.add(...CLASES_TAILWIN_DIV_DATOS_CLIMA)
    divDatosClima.id = "datosClima";
    return divDatosClima;
}