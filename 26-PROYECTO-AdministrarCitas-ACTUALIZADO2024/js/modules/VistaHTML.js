import Constantes from "./Constantes.js";

import Cita from "../types/Cita.js";
import RepositorioCitas from "./RepositorioCitas.js";

const formularioCitasPacientes = document.getElementById("formulario-cita");
const inputNombrePaciente = document.getElementById("paciente");
const inputNombrePropietario = document.getElementById("propietario");
const inputEmail = document.getElementById("email");
const inputFechaCita = document.getElementById("fecha");
const textAreaSintomasPaciente = document.getElementById("sintomas");
const inputIdCita = document.getElementById("id");
const inputSubmitCita = document.getElementById("submit")

const divContenedorCitas = document.getElementById("citas")

/**
 * 
 * @param {string} tipoDeAlerta 
 * @param {string} mensajeAlerta 
 */
function desplegarAlerta(tipoDeAlerta, mensajeAlerta) {
    if(alertaYaDesplegada()) return;

    const divAlerta = construirAlerta(tipoDeAlerta, mensajeAlerta)

    formularioCitasPacientes.parentElement.insertBefore(divAlerta, formularioCitasPacientes);

    setTimeout(()=>{
        divAlerta.remove();
    }, 3000);
}

/**
 * 
 * @returns {boolean}
 */
function alertaYaDesplegada() {
    return document.getElementById(Constantes.ID_ALERTA_FORMULARIO) !== null;
}

/**
 * 
 * @param {string} tipoDeAlerta 
 * @param {string} mensajeAlerta 
 * 
 * @returns {HTMLDivElement}
 */
function construirAlerta(tipoDeAlerta, mensajeAlerta) {
    const divAlerta = document.createElement("div");
    divAlerta.id = Constantes.ID_ALERTA_FORMULARIO;
    divAlerta.textContent = mensajeAlerta;

    tipoDeAlerta === "error" ? divAlerta.classList.add(...Constantes.CLASES_TAILWIND_ALERTA_ERROR) : divAlerta.classList.add(...Constantes.CLASES_TAILWIND_ALERTA_EXITO);

    return divAlerta;
}

/**
 * 
 * @param {Cita[]} citasRegistradas 
 */
function desplegarCitasRegistradas(citasRegistradas) {
    if(citasRegistradas.length === 0){
        divContenedorCitas.innerHTML = '<p class="text-xl mt-5 mb-10 text-center">No Hay Pacientes</p>';
        return;
    }

    const divsCitas = citasRegistradas.map(construirDivCita);
    divContenedorCitas.replaceChildren(...divsCitas);
}

/**
 * 
 * @param {Cita} cita 
 */
function construirDivCita(cita) {
    const divCita = document.createElement('div');
    divCita.classList.add('mx-5', 'my-10', 'bg-white', 'shadow-md', 'px-5', 'py-10' ,'rounded-xl', 'p-3');

    const paciente = document.createElement('p');
    paciente.classList.add('font-normal', 'mb-3', 'text-gray-700', 'normal-case')
    paciente.innerHTML = `<span class="font-bold uppercase">Paciente: </span> ${cita.paciente}`;

    const propietario = document.createElement('p');
    propietario.classList.add('font-normal', 'mb-3', 'text-gray-700', 'normal-case')
    propietario.innerHTML = `<span class="font-bold uppercase">Propietario: </span> ${cita.propietario}`;

    const email = document.createElement('p');
    email.classList.add('font-normal', 'mb-3', 'text-gray-700', 'normal-case')
    email.innerHTML = `<span class="font-bold uppercase">E-mail: </span> ${cita.email}`;

    const fecha = document.createElement('p');
    fecha.classList.add('font-normal', 'mb-3', 'text-gray-700', 'normal-case')
    fecha.innerHTML = `<span class="font-bold uppercase">Fecha: </span> ${cita.fecha}`;

    const sintomas = document.createElement('p');
    sintomas.classList.add('font-normal', 'mb-3', 'text-gray-700', 'normal-case')
    sintomas.innerHTML = `<span class="font-bold uppercase">Síntomas: </span> ${cita.sintomas}`;

    const btnEditar = document.createElement('button');
    btnEditar.classList.add('py-2', 'px-10', 'bg-indigo-600', 'hover:bg-indigo-700', 'text-white', 'font-bold', 'uppercase', 'rounded-lg', 'flex', 'items-center', 'gap-2');
    btnEditar.innerHTML = 'Editar <svg fill="none" class="h-5 w-5" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"></path></svg>'
    btnEditar.addEventListener("click", () => {cargarCitaEnElFormulario(cita.id)});

    const btnEliminar = document.createElement('button');
    btnEliminar.classList.add('py-2', 'px-10', 'bg-red-600', 'hover:bg-red-700', 'text-white', 'font-bold', 'uppercase', 'rounded-lg', 'flex', 'items-center', 'gap-2');
    btnEliminar.innerHTML = 'Eliminar <svg fill="none" class="h-5 w-5" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>'
    btnEliminar.addEventListener("click", ()=>{
        RepositorioCitas.eliminarCita(cita.id);
        desplegarAlerta("exito", "Cita Eliminada Correctamente")
        desplegarCitasRegistradas(RepositorioCitas.obtenerCitasRegistradas());

    })

    const divContenedorBotones = document.createElement('div');
    divContenedorBotones.classList.add("flex", "justify-between", "mt-10");

    divContenedorBotones.appendChild(btnEditar);
    divContenedorBotones.appendChild(btnEliminar);

    divCita.appendChild(paciente);
    divCita.appendChild(propietario);
    divCita.appendChild(email);
    divCita.appendChild(fecha);
    divCita.appendChild(sintomas);
    divCita.appendChild(divContenedorBotones);
    return divCita;
}


/**
 * 
 * @param {number} idCita 
 */
function cargarCitaEnElFormulario(idCita) {
    const cita = RepositorioCitas.buscarCitaPorId(idCita);

    inputNombrePaciente.value = cita.paciente;
    inputNombrePropietario.value = cita.propietario;
    inputEmail.value = cita.email;
    inputFechaCita.value = cita.fecha;
    textAreaSintomasPaciente.value = cita.sintomas;
    inputIdCita.value = idCita;

    inputSubmitCita.value="Guardar Cambios"
}

function reiniciarFormularioCita() {
    formularioCitasPacientes.reset();
    inputIdCita.value="";
}



export default {
    formularioCitasPacientes,
    CamposFormulario: [inputNombrePaciente, inputNombrePropietario, inputEmail, inputFechaCita, textAreaSintomasPaciente, inputIdCita],
    inputSubmitCita,
    desplegarAlerta,
    desplegarCitasRegistradas,
    reiniciarFormularioCita
};

