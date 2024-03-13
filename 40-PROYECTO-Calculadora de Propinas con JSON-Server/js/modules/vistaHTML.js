import Platillo from "../types/Platillo.js";
import categorias from "./categorias.js";
import pedido from "./pedido.js";

const CLASES_BOOTSTRAP_ALERTA_ERROR = ['invalid-feedback', 'd-block', 'text-center'];
const CLASES_BOOTSTRAP_DIV_PLATILLO = ['row', 'border-top'];
const CLASES_BOOTSTRAP_DIV_NOMBRE_PLATILLO = ['col-md-4', 'py-3'];
const CLASES_BOOTSTRAP_DIV_PRECIO_PLATILLO = ['col-md-3', 'py-3', 'fw-bold'];
const CLASES_BOOTSTRAP_DIV_CATEGORIA_PLATILLO = ['col-md-3', 'py-3'];
const CLASES_BOOTSTRAP_DIV_AGREGAR_PLATILLO = ['col-md-2', 'py-3'];

const CLASE_BOOTSTRAP_DISPLAY_NONE = "d-none";
const CLASE_BOOTSTRAP_INPUT_CANTIDAD_PLATILLO = "form-control";

const ID_ALERTA_ERROR = "alertaError";

const divModal = document.getElementById("modal");
const formModal = document.getElementById("formModal");
const inputMesa = document.getElementById("mesa");
const inputHora = document.getElementById("hora");
const buttonGuardarCliente = document.getElementById("guardar-cliente");
const contenedorPlatillos = document.getElementById("contenedorPlatillos");

function desplegarAlertaError(mensajeAlertaError) {
    if(! alertaErrorExistente()){
        const divAlertaError = construirDivAlertaError(mensajeAlertaError);

        formModal.appendChild(divAlertaError);
        
        setTimeout(() => {
            divAlertaError.remove();
        }, 3000);
    }
}

function alertaErrorExistente() {
    return document.getElementById(ID_ALERTA_ERROR);
}

function construirDivAlertaError(mensajeAlertaError) {
    const divAlertaError = document.createElement('DIV');
    
    divAlertaError.classList.add(...CLASES_BOOTSTRAP_ALERTA_ERROR);
    divAlertaError.id = ID_ALERTA_ERROR;

    divAlertaError.textContent = mensajeAlertaError;

    return divAlertaError;
}

function cerrarModal() {
    const modalBootstrap = bootstrap.Modal.getInstance(divModal);
    modalBootstrap.hide();
}

function mostrarSeccionesDeLaPagina() {
    const seccionesOcultas = document.getElementsByClassName(CLASE_BOOTSTRAP_DISPLAY_NONE);
    Array.from(seccionesOcultas).forEach(seccionOculta => seccionOculta.classList.remove(CLASE_BOOTSTRAP_DISPLAY_NONE));
}

/**
 * 
 * @param {Platillo[]} platillos 
 */
function desplegarPlatillos(platillos) {
    const divsPlatillos = platillos.map(platillo => construirDivPlatillo(platillo));

    contenedorPlatillos.replaceChildren(...divsPlatillos);
}

/**
 * 
 * @param {Platillo} platillo 
 */
function construirDivPlatillo(platillo) {
    const {nombre, precio, categoria} = platillo
    const divPlatillo = document.createElement('DIV');
    divPlatillo.classList.add(...CLASES_BOOTSTRAP_DIV_PLATILLO);
    
    divPlatillo.appendChild(construirDivNombrePlatillo(nombre));
    divPlatillo.appendChild(construirDivPrecioPlatillo(precio));
    divPlatillo.appendChild(construirDivCategoriaPlatillo(categoria));
    divPlatillo.appendChild(construirDivAgregarPlatillo(platillo));
    
    return divPlatillo;
}

/**
 * 
 * @param {string} nombre 
 */
function construirDivNombrePlatillo(nombre) {
    const divNombre = document.createElement('DIV');
    divNombre.classList.add(...CLASES_BOOTSTRAP_DIV_NOMBRE_PLATILLO);
    divNombre.textContent = nombre;

    return divNombre;
}

/**
 * 
 * @param {string} precio 
 */
function construirDivPrecioPlatillo(precio) {
    const divPrecioPlatillo = document.createElement('DIV');
    divPrecioPlatillo.classList.add(...CLASES_BOOTSTRAP_DIV_PRECIO_PLATILLO);
    divPrecioPlatillo.textContent = `$${precio}`;

    return divPrecioPlatillo;
}

/**
 * 
 * @param {int} numCategoria 
 */
function construirDivCategoriaPlatillo(numCategoria) {
    const divCategoriaPlatillo = document.createElement('DIV');
    divCategoriaPlatillo.classList.add(...CLASES_BOOTSTRAP_DIV_CATEGORIA_PLATILLO);
    divCategoriaPlatillo.textContent = categorias.obtenerCategoria(numCategoria);

    return divCategoriaPlatillo;
}

/**
 * 
 * @param {string} idPlatillo 
 */
function construirDivAgregarPlatillo(idPlatillo) {
    const divAgregarPlatillo = document.createElement('DIV');
    divAgregarPlatillo.classList.add(...CLASES_BOOTSTRAP_DIV_AGREGAR_PLATILLO);
    divAgregarPlatillo.appendChild(construirInputCantidadPlatillo(idPlatillo));

    return divAgregarPlatillo;
}

/**
 * 
 * @param {Platillo} platillo 
 */
function construirInputCantidadPlatillo(platillo) {
    const inputCantidadPlatillo = document.createElement('INPUT');
    inputCantidadPlatillo.type = 'number';
    inputCantidadPlatillo.min = 0;
    inputCantidadPlatillo.value = 0;
    inputCantidadPlatillo.id = `producto-${platillo.id}`;
    inputCantidadPlatillo.classList.add(CLASE_BOOTSTRAP_INPUT_CANTIDAD_PLATILLO);

    inputCantidadPlatillo.addEventListener("change", ()=>{
        const cantidad = parseInt(inputCantidadPlatillo.value);
        
       platillo.cantidad = cantidad;

        pedido.actualizarPlatillosPedidos(platillo);

        console.log(pedido.obtenerPedido().platillos);
    })

    return inputCantidadPlatillo;
}


export default{
    buttonGuardarCliente,
    inputMesa,
    inputHora,
    desplegarAlertaError,
    cerrarModal,
    mostrarSeccionesDeLaPagina,
    desplegarPlatillos
}
