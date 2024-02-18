const enlace = document.createElement("A");

enlace.textContent = "Nuevo Enlace";

enlace.href = "https://www.google.com";

 enlace.target = "_blank";

 const navegacion = document.querySelector(".navegacion")

 navegacion.appendChild(enlace);
 navegacion.insertBefore(enlace, navegacion.children[2]);