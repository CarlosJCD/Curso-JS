"use strict";

const persona = {
    nombre: "Carlos Javier Calderon Delgado", 
    edad: 20,
    sexo: "masculino"
 }

 const estudios = {
    finalizados: ["kinder", "primaria", "secundaria", "preparatoria"],
    actual: {
        nombre: "licenciatura",
        tiempoFaltante: "2 años",
        tiempoTranscurrido: "2 años y medio",
    },
}


console.log(Object.assign(persona,estudios));

console.log({...persona, ...estudios});