import VistaHTML from "./classes/VistaHTML.js";
import ManejadorCitas from "./classes/ManejadorCitas.js";



export const manejadorCitas = new ManejadorCitas();


VistaHTML.inputsFormularioCita.forEach(inputFormulario => {
    inputFormulario.addEventListener("change", evento => {
        VistaHTML.citaEnFormulario[evento.target.name] = evento.target.value;
    })
})

VistaHTML.formCita.addEventListener("submit", evento =>{
    evento.preventDefault();

    if(VistaHTML.botonSubmit.textContent === "Editar Cita"){
        manejadorCitas.editarCita(VistaHTML.citaEnFormulario);

        VistaHTML.cambiarTextoBotonACrearCita();

        VistaHTML.desplegarCitasEnHTML(manejadorCitas.citas);

        VistaHTML.reiniciarFormulario();

    } else{
        const alertaValidacion = manejadorCitas.validarDatosCita(VistaHTML.citaEnFormulario);
        
        if(alertaValidacion.tipoDeAlerta === "error"){
            VistaHTML.desplegarAlertaDelFormulario(alertaValidacion);
        } else {
            VistaHTML.citaEnFormulario.citaId = Date.now();
                
            manejadorCitas.agregarCita(VistaHTML.citaEnFormulario);
        
            VistaHTML.desplegarCitasEnHTML(manejadorCitas.citas);
        
            VistaHTML.reiniciarFormulario();
        }
    }
})

