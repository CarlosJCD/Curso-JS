const listaCarrito = document.querySelector("#carrito");

const contenedorCarrito = document.querySelector("#lista-carrito tbody")

const listaCursos = document.querySelector("#lista-cursos");

const botonVaciarCarrito = document.querySelector("#vaciar-carrito")

let carritoDeCompras = [];

document.addEventListener("DOMContentLoaded", event => {
    const carritoEnLocalStorage = JSON.parse(localStorage.getItem("carrito"));

    if(carritoEnLocalStorage) carritoDeCompras = carritoEnLocalStorage;

    actualizarCarritoEnHTML();
})

listaCursos.addEventListener("click", event => {
    event.preventDefault();
     
    if(event.target.classList.contains("agregar-carrito")){
        const cardCurso =  event.target.parentElement.parentElement;


        const cursoSeleccionado = {
            id: cardCurso.querySelector("a").getAttribute("data-id"),
            titulo: cardCurso.querySelector(".info-card h4").textContent,
            precio: cardCurso.querySelector(".info-card p.precio span").textContent,
            srcImagen: cardCurso.querySelector("img.imagen-curso").src,
            cantidad: 1
        }

        añadirCurso(cursoSeleccionado);
    }

    
})

listaCarrito.addEventListener("click",event =>{
    if(event.target.classList.contains("borrar-curso")){
        const idCursoAEliminar = event.target.getAttribute("data-id");

        carritoDeCompras = carritoDeCompras.filter(curso => curso.id !== idCursoAEliminar);

        actualizarCarritoEnLocalStorage();
        actualizarCarritoEnHTML();
    }
})

botonVaciarCarrito.addEventListener("click", event =>{
    carritoDeCompras = [];
    actualizarCarritoEnLocalStorage();
    actualizarCarritoEnHTML();
})

function añadirCurso(curso) {
        
    if(carritoDeCompras.some(cursoAñadido => cursoAñadido.id === curso.id)){ 
        carritoDeCompras.find(cursoAñadido => cursoAñadido.id === curso.id).cantidad++
    } else{
        carritoDeCompras = [...carritoDeCompras, curso];
    }

    actualizarCarritoEnLocalStorage();
    actualizarCarritoEnHTML();

}

function actualizarCarritoEnHTML() {
    limpiarContenedorCarritoEnHTML();


    carritoDeCompras.forEach(curso => {
        
        const {srcImagen, titulo, precio, cantidad, id} = curso;

        const contenedorCurso = document.createElement("tr");

        const imagenCurso = `<td><img src="${srcImagen}" width='100'></td>`
        const tituloCurso = `<td>${titulo} </td>`
        const precioCurso = `<td>${precio} </td>`
        const cantidadCurso = `<td>${cantidad} </td>`
        const botonBorrarCurso = `<td> <a href='#' class='borrar-curso' data-id='${id}'> X </a></td>`

        contenedorCurso.innerHTML += imagenCurso;
        contenedorCurso.innerHTML += tituloCurso;
        contenedorCurso.innerHTML += precioCurso;
        contenedorCurso.innerHTML += cantidadCurso;
        contenedorCurso.innerHTML += botonBorrarCurso;

        contenedorCarrito.appendChild(contenedorCurso);
    });
}

function limpiarContenedorCarritoEnHTML() {
    while (contenedorCarrito.firstChild) {
        contenedorCarrito.removeChild(contenedorCarrito.firstChild);
    }
}

function actualizarCarritoEnLocalStorage() {
    localStorage.setItem("carrito",JSON.stringify(carritoDeCompras));
}