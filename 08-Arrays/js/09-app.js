const meses = [
    {nombre:"Enero", dias: "30"},
    {nombre: "Febrero", dias: "28"}, 
    {nombre: "Marzo", dias: "31"}, 
    {nombre: "Abril", dias: "30"}, 
    {nombre: "Mayo", dias: "31"}, 
    {nombre: "Junio", dias: "30"}, 
    {nombre: "Julio", dias: "31"}, 
    {nombre: "Agosto", dias: "30"}
];


meses.forEach((mes)=>{
    console.log(`${mes.nombre} tiene ${mes.dias} días`);
})