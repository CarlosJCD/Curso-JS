
const persona = {
    nombre: "Carlos Javier Calderon Delgado", 
    edad: 20,
    sexo: "masculino",
    obtenerDescripción: function(){
        console.log(`La persona ${this.nombre} tiene una edad de ${this.edad} y pertenece al sexo ${this.sexo}`)
    }
 }

console.log(Object.keys(persona));

console.log (Object.values(persona));

console.log (Object.entries(persona));