/**
 * Pure Functions:
 * 
 * In computer programming, a pure function is a function that has the following properties:
 *      - the function return values are identical for identical arguments (no variation with local static variables, non-local variables, mutable reference arguments or input streams.
 *      - the function has no side effects (no mutation of local static variables, non-local variables, mutable reference arguments or input/output streams).
 */

const duplicar = numero => numero * 2;

const numero = 30;


console.log(duplicar(30));
console.log(numero);