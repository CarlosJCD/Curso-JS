
const CLASES_CSS_ALERTA = "text-center alert";
const CLASES_CSS_LI_GASTO = "list-group-item d-flex justify-content-between align-items-center"
const CLASES_CSS_BOTON_ELIMINAR_GASTO = "btn btn-danger borrar-gasto"

const CLASE_CSS_ALERTA_EXITO = "alert-success";
const CLASE_CSS_ALERTA_ERROR = "alert-danger";
const CLASE_CSS_ALERTA_WARNING = "alert-warning"

class VistaHTML{
    static divContenedorPrimario = document.querySelector(".primario");
    
    static formAgregarGasto = document.getElementById("agregar-gasto");
    static inputNombreGasto = document.getElementById("gasto");
    static inputCantidadGasto = document.getElementById("cantidad");

    static ulGastoListado = document.querySelector("ul.list-group"); 
    static spanPresupuestoInicial = document.getElementById("total")
    
    static divPresupuestoRestante = document.querySelector(".restante");
    static spanPresupuestoRestante = document.getElementById("restante");


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

    static actualizarVistaDeGastos(gastosSemanales){
        const {presupuestoInicial, presupuestoRestante} = gastosSemanales

        this.actualizarGastosDesplegados(gastosSemanales);
        this.actualizarPresupuestoRestanteDesplegado(presupuestoInicial, presupuestoRestante);

    }

    static actualizarGastosDesplegados(gastoSemanal){

        const nuevosGastosHTML = gastoSemanal.gastos.map(gasto => {
            const liGasto = document.createElement("li");
            liGasto.setAttribute("class", CLASES_CSS_LI_GASTO);
            liGasto.dataset.id = gasto.obtenerIdDelGasto();

            liGasto.innerHTML = `
            ${gasto.obtenerNombreDelGasto()}
            <span class="badge badge-primary badge-pill">$ ${gasto.obtenerCantidadDelGasto()}</span>
            `

            const botonBorrarGasto = document.createElement('button');
            
            botonBorrarGasto.setAttribute("class", CLASES_CSS_BOTON_ELIMINAR_GASTO);
            botonBorrarGasto.innerHTML = 'Borrar &times';
            botonBorrarGasto.onclick = ()=>{
                gastoSemanal.eliminarGasto(gasto.obtenerIdDelGasto());
                VistaHTML.actualizarVistaDeGastos(gastoSemanal);
            }

            liGasto.appendChild(botonBorrarGasto);
            
            return liGasto;
        });
        VistaHTML.ulGastoListado.replaceChildren(...nuevosGastosHTML);

    }

    static actualizarPresupuestoRestanteDesplegado(presupuestoInicial, presupuestoRestante){
        VistaHTML.spanPresupuestoRestante.textContent = presupuestoRestante;

        if(presupuestoRestante <= (presupuestoInicial / 4)){
            VistaHTML.divPresupuestoRestante.classList.remove(CLASE_CSS_ALERTA_EXITO);
            VistaHTML.divPresupuestoRestante.classList.add(CLASE_CSS_ALERTA_ERROR);
        } else if(presupuestoRestante <= (presupuestoInicial / 2)){
            VistaHTML.divPresupuestoRestante.classList.remove(CLASE_CSS_ALERTA_EXITO);
            this.divPresupuestoRestante.classList.add(CLASE_CSS_ALERTA_WARNING);
        } else {
            VistaHTML.divPresupuestoRestante.classList.remove(CLASE_CSS_ALERTA_ERROR, CLASE_CSS_ALERTA_WARNING);
            VistaHTML.divPresupuestoRestante.classList.add(CLASE_CSS_ALERTA_EXITO);
        }
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

    agregarGasto(gastoNuevo){

        const presupuestoRestanteNuevo = this.presupuestoRestante - gastoNuevo.obtenerCantidadDelGasto();

        if(presupuestoRestanteNuevo < 0){
            VistaHTML.desplegarAlertaEnFormulario("La cantidad del gasto excede el presupuesto restante", "error");
            return false;
        } else{
            this.gastos.push(gastoNuevo);
            this.presupuestoRestante = presupuestoRestanteNuevo;
            return true;
        }
    }

    eliminarGasto(idGasto){
        const gastoAEliminar = this.gastos.find(gasto => gasto.obtenerIdDelGasto() === idGasto )

        this.presupuestoRestante+= gastoAEliminar.obtenerCantidadDelGasto();

        this.gastos = this.gastos.filter(gasto => gasto.obtenerIdDelGasto() !== idGasto );
    }

    obtenerGastos(){
        return [...this.gastos];
    }
}

class Gasto{
    #gastoId;
    #nombreGasto;
    #cantidadGasto;

    constructor(nombreGasto, cantidadGasto){
        this.#gastoId = Date.now();
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

    obtenerIdDelGasto(){
        return this.#gastoId;
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

    const gastoNuevo = new Gasto(nombreGastoNuevo, cantidadGastoNuevo);

    if(!gastoNuevo.validarDatosDelGasto()){
        VistaHTML.desplegarAlertaEnFormulario(gastoNuevo.alerta.mensajeAlerta, gastoNuevo.alerta.tipoDeAlerta);
    } else{
        let gastoAgregado = gastoSemanal.agregarGasto(gastoNuevo);
        
        if(gastoAgregado){
            VistaHTML.desplegarAlertaEnFormulario("Gasto Agregado Correctamente", "éxito");
            VistaHTML.actualizarVistaDeGastos(gastoSemanal);
            VistaHTML.formAgregarGasto.reset();
        }
    }



})


function presupuestoValido(presupuesto){
    return presupuesto !== '' && presupuesto !== null && !isNaN(presupuesto) && presupuesto > 0;
}