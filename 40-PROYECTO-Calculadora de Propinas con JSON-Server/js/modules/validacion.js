import Platillo from "../types/Platillo.js"

/**
 * 
 * @param {Object} cliente 
 * @param {string} cliente.mesa 
 * @param {string} cliente.hora
 * @param {Platillo[]} cliente.pedidos
*/
function validarCliente(cliente) {
    if(cliente.mesa === ""){
        return {Ok: false, mensaje: "Por favor ingrese el numero de mesa"}
    }
    if(cliente.hora === ""){
        return {Ok: false, mensaje: "Por favor ingrese la hora"}
    }

    return {Ok: true, mensaje: ""}
}


export default{
    validarCliente
}