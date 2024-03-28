import Platillo from "../types/Platillo.js";

/**
 * @property {Object} Pedido
 * @property {string} Pedido.mesa
 * @property {string} Pedido.hora
 * @property {Platillo[]} Pedido.platillos
 */
const Pedido = {
    mesa: "",
    hora: "",
    platillos: [] 
}

function establecerMesa(mesa) {
    Pedido.mesa = mesa;
    
}
function establecerHora(hora){
    Pedido.hora = hora;
}

/**
 * 
 * @param {Platillo} platillo 
 */
function actualizarPlatillosPedidos(platillo) {
    if(cantidadPlatilloEn0(platillo.cantidad)){
        if(platilloEnPedido(platillo.id)) eliminarPlatilloDelPedido(platillo.id)
        return;
    } 
    
    if(platilloEnPedido(platillo.id)){
        actualizarCantidadPlatillo(platillo);
        return;
    }

    añadirPlatilloAPedido(platillo);
}

function cantidadPlatilloEn0(cantidadPlatillo) {
    return cantidadPlatillo <= 0;
}

/**
 *  
 * @param {number} idPlatillo 
 */
function platilloEnPedido(idPlatillo) {
    return Pedido.platillos.some(platillo => platillo.id === idPlatillo);
}

/**
 * 
 * @param {number} idPlatilloAEliminar 
 */
function eliminarPlatilloDelPedido(idPlatilloAEliminar) {
    Pedido.platillos = Pedido.platillos.filter(platilloEnPedido => platilloEnPedido.id !== idPlatilloAEliminar)
}

/**
 * 
 * @param {Platillo} platillo 
 */
function actualizarCantidadPlatillo(platilloActualizado){
    for(const platilloPedido of Pedido.platillos){
        if(platilloPedido.id == platilloActualizado.id){
            platilloPedido.cantidad = platilloActualizado.cantidad
            return;
        }
    }
}

/**
 * 
 * @param {Platillo} platillo 
 */
function añadirPlatilloAPedido(platillo){
    Pedido.platillos.push(platillo);
}

/**
 * 
 * @returns {Pedido}
 */
function obtenerPedido() {
    return {...Pedido};
}

/**
 * 
 * @param {number} cantidad 
 * @param {number} precio 
 * @returns 
 */
function calcularSubtotalPlatillo(cantidad, precio) {
    return cantidad * precio;
}

function sinPlatillos() {
    return Pedido.platillos.length <= 0;
}

function calcularCostoTotalDelosPlatillosEnELPedido() {
    return Pedido.platillos.reduce((total, platillo) =>  total += calcularSubtotalPlatillo(platillo.cantidad, platillo.precio),0)
}

export default {
    establecerMesa,
    establecerHora,
    actualizarPlatillosPedidos,
    obtenerPedido,
    calcularSubtotalPlatillo,
    eliminarPlatilloDelPedido,
    sinPlatillos,
    calcularCostoTotalDelosPlatillosEnELPedido,
    Pedido
}