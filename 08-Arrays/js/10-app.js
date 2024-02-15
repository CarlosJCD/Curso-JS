const meses = [
    {nombre:"Enero", dias: ""},
    {nombre: "Febrero", dias: "28"}, 
    {nombre: "Marzo", dias: "31"}, 
    {nombre: "Abril", dias: ""}, 
    {nombre: "Mayo", dias: "31"}, 
    {nombre: "Junio", dias: ""}, 
    {nombre: "Julio", dias: "31"}, 
    {nombre: "Agosto", dias: ""}
];

const mesesConDias = meses.map((mes) => {
    if(mes.dias === ""){
        mes.dias = (meses.indexOf(mes) + 1) % 2 === 0 ? "30" : "31";
    } 
    return mes;
})

console.log(mesesConDias);