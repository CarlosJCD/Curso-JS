const navegacion = document.querySelector('.navegacion');
console.log(navegacion);


console.log(navegacion.childNodes);

console.log(navegacion.children)


console.log(navegacion.children[0].nodeType) 
console.log(navegacion.children[0].nodeName) 



const card = document.querySelector('.card');
console.log(card.nodeType);
console.log(card.nodeName);


console.log(card.children);

console.log(card.children[1]);

console.log(card.children[1].children[1]);

console.log(card.children[1].children[1].textContent);

card.children[1].children[1].textContent = 'Cambiando el Texto con traversing...';



console.log(navegacion.lastChild);
console.log(navegacion.lastElementChild);


console.log(navegacion.firstChild);
console.log(navegacion.firstElementChild);

navegacion.firstElementChild.textContent = 'Nuevo Enlace...';



const enlace = document.querySelector('a');
console.log(enlace);


console.log(enlace.parentNode)
console.log(enlace.parentElement)
console.log(enlace.parentElement.parentElement)

console.log(enlace.nextElementSibling);
console.log(enlace.nextElementSibling.nextElementSibling);
console.log(card.nextElementSibling);

const ultimoCard = document.querySelector('.card:nth-child(4)');
console.log(ultimoCard)

console.log(ultimoCard.previousElementSibling);