class VistaHTML{
    static formAgregarGasto = document.getElementById("agregar-gasto");
    static ulGastoListado = document.querySelector("ul.list-group"); 
    static spanPresupuestoInicial = document.getElementById("total")
    static spanPresupuestoRestante = document.getElementById("restante")

    static desplegarPresupuestoInicialYRestante(gastosSemanales){
        this.spanPresupuestoInicial.innerText = gastosSemanales.presupuestoInicial;    
        this.spanPresupuestoRestante.innerText = gastosSemanales.presupuestoRestante;    
    }
}

class GastosSemanales{
    constructor(presupuestoInicial = 0){
        this.presupuestoInicial = Number(presupuestoInicial);
        this.presupuestoRestante = Number(presupuestoInicial);
        this.gastos = [];
    }
    
    setPresupuesto(presupuestoInicial){
        this.presupuestoInicial = Number(presupuestoInicial);
        this.presupuestoRestante = Number(presupuestoInicial);
    }
}

const gastoSemanal = new GastosSemanales();

document.addEventListener("DOMContentLoaded", () => {
    const presupuesto = prompt("Cual es tu presupuesto de esta semana?");

    if(!presupuestoValido(presupuesto)) window.location.reload();


    gastoSemanal.setPresupuesto(presupuesto);
    
    
    VistaHTML.desplegarPresupuestoInicialYRestante(gastoSemanal);
})


function presupuestoValido(presupuesto){
    return presupuesto !== '' && presupuesto !== null && !isNaN(presupuesto) && presupuesto > 0;
}