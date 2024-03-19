/**
 * 
 * @param {Object} cliente 
 * @param {string} cliente.nombre
 * @param {string} cliente.email
 * @param {string} cliente.telefono
 * @param {string} cliente.empresa
*/
export function validarCliente(cliente) {
    if(cliente.nombre === ""){
        return {ok: false, mensaje: "Por favor ingrese el nombre del cliente"}
    }
    if(cliente.email === ""){
        return {ok: false, mensaje: "Por favor ingrese el correo del cliente"}
    }
    if(cliente.telefono === ""){
        return {ok: false, mensaje: "Por favor ingrese el telefono del cliente"}
    }
    if(cliente.empresa === ""){
        return {ok: false, mensaje: "Por favor ingrese el nombre de la empresa"}
    }
    
    return {ok: true}
}