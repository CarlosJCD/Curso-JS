 
 const formulario = document.querySelector("#formulario");

 const inputEmail = document.querySelector("#email");
 const inputAsunto = document.querySelector("#asunto");
 const inputMensaje = document.querySelector("#mensaje");

 const botónEnviarFormulario = document.querySelectorAll("button")[0];
 const botónResetFormulario = document.querySelectorAll("button")[1];

 const spinner = document.querySelector("#spinner");

 const CLASES_CSS_ALERTA_ERROR = "bg-red-600 text-white p-2 text-center";
 const CLASE_CSS_BOTÓN_DESACTIVADO = "opacity-50";

 const SELECTOR_CSS_ALERTA_ERROR = "p#error";

 const REGEX_EMAIL = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;

 const INPUT_EMAIL_ID = "email";

 let correoAEnviar = {
    email: "",
    asunto: "",
    mensaje: ""
 }

inputEmail.addEventListener("blur", event => {
    validarInput(event.target);
    actualizarEstadoBotónEnviar();
})

inputAsunto.addEventListener("blur", event => {
    validarInput(event.target);
    actualizarEstadoBotónEnviar();
})

inputMensaje.addEventListener("blur", event => {
    validarInput(event.target);
    actualizarEstadoBotónEnviar();
})

botónResetFormulario.addEventListener("click", () => {
    reiniciarFormulario();
})

formulario.addEventListener("submit", event => {
    event.preventDefault();

    spinner.classList.add("flex");
    spinner.classList.remove("hidden");
    
    setTimeout(() => {
        spinner.classList.add("hidden");
        spinner.classList.remove("flex");
        reiniciarFormulario();
    }, 3000);

})

function reiniciarFormulario() {
    formulario.reset();
    reiniciarCorreoAEnviar();
}

function validarInput(input) {   
    
    if (esVacío(input.value)) {
        desplegarAlertaError(input.parentElement, `El ${input.id} es obligatorio`)

    } else if(input.id === INPUT_EMAIL_ID && !validarEmail(input.value)){
        desplegarAlertaError(input.parentElement, `Ingrese un email valido`)
        
    } else {
        let alertaError = input.parentElement.querySelector(SELECTOR_CSS_ALERTA_ERROR);
        if(alertaError) alertaError.remove();
    }

    correoAEnviar[input.id] = input.value;
}

function validarEmail(email) {
    return REGEX_EMAIL.test(email);
}

function esVacío(texto) {
    return texto.trim() === "";
}

function desplegarAlertaError(nodoHTML, mensajeError) {
    const alertaErrorAnterior = nodoHTML.querySelector(SELECTOR_CSS_ALERTA_ERROR);

    if(alertaErrorAnterior){ 
        alertaErrorAnterior.innerText = mensajeError;
    } else{
        const alertaError = document.createElement("P");
        
        alertaError.textContent = mensajeError;
        alertaError.setAttribute("class", CLASES_CSS_ALERTA_ERROR);
        alertaError.id = "error";

        nodoHTML.appendChild(alertaError);
    }

}

function actualizarEstadoBotónEnviar() {

    if(hayErrores()){
        desactivarBotónEnviarFormulario();
    } else {
        activarBotónEnviarFormulario();
    }
}

function hayErrores() {
    return document.querySelectorAll(SELECTOR_CSS_ALERTA_ERROR).length !== 0;
}

function desactivarBotónEnviarFormulario() {
    botónEnviarFormulario.disabled = true;
    botónEnviarFormulario.classList.add(CLASE_CSS_BOTÓN_DESACTIVADO);
}

function activarBotónEnviarFormulario() {
    botónEnviarFormulario.disabled = false;
    botónEnviarFormulario.classList.remove(CLASE_CSS_BOTÓN_DESACTIVADO);
}

function reiniciarCorreoAEnviar() {
    correoAEnviar = {
        email: "",
        asunto: "",
        mensaje: ""
    }
}