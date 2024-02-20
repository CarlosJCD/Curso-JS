localStorage.setItem('nombre', "Carlos");

sessionStorage.setItem("apellido", "Calderon")

const persona = {
    nombre: "Carlos",
    apellido: "Calderon",
    edad: 20
}

localStorage.setItem("persona", JSON.stringify(persona))