const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio'];

const meses2 = ["Agosto", "Septiembre"];

const meses3 = ["Octubre", "Noviembre", "Diciembre"];

const mesesDelAño = meses.concat(meses2, meses3);

console.log(mesesDelAño);

const mesesSpread = [...meses, ...meses2, ...meses3]

console.log(mesesSpread);