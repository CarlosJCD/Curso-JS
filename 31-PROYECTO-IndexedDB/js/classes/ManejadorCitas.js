
export default class ManejadorCitas{
    constructor(){
        this.citas = [];
    }

    validarDatosCita(cita){
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

    agregarCita(cita){
        this.citas.push(cita);
    }

    editarCita(citaEditada = citaEnFormulario){
        this.citas = this.citas.map(cita => cita.citaId === citaEditada.citaId ? citaEditada : cita);
    }

    eliminarCita(citaId){
        this.citas = this.citas.filter(cita => cita.citaId !== citaId);
    }
}
