"use strict";

const Persona = {
    nombre: "Carlos Javier Calderon Delgado", 
    edad: 20,
    sexo: "masculino"
 }

 Object.freeze(Persona);

// delete Persona.edad;

 console.log(Persona);
 
 console.log(Object.isFrozen(Persona));

 