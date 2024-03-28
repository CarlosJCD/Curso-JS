const Persona = {
    nombre: "Carlos Javier Calderon Delgado",
    edad: 20,
    sexo: "masculino",
    estudios: {
        finalizados: ["kinder", "primaria", "secundaria", "preparatoria"],
        enProgreso: {
            nombre: "licenciatura",
            tiempoFaltante: "2 años",
            tiempoTranscurrido: "2 años y medio",
        },
    },
};

const {estudios : { enProgreso : { tiempoFaltante } } } = Persona;

console.log(tiempoFaltante);