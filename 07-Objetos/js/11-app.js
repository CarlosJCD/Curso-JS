"use strict";

const persona = {
    nombre: "Carlos Javier Calderon Delgado", 
    edad: 20,
    sexo: "masculino",
    obtenerDescripción: function(){
        console.log(`La persona ${this.nombre} tiene una edad de ${this.edad} y pertenece al sexo ${this.sexo}`)
    }
 }

persona.obtenerDescripción();
 