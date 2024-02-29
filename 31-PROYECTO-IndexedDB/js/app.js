import VistaHTML from "./classes/VistaHTML.js";
import ManejadorCitas from "./classes/ManejadorCitas.js";



export const manejadorCitas = new ManejadorCitas();

let baseDeDatosCitas;

window.onload = () => {
    crearDBCitas();
}

VistaHTML.inputsFormularioCita.forEach(inputFormulario => {
    inputFormulario.addEventListener("change", evento => {
        VistaHTML.citaEnFormulario[evento.target.name] = evento.target.value;
    })
})

VistaHTML.formCita.addEventListener("submit", evento =>{
    evento.preventDefault();

    if(VistaHTML.botonSubmit.textContent === "Editar Cita"){
        manejadorCitas.editarCita(VistaHTML.citaEnFormulario);
        
        editarCitaEnBD(VistaHTML.citaEnFormulario);

        

    } else{
        const alertaValidacion = manejadorCitas.validarDatosCita(VistaHTML.citaEnFormulario);
        
        if(alertaValidacion.tipoDeAlerta === "error"){
            VistaHTML.desplegarAlertaDelFormulario(alertaValidacion);
        } else {
            VistaHTML.citaEnFormulario.citaId = Date.now();
                
            manejadorCitas.agregarCita(VistaHTML.citaEnFormulario);
            
            insertarCitaEnBD(VistaHTML.citaEnFormulario);

            VistaHTML.desplegarCitasEnHTML(baseDeDatosCitas);
            
            VistaHTML.reiniciarFormulario();
        }
    }
})

function crearDBCitas() {
    const dbCitas = window.indexedDB.open("citas",1);
    
    dbCitas.onerror = function() {
        console.log("Ocurrió un error al crear la base de datos");
    }
    
    dbCitas.onsuccess = function(){
        baseDeDatosCitas = dbCitas.result;
        VistaHTML.desplegarCitasEnHTML(baseDeDatosCitas);
    }

    dbCitas.onupgradeneeded = function(e){
        const db = e.target.result;

        const objectStore = db.createObjectStore("citas", {
            keyPath: "citaId",
            autoIncrement: true
        });

        objectStore.createIndex("citaId", "citaId", {unique: true });
         objectStore.createIndex("mascota", "mascota", {unique: false});
         objectStore.createIndex("propietario", "propietario", {unique: false});
         objectStore.createIndex("telefono", "telefono", {unique: false});
         objectStore.createIndex("fecha", "fecha", {unique: false});
         objectStore.createIndex("hora", "hora", {unique: false});
         objectStore.createIndex("sintomas", "sintomas", {unique: false});

    }
}

function insertarCitaEnBD(cita) {
    const transaccionInsertarCita = baseDeDatosCitas.transaction(['citas'], "readwrite")

    const objectStore = transaccionInsertarCita.objectStore("citas");

    objectStore.add(cita);

    transaccionInsertarCita.oncomplete =  function(){
         VistaHTML.desplegarAlertaDelFormulario({mensajeAlerta: "Se agregó la cita correctamente", tipoDeAlerta: "exito" }) 
    }
}

function editarCitaEnBD(citaEditada) {
    const transaccionEditarCita = baseDeDatosCitas.transaction(["citas"],"readwrite");
   const objectStore = transaccionEditarCita.objectStore('citas');
   objectStore.put(citaEditada);

   transaccionEditarCita.oncomplete = ()=>{
        VistaHTML.cambiarTextoBotonACrearCita();

        VistaHTML.desplegarAlertaDelFormulario({mensajeAlerta: "Cita Editada Exitosamente", tipoDeAlerta: "exito"});

        VistaHTML.desplegarCitasEnHTML(baseDeDatosCitas);

        VistaHTML.reiniciarFormulario();
   }

   transaccionEditarCita.onerror = (e)=>{
    console.log(e.target);
     VistaHTML.desplegarAlertaDelFormulario({mensajeAlerta: "Hubo un error al actualizar la cita, por favor intentelo mas tarde", tipoDeAlerta: "error"});
   }
}