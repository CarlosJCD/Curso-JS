class VistaHTML{
    static formulario = document.getElementById("agregar-gasto");
    static gastoListado = document.getElementsByClassName("list-group")[0];
}

class GastosSemanales{
    constructor(presupuesto = 0){
        this.presupuesto = Number(presupuesto);
        this.restante = Number(presupuesto);
        this.gastos = [];
    }

    setPresupuesto(presupuesto){
        this.presupuesto = Number(presupuesto);
    }
}

const gastoSemanal = new GastosSemanales();

document.addEventListener("DOMContentLoaded", () => {
    const presupuesto = prompt("Cual es tu presupuesto de esta semana?")

    if(!presupuestoValido(presupuesto)) window.location.reload();


    gastoSemanal.setPresupuesto(presupuesto);
})


function presupuestoValido(presupuesto){
    return presupuesto !== '' && presupuesto !== null && !isNaN(presupuesto) && presupuesto > 0;
}