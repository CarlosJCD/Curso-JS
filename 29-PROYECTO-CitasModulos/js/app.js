import { VistaHTML } from "./VistaHTML";
import { ManejadorCitas } from "./ManejadorCitas";



const manejadorCitas = new ManejadorCitas();


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

        reiniciarFormulario();

    } else{
        const alertaValidacion = manejadorCitas.validarDatosCita();
        
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

