
const CLASES_CSS_ALERTA = "text-center alert";


const CLASE_CSS_ALERTA_EXITO = "alert-success";
const CLASE_CSS_ALERTA_ERROR = "alert-danger";

class VistaHTML{
    static divContenedorPrimario = document.querySelector(".primario");
    
    static formAgregarGasto = document.getElementById("agregar-gasto");
    static inputNombreGasto = document.getElementById("gasto");
    static inputCantidadGasto = document.getElementById("cantidad");

    static ulGastoListado = document.querySelector("ul.list-group"); 
    static spanPresupuestoInicial = document.getElementById("total")
    static spanPresupuestoRestante = document.getElementById("restante")

    static desplegarPresupuestoInicialYRestante(gastosSemanales){
        this.spanPresupuestoInicial.innerText = gastosSemanales.presupuestoInicial;    
        this.spanPresupuestoRestante.innerText = gastosSemanales.presupuestoRestante;    
    }

    static desplegarAlertaEnFormulario(mensaje, tipoDeAlerta = "error"){
        const divAlerta = document.createElement("div");
        divAlerta.textContent = mensaje;
       
        divAlerta.setAttribute("class", CLASES_CSS_ALERTA); 
        tipoDeAlerta === "error" ? divAlerta.classList.add(CLASE_CSS_ALERTA_ERROR) : divAlerta.classList.add(CLASE_CSS_ALERTA_EXITO);

        this.divContenedorPrimario.insertBefore(divAlerta, this.formAgregarGasto);

        setTimeout(() => {
            divAlerta.remove();
        }, 3000);
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

class Gasto{
    #nombreGasto;
    #cantidadGasto;

    constructor(nombreGasto, cantidadGasto){
        this.#nombreGasto = String(nombreGasto);
        this.#cantidadGasto = Number(cantidadGasto);
        this.alerta = {
            tipoDeAlerta: '',
            mensajeAlerta: ''
        }
    }

    validarDatosDelGasto(){
        
        if(!this.#nombreGasto){
            this.alerta.tipoDeAlerta = "error";
            this.alerta.mensajeAlerta = "Por favor, ingrese un nombre de gasto";
            return false;
        }

        if(!this.#cantidadGasto || this.#cantidadGasto <= 0 || isNaN(this.#cantidadGasto)){
            this.alerta.tipoDeAlerta = "error";
            this.alerta.mensajeAlerta = "Por favor, ingrese una cantidad valida ";
            return false;
        }

        return true;
    }

    obtenerNombreDelGasto(){
        return String(this.#nombreGasto);
    }

    obtenerCantidadDelGasto(){
        return Number(this.#cantidadGasto);
    }

}


const gastoSemanal = new GastosSemanales();

document.addEventListener("DOMContentLoaded", () => {
    const presupuesto = prompt("Cual es tu presupuesto de esta semana?");

    if(!presupuestoValido(presupuesto)) window.location.reload();


    gastoSemanal.setPresupuesto(presupuesto);
    
    
    VistaHTML.desplegarPresupuestoInicialYRestante(gastoSemanal);
})

VistaHTML.formAgregarGasto.addEventListener("submit", evento => {
    evento.preventDefault()

    const nombreGastoNuevo = VistaHTML.inputNombreGasto.value;
    const cantidadGastoNuevo = VistaHTML.inputCantidadGasto.value;

    const nuevoGasto = new Gasto(nombreGastoNuevo, cantidadGastoNuevo);

    if(!nuevoGasto.validarDatosDelGasto()){
        VistaHTML.desplegarAlertaEnFormulario(nuevoGasto.alerta.mensajeAlerta, nuevoGasto.alerta.tipoDeAlerta);
    } else{
        console.log("Desplegando gasto nuevo...");

    }



})


function presupuestoValido(presupuesto){
    return presupuesto !== '' && presupuesto !== null && !isNaN(presupuesto) && presupuesto > 0;
}