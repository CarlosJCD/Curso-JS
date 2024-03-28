"use strict";

const Persona = {
    nombre: "Carlos Javier Calderon Delgado", 
    edad: 20,
    sexo: "masculino"
 }


 Object.seal(Persona);


 Persona.edad = 20.75


 console.log(Persona);
 
 console.log(Object.isSealed(Persona));
