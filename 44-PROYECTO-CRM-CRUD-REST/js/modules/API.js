const POST_ENDPOINT = "http://localhost:4000/clientes";

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
        const resultado = await fetch(POST_ENDPOINT, { 
            method: 'POST', 
            body: JSON.stringify(clienteNuevo),
            headers: {
                "Content-Type": "application/json"
            }
        });
        return resultado

    } catch (error) {
        return {ok: false, mensaje: "Ha ocurrido un error al registrar el cliente, por favor inténtelo mas tarde"}
    }    
}



export default{
    registrarClienteNuevo
}