import VistaHTMLFormularioCliente from "./modules/VistaHTMLFormularioCliente.js";
import { obtenerClientePorId } from "./modules/database.js";

document.addEventListener("DOMContentLoaded",()=>{
    const urlSearchParams = new URLSearchParams(window.location.search);

    const idCliente = parseInt(urlSearchParams.get("id"))
    if(idCliente){
        obtenerClientePorId(idCliente).then(cliente=>{
            VistaHTMLFormularioCliente.desplegarClienteEnELFormulario(cliente);
        }).catch(() => {window.location.href = "index.html"})
    } else{
        window.location.href = "index.html"
    }
})