
function Estudiante(nombre, edad, semestreActual, nombreCarrera){
    this.nombre = nombre;
    this.edad = edad;
    this.semestreActual = semestreActual;
    this.nombreCarrera = nombreCarrera;
}

const estudiante = new Estudiante("Carlos Calderon", 20, 6, "Ingeniería de Software");

console.log(estudiante);
