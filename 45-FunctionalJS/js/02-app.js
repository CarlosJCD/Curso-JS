const suma = (a, b) => a + b;
const multiplicar =  (a, b) => a * b;


const operacionA10y20 = fn => fn(10,20);

console.log(operacionA10y20(suma));
console.log(operacionA10y20(multiplicar));