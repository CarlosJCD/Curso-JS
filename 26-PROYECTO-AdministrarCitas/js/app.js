const CLASES_CSS_ALERTA = ["text-center", "alert", "d-block", 'col-12'];

const CLASE_CSS_ALERTA_EXITO = "alert-success";
const CLASE_CSS_ALERTA_ERROR = "alert-danger";
const CLASE_CSS_ALERTA_WARNING = "alert-warning"

const CLASES_CSS_DIV_CITA = ["cita", "p-3"];
const CLASES_CSS_NOMBRE_MASCOTA = ['card-title', 'font-weight-bolder'];
const CLASES_CSS_BOTON_ELIMINAR_CITA = ["btn", "btn-danger", "mr-2"];
const SVG_ELIMINAR_BOTON = '<svg fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>';

const CLASES_CSS_BOTON_EDITAR_CITA = ["btn", "btn-info"];
const SVG_EDITAR_BOTON = '<svg fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"></path></svg>';

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

    static botonSubmit = document.querySelector("button[type='submit']");

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
            
            const divCita = document.createElement("div");
            divCita.classList.add(...CLASES_CSS_DIV_CITA)
            divCita.dataset.id = cita.citaId;
            
            VistaHTML.añadirDatosDeLaCita(cita, divCita);

            VistaHTML.añadirBotonParaEliminarCita(divCita, cita.citaId);

            VistaHTML.añadirBotonParaEditarCita(divCita, cita);

            return divCita;
        })

        this.ulCitas.replaceChildren(...listaCitasHTML);
    }

    static añadirDatosDeLaCita(cita, divCita) {
        const {mascota, propietario, telefono, fecha, hora, sintomas} = cita;

        const h2NombreMascota = document.createElement("H2");
        h2NombreMascota.classList.add(...CLASES_CSS_NOMBRE_MASCOTA);
        h2NombreMascota.innerHTML = `${mascota}`;

        const pNombrePropietario = VistaHTML.crearParrafoDelCampo("Propietario", propietario);

        const pTelefonoPropietario = VistaHTML.crearParrafoDelCampo("Teléfono", telefono);

        const pFechaCita = VistaHTML.crearParrafoDelCampo("Fecha", fecha);

        const pHoraCita = VistaHTML.crearParrafoDelCampo("Hora", hora);

        const pSintomasMascota = VistaHTML.crearParrafoDelCampo("Síntomas", sintomas);

        divCita.appendChild(h2NombreMascota);
        divCita.appendChild(pNombrePropietario);
        divCita.appendChild(pTelefonoPropietario);
        divCita.appendChild(pFechaCita);
        divCita.appendChild(pHoraCita);
        divCita.appendChild(pSintomasMascota);
    }

    static crearParrafoDelCampo(campo, síntomas) {
        const parrafoCampo = document.createElement("p");
        parrafoCampo.innerHTML = `<span class="font-weight-bolder">${campo}: </span> ${síntomas}`;
        return parrafoCampo;
    }

    static añadirBotonParaEliminarCita(divCita, citaId) {
        const btnEliminar = document.createElement("button");
        btnEliminar.classList.add(...CLASES_CSS_BOTON_ELIMINAR_CITA);
        btnEliminar.innerHTML = `Eliminar ${SVG_ELIMINAR_BOTON}`;
        btnEliminar.onclick = () => {
            manejadorCitas.eliminarCita(citaId);
            VistaHTML.desplegarCitasEnHTML(manejadorCitas.citas);
            VistaHTML.desplegarAlertaDelFormulario({mensajeAlerta:"Se eliminó la cita correctamente"});
        };

        divCita.appendChild(btnEliminar);
    }

    
    static añadirBotonParaEditarCita(divCita, cita) {
        const btnEditar = document.createElement("button");
        btnEditar.classList.add(...CLASES_CSS_BOTON_EDITAR_CITA);
        btnEditar.innerHTML = `Editar ${SVG_EDITAR_BOTON}`;
        btnEditar.onclick = () => {
           this.cargarCitaEnFormulario(cita);
           this.cambiarBotonAEditarCita();
        };
        
        divCita.appendChild(btnEditar);
    }

    static cargarCitaEnFormulario(cita){
        this.inputsFormularioCita.forEach(inputFormulario => {
            inputFormulario.value = cita[inputFormulario.name]
        })

        citaEnFormulario = cita;
    }

    static cambiarBotonAEditarCita(){
        this.botonSubmit.textContent = "Editar Cita"
    }

    static cambiarTextoBotonACrearCita(){
        this.botonSubmit.textContent = "Crear Cita"
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

    editarCita(citaEditada = citaEnFormulario){
        this.citas = this.citas.map(cita => cita.citaId === citaEditada.citaId ? citaEditada : cita);
    }

    eliminarCita(citaId){
        this.citas = this.citas.filter(cita => cita.citaId !== citaId);
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

    if(VistaHTML.botonSubmit.textContent === "Editar Cita"){
        manejadorCitas.editarCita(citaEnFormulario);

        VistaHTML.cambiarTextoBotonACrearCita();

        VistaHTML.desplegarCitasEnHTML(manejadorCitas.citas);

        reiniciarFormulario();

    } else{
        const alertaValidacion = manejadorCitas.validarDatosCita();
        
        if(alertaValidacion.tipoDeAlerta === "error"){
            VistaHTML.desplegarAlertaDelFormulario(alertaValidacion);
        } else {
            citaEnFormulario.citaId = Date.now();
                
            manejadorCitas.agregarCita(citaEnFormulario);
        
            VistaHTML.desplegarCitasEnHTML(manejadorCitas.citas);
        
            reiniciarFormulario();
        }
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