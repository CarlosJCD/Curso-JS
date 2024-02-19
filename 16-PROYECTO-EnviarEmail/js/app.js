 
 const inputEmail = document.querySelector("#email");
 const inputAsunto = document.querySelector("#asunto");
 const inputMensaje = document.querySelector("#mensaje");

 const botónEnviarFormulario = document.querySelectorAll("button")[0];
 const botónResetFormulario = document.querySelectorAll("button")[1];

inputEmail.addEventListener("blur", event => {
    if(esVacío(event.target.value)) console.log("Email vacio");
})

inputAsunto.addEventListener("blur", event => {
    if(esVacío(event.target.value)) console.log("Asunto vacio");
})

inputMensaje.addEventListener("blur", event => {
    if(esVacío(event.target.value)) console.log("Mensaje vacio");
})



function validarEmail(email) {
    
}

function esVacío(texto) {
    return texto.trim() === "";
}