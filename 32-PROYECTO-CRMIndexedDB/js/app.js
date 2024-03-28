import VistaHTMLIndex from "./modules/VistaHTMLIndex.js";
import { crearDBClientes, eliminarRegistroCliente, obtenerClientesDeLaBD } from "./modules/database.js";


document.addEventListener("DOMContentLoaded", () => {
    crearDBClientes();
    obtenerClientesDeLaBD().then(clientes =>{
        VistaHTMLIndex.desplegarClientesEnLaVista(clientes);
    })

    VistaHTMLIndex.tbodyListadoClientes.addEventListener("click",(e)=>{
        if(e.target.classList.contains("botonEliminar")){
            const idCliente = parseInt(e.target.dataset.cliente);

            eliminarRegistroCliente(idCliente).then(() => {window.location.reload()}).catch(()=>{  })
        }
    })
    
    
});