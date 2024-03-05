import VistaHTMLIndex from "./modules/VistaHTMLIndex.js";
import { crearDBClientes, obtenerClientesDeLaBD } from "./modules/database.js";


document.addEventListener("DOMContentLoaded", () => {
    crearDBClientes();
    obtenerClientesDeLaBD().then(clientes =>{
        VistaHTMLIndex.desplegarClientesEnLaVista(clientes);
    })
})