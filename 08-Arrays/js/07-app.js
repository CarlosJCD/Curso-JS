const meses = ["Enero","Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto"];


const ultimoMesRegistrado = meses.pop();

console.log(meses);

console.log(ultimoMesRegistrado);

const primerMesRegistrado = meses.shift()

console.log(meses);

console.log(primerMesRegistrado);

const periodoVerano = meses.splice(0,5)

console.log(meses);

console.log(periodoVerano);