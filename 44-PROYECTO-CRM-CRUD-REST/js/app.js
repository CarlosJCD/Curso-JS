import VistaHTMLIndex from "./modules/VistaHTMLIndex.js";


document.addEventListener("DOMContentLoaded", () => {

    VistaHTMLIndex.tbodyListadoClientes.addEventListener("click",(e)=>{
        if(e.target.classList.contains("botonEliminar")){
            const idCliente = parseInt(e.target.dataset.cliente);

            eliminarRegistroCliente(idCliente).then(() => {window.location.reload()}).catch(()=>{  })
        }
    })
    
    
});