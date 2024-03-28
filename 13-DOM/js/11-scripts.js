const btnFlotante = document.querySelector(".btn-flotante");
const footer = document.querySelector(".footer")

btnFlotante.addEventListener("click",()=>{
    toggleClass(footer, "activo");
    
    toggleFloatingButton();

})

function toggleClass(node, className) {
    const nodeClassList = node.classList;

    nodeClassList.contains(className) ? node.classList.remove(className) : node.classList.add(className);
}

function toggleFloatingButton(){
    toggleClass(btnFlotante, "activo");

    btnFlotante.classList.contains("activo") ? btnFlotante.textContent = "X Cerrar" : btnFlotante.textContent = "Idioma y Moneda";
}