// El concepto de Hoisting fue pensado como una manera general de referirse a cómo funcionan los contextos de ejecución en JavaScript (específicamente las fases de creación y ejecución)

/**
 * una estricta definición de hoisting sugiere que las declaraciones de variables y funciones son físicamente movidas 
 * al comienzo del código, pero esto no es lo que ocurre en realidad. Lo que sucede es que las declaraciones de variables y 
 * funciones son asignadas en memoria durante la fase de compilación, pero quedan exactamente en dónde las has escrito en el código.
 */


// EN resumen, el orden de escritura de las funciones y sus llamadas no afecta a la ejecucion debido a como el interprete de javascript
// ejecuta el codigo, donde almacena primero las funciones y variables en memoria para posteriormente ejecutar el codigo. 

// Sin embargo para el caso de las "function expressions" ocurre lo contrario, es importante primero declarar la funcion y despues usarla.
// Esto debido a que las function expression son tratadas como valores, funciones anonimas donde el interprete decide no almacenarlo previamente y por lo tanto genera un error durante la ejecución