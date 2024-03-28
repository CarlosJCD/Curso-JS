/**
 * La coerción es la conversión automática o implicita de valores de un tipo de dato a otro (Ejemplo: de cadena de texto a número). 
 * La conversión es similar a la coerción porque ambas convierten valores de un tipo de dato a otro pero con una diferencia clave - 
 * la coerción es implícita mientras que la conversión puede ser implícita o explícita
 */


//coercion
const a = "12";

const b = 9;

console.log(a + b); // El entero 9 es coercido a string y concatenado con 12, dando de resultado el string "129"

// La principal diferencia entre coercion y conversion es que la coercion siempre va a ser de manera implicita, realizada por
// el interprete, mientras que la conversion puede ser explicita o implicita.