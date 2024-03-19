import API from "./modules/API.js";
import VistaHTMLIndex from "./modules/VistaHTMLIndex.js";


document.addEventListener("DOMContentLoaded", () => {
    cargarClientesExistentes()

    VistaHTMLIndex.tbodyListadoClientes.addEventListener("click",(e)=>{
        if(e.target.classList.contains("botonEliminar")){
            const idCliente = parseInt(e.target.dataset.cliente);
            eliminarCliente(idCliente);            
        }
    })
});

async function cargarClientesExistentes() {
    const clientes = await API.obtenerTodosLosClientes();
    await VistaHTMLIndex.desplegarClientesEnLaVista(clientes);
}

/**
 * 
 * @param {number} idCliente 
 */
async function eliminarCliente(idCliente) {
   const respuestaEliminarCliente =  await API.eliminarCliente(idCliente);

   if (respuestaEliminarCliente.ok) {
        window.location.reload()
   }
    
}