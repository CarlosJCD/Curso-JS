const CLASES_BOOTSTRAP_ALERTA_ERROR = ['invalid-feedback', 'd-block', 'text-center'];

const CLASE_BOOTSTRAP_DISPLAY_NONE = "d-none"

const ID_ALERTA_ERROR = "alertaError";

const divModal = document.getElementById("modal");
const formModal = document.getElementById("formModal");
const inputMesa = document.getElementById("mesa");
const inputHora = document.getElementById("hora");
const buttonGuardarCliente = document.getElementById("guardar-cliente");

function desplegarAlertaError(mensajeAlertaError) {
    if(! alertaErrorExistente()){
        const divAlertaError = construirDivAlertaError(mensajeAlertaError);

        formModal.appendChild(divAlertaError);
        
        setTimeout(() => {
            divAlertaError.remove();
        }, 3000);
    }
}

function alertaErrorExistente() {
    return document.getElementById(ID_ALERTA_ERROR);
}

function construirDivAlertaError(mensajeAlertaError) {
    const divAlertaError = document.createElement('DIV');
    
    divAlertaError.classList.add(...CLASES_BOOTSTRAP_ALERTA_ERROR);
    divAlertaError.id = ID_ALERTA_ERROR;

    divAlertaError.textContent = mensajeAlertaError;

    return divAlertaError;
}

function cerrarModal() {
    const modalBootstrap = bootstrap.Modal.getInstance(divModal);
    modalBootstrap.hide();
}

function revelarSeccionesOcultas() {
    const seccionesOcultas = document.getElementsByClassName(CLASE_BOOTSTRAP_DISPLAY_NONE);
    Array.from(seccionesOcultas).forEach(seccionOculta => seccionOculta.classList.remove(CLASE_BOOTSTRAP_DISPLAY_NONE));
}

export default{
    buttonGuardarCliente,
    inputMesa,
    inputHora,
    desplegarAlertaError,
    cerrarModal,
    revelarSeccionesOcultas
}
