const barraDeBusqueda = document.querySelector(".busqueda");

barraDeBusqueda.addEventListener("keyup", () => { console.log("KeyUp en barra de búsqueda"); })
barraDeBusqueda.addEventListener("keydown", () => { console.log("KeyDown en barra de búsqueda"); })
barraDeBusqueda.addEventListener("blur", () => { console.log("blur en barra de búsqueda"); })
barraDeBusqueda.addEventListener("copy", () => { console.log("texto copiado en la barra de búsqueda"); })
barraDeBusqueda.addEventListener("paste", () => { console.log("texto pegado en la barra de búsqueda"); })
barraDeBusqueda.addEventListener("input", () => { console.log(" Interactuando con la barra de búsqueda"); })
barraDeBusqueda.addEventListener("input", evento => {console.log( evento );})
barraDeBusqueda.addEventListener("input",e => { console.log( e.target.value ); })