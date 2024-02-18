const nav = document.querySelector(".navegacion");

nav.addEventListener("click", ()=>{
    console.log("Click en nav");
})

nav.addEventListener("mouseenter", ()=>{
    console.log("entrando en nav");
})

nav.addEventListener("mouseout", ()=>{
    console.log("saliendo de nav");
})

nav.addEventListener("dblclick", ()=>{
    console.log("doble click en nav");
})
