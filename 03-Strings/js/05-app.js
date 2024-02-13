const nombreCompleto = "Carlos Javier Calderon Delgado";

console.log(`Nombre sin apellido paterno: ${nombreCompleto.replace("Calderon","")}`);
console.log(`Nombre con 3 nombres: ${nombreCompleto.replace("Carlos","Carlos Alberto")}`);

console.log(`Nombre sin apellidos: ${nombreCompleto.slice(0, 12)}`);
