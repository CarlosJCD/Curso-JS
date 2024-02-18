const carrito = document.querySelector("#carrito");

const contenedorCarrito = document.querySelector("#lista-carrito tbody")

const listaCursos = document.querySelector("#lista-cursos");

const botonVaciarCarrito = document.querySelector("#vaciar-carrito")

listaCursos.addEventListener("click", event => {
    event.preventDefault();
     
    if(event.target.classList.contains("agregar-carrito")){
        const cardCurso =  event.target.parentElement.parentElement;


        const curso = {
            id: cardCurso.querySelector("a").getAttribute("data-id"),
            nombre: cardCurso.querySelector(".info-card h4").textContent,
            precio: cardCurso.querySelector(".info-card p.precio span").textContent,
            imagen: cardCurso.querySelector("img.imagen-curso").src,
            cantidad: 1
        }

        console.log(curso);

        
    }

})