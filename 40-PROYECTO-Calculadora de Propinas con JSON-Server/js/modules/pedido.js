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
    pedido.mesa = mesa;
    
}
function establecerHora(hora){
    pedido.hora = hora;
}

/**
 * 
 * @param {Platillo} platillo 
 */
function actualizarPlatillosPedidos(platillo) {
    if(cantidadPlatilloEn0(platillo.cantidad)){
        if(platilloEnPedido(platillo.id)) eliminarPlatillo(platillo)
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
 * @param {string} idPlatillo 
 */
function platilloEnPedido(idPlatillo) {
    return Pedido.platillos.some(platillo => platillo.id === idPlatillo);
}

/**
 * 
 * @param {Platillo} platilloAEliminar 
 */
function eliminarPlatillo(platilloAEliminar) {
    Pedido.platillos = Pedido.platillos.filter(platilloEnPedido => platilloEnPedido.id !== platilloAEliminar.id)
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

export default {
    establecerMesa,
    establecerHora,
    actualizarPlatillosPedidos,
    obtenerPedido
}