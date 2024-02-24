class VistaHTML {
    

    static divContenedorFormulario = document.querySelector(".agregar-cita");

    static formCita = document.getElementById("nueva-cita");

    static inputNombreMascota = document.getElementById("mascota");
    static inputNombrePropietario = document.getElementById("propietario");
    static inputTelefonoPropietario = document.getElementById("telefono");
    static inputFechaDeLaCita = document.getElementById("fecha");
    static inputHoraDeLaCita = document.getElementById("hora");
    static sintomasDeLaMascota = document.getElementById("sintomas");

    static ulCitas = document.getElementById("citas");
    
    static inputsFormularioCita = [inputNombreMascota, inputNombrePropietario, inputTelefonoPropietario, inputFechaDeLaCita, inputHoraDeLaCita, sintomasDeLaMascota];

}

const cita = {    
    mascota: '',
    propietario: '',
    telefono: '',
    fecha: '',
    hora: '',
    sintomas: '',

}

VistaHTML.inputsFormularioCita.forEach(inputFormulario => {
    inputFormulario.addEventListener("change", evento => {
        cita[evento.target.name] = evento.target.value;
    })
})