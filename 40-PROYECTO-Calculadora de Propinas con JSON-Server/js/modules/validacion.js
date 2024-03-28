import Platillo from "../types/Platillo.js"

/**
 * 
 * @param {Object} pedido 
 * @param {string} pedido.mesa 
 * @param {string} pedido.hora
 * @param {Platillo[]} pedido.platillos
*/
function validarPedido(pedido) {
    if(pedido.mesa === ""){
        return {Ok: false, mensaje: "Por favor ingrese el numero de mesa"}
    }
    if(pedido.hora === ""){
        return {Ok: false, mensaje: "Por favor ingrese la hora"}
    }

    return {Ok: true, mensaje: ""}
}


export default{
    validarPedido
}