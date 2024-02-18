const carrito = document.querySelector("#carrito");

const contenedorCarrito = document.querySelector("#lista-carrito tbody")

const listaCursos = document.querySelector("#lista-cursos");

const botonVaciarCarrito = document.querySelector("#vaciar-carrito")

listaCursos.addEventListener("click", event => {
    event.preventDefault();
     
    if(event.target.classList.contains("agregar-carrito")){
        console.log("agregando a carrito");
    }

})