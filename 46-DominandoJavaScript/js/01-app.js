//scope global
let nombre= "juan";

function nombre() {
    //scope local
    let nombre2 = "Carlos"
}

console.log(nombre); // la variable se encuentra en un scope global, un alcance desde cualquier parte del codigo.
console.log(nombre2); // la vairable se encuentra en scope local o de bloque, donde solamente se puede acceder dentro del bloque donde es declarado o bloques subyacentes.

// el scope local en js se aplica en declaracion de funciones o cualquier estrucutra de control.