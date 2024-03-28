import Cliente from "../types/Cliente.js";

const API_ENDPOINT_CLIENTES = "http://localhost:4000/clientes";

/**
 * 
 * @param {Object} clienteNuevo
 * @param {number} clienteNuevo.id 
 * @param {string} clienteNuevo.nombre 
 * @param {string} clienteNuevo.email
 * @param {string} clienteNuevo.telefono
 * @param {string} clienteNuevo.empresa
 */
async function registrarClienteNuevo(clienteNuevo) {
    try {   
        const resultado = await fetch(API_ENDPOINT_CLIENTES, generarPeticion('POST', clienteNuevo));
        return resultado
    } catch (error) {
        console.log(error);
        return {ok: false, mensaje: "Ha ocurrido un error al registrar el cliente, por favor inténtelo mas tarde"}
    }    
}


/**
 * 
 * @returns {Cliente[]} clientes
 */
async function obtenerTodosLosClientes() {
    const resultado = await fetch(API_ENDPOINT_CLIENTES);
    const clientes = await resultado.json();
    return clientes;
}

/**
 * 
 * @param {string} idCliente 
 */
async function obtenerCliente(idCliente) {
  const resultado = await fetch(generarURLDelCliente(idCliente));
  return await resultado.json()
}

/**
 * 
 * @param {Object} cliente
 * @param {string} cliente.id 
 * @param {string} cliente.nombre 
 * @param {string} cliente.email
 * @param {string} cliente.telefono
 * @param {string} cliente.empresa
 */
async function actualizarCliente(cliente) {
    try {
        return await fetch(generarURLDelCliente(cliente.id), generarPeticion('PUT', cliente))
    } catch (error) {
        console.log(error);
        return {ok: false, mensaje: "Ha ocurrido un error al actualizar el cliente, por favor inténtelo más tarde."};
    }

}

/**
 * 
 * @param {string} idCliente 
 */
async function eliminarCliente(idCliente) {
    try {
        return await fetch(generarURLDelCliente(idCliente), generarPeticion('DELETE'));
    } catch (error) {
        console.log(error);
        return { ok: false, mensaje: "Hubo un error al intentar eliminar al cliente, inténtelo más tarde."}
    }
}

/**
 * 
 * @param {string} metodo 
 * @param {Object} cuerpoPeticion 
 */
function generarPeticion(metodo, datosPeticion = null) {
    if (datosPeticion) {
        return { 
            method: metodo, 
            body: JSON.stringify(datosPeticion),
            headers: {
                "Content-Type": "application/json"
            }
        }
    }

    return {method: metodo};
}

function generarURLDelCliente(idCliente) {
    return API_ENDPOINT_CLIENTES + "/" + idCliente
}


export default{
    registrarClienteNuevo,
    obtenerTodosLosClientes,
    obtenerCliente,
    actualizarCliente,
    eliminarCliente
}