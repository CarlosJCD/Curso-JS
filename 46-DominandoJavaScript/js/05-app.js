// Explicit binding es llamado a la accion de establecer de manera explicita el
// contexto de una función cunado es invocada.

// Explicit binding se puede realizar por medio de las funciones nativas 
// call, apply y bind de JS

function saludo(expresionDeSaludo) {
    console.log(`${expresionDeSaludo}, mi nombre es ${this.nombre}`);
}

// Función call()
// recibe el contexto y los parametros separados por comas.
const Carlos = { nombre: "Carlos" }

saludo.call(Carlos, "Hey!");

// Función apply()
// Similar a call(), solamente que es posible pasar los argumentos en forma de lista en lugar de separarlos uno por uno en comas

const Javier = { nombre: "Javier" }

saludo.apply(Javier, ["Que onda!"]);


// Función bind()
// A diferencia de call() o apply(), bind no invoca la función con el contexto y parametros dados, sino que retorna una nueva función con esos datos.

const Poli = { nombre: "Polipocho" }

const saludoDePoli = saludo.bind(Poli, "Hola!");

saludoDePoli();