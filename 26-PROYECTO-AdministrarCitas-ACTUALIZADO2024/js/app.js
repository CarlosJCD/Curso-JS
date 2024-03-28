import RepositorioCitas from "./modules/RepositorioCitas.js";
import Validaciones from "./modules/Validaciones.js";
import VistaHTML from "./modules/VistaHTML.js";
import Cita from "./types/Cita.js";

let citaFormulario = {...Cita};

VistaHTML.formularioCitasPacientes.addEventListener("submit", procesarDatosCita)

/**
 * 
 * @param {Event} evento 
 */
function procesarDatosCita(evento) {
    evento.preventDefault()
    
    obtenerDatosCita();

    const respuestaValidacion = Validaciones.ValidarCamposCita(citaFormulario);

    if(!respuestaValidacion.Ok){
        VistaHTML.desplegarAlerta("error", respuestaValidacion.mensaje);
        return;
    }
    console.log(citaFormulario);
    if(citaFormulario.id !== 0){
        actualizarCita();
    } else {
        registrarCita();
    }

    desplegarCitasRegistradas();
    reiniciarFormularioCita();
}

function obtenerDatosCita() {
    VistaHTML.CamposFormulario.forEach(almacenarValorDelCampoEnCitaFormulario)
}

function almacenarValorDelCampoEnCitaFormulario(CampoCita) {
    const nombreCampoFormulario = CampoCita.name;
    const valorCampoFormulario = nombreCampoFormulario==="id" ? Number(CampoCita.value): CampoCita.value;

    citaFormulario[nombreCampoFormulario] = valorCampoFormulario
}

function registrarCita() {
    RepositorioCitas.registrarCita(citaFormulario);

    VistaHTML.desplegarAlerta("exito", "Cita Registrada correctamente");
}

function actualizarCita() {
    RepositorioCitas.actualizarCita(citaFormulario);

    VistaHTML.desplegarAlerta("exito", "Cita Actualizada correctamente");
}

function desplegarCitasRegistradas() {
    VistaHTML.desplegarCitasRegistradas(RepositorioCitas.obtenerCitasRegistradas());
}


function reiniciarFormularioCita() {
    VistaHTML.reiniciarFormularioCita()
    citaFormulario = {...Cita};
}