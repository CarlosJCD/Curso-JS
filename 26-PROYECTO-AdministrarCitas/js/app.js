const CLASES_CSS_ALERTA = ["text-center", "alert", "d-block", 'col-12'];

const CLASE_CSS_ALERTA_EXITO = "alert-success";
const CLASE_CSS_ALERTA_ERROR = "alert-danger";
const CLASE_CSS_ALERTA_WARNING = "alert-warning"

class VistaHTML {
    
    static divContenido = document.getElementById("contenido");

    static divContenedorFormulario = document.querySelector(".agregar-cita");

    static formCita = document.getElementById("nueva-cita");

    static inputNombreMascota = document.getElementById("mascota");
    static inputNombrePropietario = document.getElementById("propietario");
    static inputTelefonoPropietario = document.getElementById("telefono");
    static inputFechaDeLaCita = document.getElementById("fecha");
    static inputHoraDeLaCita = document.getElementById("hora");
    static inputSintomasDeLaMascota = document.getElementById("sintomas");

    static ulCitas = document.getElementById("citas");
    
    static inputsFormularioCita = [this.inputNombreMascota, this.inputNombrePropietario, this.inputTelefonoPropietario, this.inputFechaDeLaCita, this.inputHoraDeLaCita, this.inputSintomasDeLaMascota];

    static desplegarAlertaDelFormulario(alertaValidacion){
        const divAlerta = document.createElement("div");
        divAlerta.textContent = alertaValidacion.mensajeAlerta;
       
        divAlerta.classList.add(...CLASES_CSS_ALERTA); 

        alertaValidacion.tipoDeAlerta === "error" ? divAlerta.classList.add(CLASE_CSS_ALERTA_ERROR) : divAlerta.classList.add(CLASE_CSS_ALERTA_EXITO);

        this.divContenido.insertBefore(divAlerta, this.divContenedorFormulario);

        setTimeout(() => {
            divAlerta.remove();
        }, 3000);
    }

    static desplegarCitasEnHTML(citas = manejadorCitas.citas){
        const listaCitasHTML = citas.map(cita => {

            const liCita = document.createElement("li");


        })

        this.ulCitas.replaceChildren(...listaCitasHTML);
    }

}

class ManejadorCitas{
    constructor(){
        this.citas = [];
    }

    validarDatosCita(cita = citaEnFormulario){
        const datosCita = Object.values(cita);
        const alertaValidacion = {mensajeAlerta:"Cita registrada con éxito", tipoDeAlerta:"éxito"}

        for(const datoCita of datosCita){
            if(datoCita === ""){
                alertaValidacion.mensajeAlerta = "Por favor, llene todos los campos del formulario";
                alertaValidacion.tipoDeAlerta = "error";
                return alertaValidacion;
            }
        }

        return alertaValidacion;
    }

    agregarCita(cita = citaEnFormulario){
        this.citas.push(cita);
    }
}

const manejadorCitas = new ManejadorCitas();

let citaEnFormulario = {    
    mascota: '',
    propietario: '',
    telefono: '',
    fecha: '',
    hora: '',
    sintomas: '',

}

VistaHTML.inputsFormularioCita.forEach(inputFormulario => {
    inputFormulario.addEventListener("change", evento => {
        citaEnFormulario[evento.target.name] = evento.target.value;
    })
})

VistaHTML.formCita.addEventListener("submit", evento =>{
    evento.preventDefault();

    const alertaValidacion = manejadorCitas.validarDatosCita();

    if(alertaValidacion.tipoDeAlerta === "error"){
        VistaHTML.desplegarAlertaDelFormulario(alertaValidacion);
    } else {
        citaEnFormulario.citaId = Date.now();
        
        manejadorCitas.agregarCita(citaEnFormulario);

        VistaHTML.desplegarCitasEnHTML(manejadorCitas.citas);

        reiniciarFormulario();

    }

    
    
})

function reiniciarFormulario() {
    VistaHTML.formCita.reset();
    citaEnFormulario = {    
        mascota: '',
        propietario: '',
        telefono: '',
        fecha: '',
        hora: '',
        sintomas: '',
    }
}