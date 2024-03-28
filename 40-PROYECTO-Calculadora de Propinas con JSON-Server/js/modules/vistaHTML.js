import Platillo from "../types/Platillo.js";
import categorias from "./categorias.js";
import pedido from "./pedido.js";
import constantes from "./constantes.js";

const divModal = document.getElementById("modal");
const formModal = document.getElementById("formModal");
const inputMesa = document.getElementById("mesa");
const inputHora = document.getElementById("hora");
const buttonGuardarCliente = document.getElementById("guardar-cliente");
const contenedorPlatillos = document.getElementById("contenedorPlatillos");
const divResumenPedido = document.getElementById("contenedorResumen")

function desplegarAlertaError(mensajeAlertaError) {
    if(! alertaErrorExistente()){
        const divAlertaError = construirDivAlertaError(mensajeAlertaError);

        formModal.appendChild(divAlertaError);
        
        setTimeout(() => {
            divAlertaError.remove();
        }, 3000);
    }
}

function alertaErrorExistente() {
    return document.getElementById(constantes.ID_ALERTA_ERROR);
}

function construirDivAlertaError(mensajeAlertaError) {
    const divAlertaError = document.createElement('DIV');
    
    divAlertaError.classList.add(...constantes.CLASES_BOOTSTRAP_ALERTA_ERROR);
    divAlertaError.id = constantes.ID_ALERTA_ERROR;

    divAlertaError.textContent = mensajeAlertaError;

    return divAlertaError;
}

function cerrarModal() {
    const modalBootstrap = bootstrap.Modal.getInstance(divModal);
    modalBootstrap.hide();
}

function mostrarSeccionesDeLaPagina() {
    const seccionesOcultas = document.getElementsByClassName(constantes.CLASE_BOOTSTRAP_DISPLAY_NONE);
    Array.from(seccionesOcultas).forEach(seccionOculta => seccionOculta.classList.remove(constantes.CLASE_BOOTSTRAP_DISPLAY_NONE));
}

/**
 * 
 * @param {Platillo[]} platillos 
 */
function desplegarPlatillos(platillos) {
    const divsPlatillos = platillos.map(platillo => construirDivPlatillo(platillo));

    contenedorPlatillos.replaceChildren(...divsPlatillos);
}

/**
 * 
 * @param {Platillo} platillo 
 */
function construirDivPlatillo(platillo) {
    const {nombre, precio, categoria} = platillo
    const divPlatillo = document.createElement('DIV');
    divPlatillo.classList.add(...constantes.CLASES_BOOTSTRAP_DIV_PLATILLO);
    
    divPlatillo.appendChild(construirDivNombrePlatillo(nombre));
    divPlatillo.appendChild(construirDivPrecioPlatillo(precio));
    divPlatillo.appendChild(construirDivCategoriaPlatillo(categoria));
    divPlatillo.appendChild(construirDivAgregarPlatillo(platillo));
    
    return divPlatillo;
}

/**
 * 
 * @param {string} nombre 
 */
function construirDivNombrePlatillo(nombre) {
    const divNombre = document.createElement('DIV');
    divNombre.classList.add(...constantes.CLASES_BOOTSTRAP_DIV_NOMBRE_PLATILLO);
    divNombre.textContent = nombre;

    return divNombre;
}

/**
 * 
 * @param {string} precio 
 */
function construirDivPrecioPlatillo(precio) {
    const divPrecioPlatillo = document.createElement('DIV');
    divPrecioPlatillo.classList.add(...constantes.CLASES_BOOTSTRAP_DIV_PRECIO_PLATILLO);
    divPrecioPlatillo.textContent = `$${precio}`;

    return divPrecioPlatillo;
}

/**
 * 
 * @param {int} numCategoria 
 */
function construirDivCategoriaPlatillo(numCategoria) {
    const divCategoriaPlatillo = document.createElement('DIV');
    divCategoriaPlatillo.classList.add(...constantes.CLASES_BOOTSTRAP_DIV_CATEGORIA_PLATILLO);
    divCategoriaPlatillo.textContent = categorias.obtenerCategoria(numCategoria);

    return divCategoriaPlatillo;
}

/**
 * 
 * @param {string} idPlatillo 
 */
function construirDivAgregarPlatillo(idPlatillo) {
    const divAgregarPlatillo = document.createElement('DIV');
    divAgregarPlatillo.classList.add(...constantes.CLASES_BOOTSTRAP_DIV_AGREGAR_PLATILLO);
    divAgregarPlatillo.appendChild(construirInputCantidadPlatillo(idPlatillo));

    return divAgregarPlatillo;
}

/**
 * 
 * @param {Platillo} platillo 
 */
function construirInputCantidadPlatillo(platillo) {
    const inputCantidadPlatillo = document.createElement('INPUT');
    inputCantidadPlatillo.type = 'number';
    inputCantidadPlatillo.min = 0;
    inputCantidadPlatillo.value = 0;
    inputCantidadPlatillo.id = `platillo-${platillo.id}`;
    inputCantidadPlatillo.classList.add(constantes.CLASE_BOOTSTRAP_INPUT_CANTIDAD_PLATILLO);

    inputCantidadPlatillo.addEventListener("change", ()=>{
        const cantidad = parseInt(inputCantidadPlatillo.value);
        
        platillo.cantidad = cantidad;

        pedido.actualizarPlatillosPedidos(platillo);
        
        actualizarResumenDesplegadoDelPedido();
    })

    return inputCantidadPlatillo;
}

function actualizarResumenDesplegadoDelPedido() {
    if(pedido.sinPlatillos()){
        desplegarMensajePedidoVacio()
    } else{
        const divContenedorResumenPedido = construirDivContenedorResumenPedido(pedido.obtenerPedido());
        const divFormularioPropinas = construirDivFormularioPropinas();
        divResumenPedido.replaceChildren(...[divContenedorResumenPedido, divFormularioPropinas]);
    }

}

/**
 * 
 * @param {Object} pedido 
 * @param {string} pedido.mesa
 * @param {string} pedido.hora
 * @param {Platillo[]} pedido.platillos
 */
function construirDivContenedorResumenPedido(pedido) {
    const {mesa, hora, platillos} = pedido

    const divContenedorResumenPedido = document.createElement("div");
    divContenedorResumenPedido.classList.add(...constantes.CLASES_BOOTSTRAP_DIV_CONTENEDOR_RESUMEN_PEDIDO);

    divContenedorResumenPedido.appendChild(construirH3EncabezadoResumenPedido("Platillos Pedidos"));
    divContenedorResumenPedido.appendChild(construirParrafoConSpanParaResumenPedido("Mesa: ", mesa))
    divContenedorResumenPedido.appendChild(construirParrafoConSpanParaResumenPedido("Hora: ", hora))
    divContenedorResumenPedido.appendChild(construirUlListaPlatillosPedidos(platillos));


    return divContenedorResumenPedido;
}

function construirParrafoConSpanParaResumenPedido(contenidoParrafo, contenidoSpan) {
    const parrafo = document.createElement("p");
    parrafo.textContent = contenidoParrafo;
    parrafo.classList.add(...constantes.CLASE_BOOTSTRAP_PARRAFO_PEDIDO);

    const span = document.createElement("span");
    span.textContent = contenidoSpan;
    span.classList.add(...constantes.CLASE_BOOTSTRAP_SPAN_RESUMEN_PEDIDO);

    parrafo.appendChild(span);

    return parrafo;
}

function construirH3EncabezadoResumenPedido(textoEncabezado) {
    const h3EncabezadoPlatillosPedidos = document.createElement("h3");
    h3EncabezadoPlatillosPedidos.textContent = textoEncabezado;
    h3EncabezadoPlatillosPedidos.classList.add(...constantes.CLASES_BOOTSTRAP_H3_ENCABEZADO_RESUMEN_PEDIDO);

    return h3EncabezadoPlatillosPedidos;
}

/**
 * 
 * @param {Platillo[]} platillos 
 */
function construirUlListaPlatillosPedidos(platillos) {
    const ulListaPlatillosPedidos = document.createElement("ul");

    platillos.forEach(platillo => {
        const liPlatillo = construirLiPlatilloPedido(platillo);

        ulListaPlatillosPedidos.appendChild(liPlatillo);
    })

    return ulListaPlatillosPedidos;
}

/**
 * 
 * @param {Platillo} platillo 
 */
function construirLiPlatilloPedido(platillo) {
    const {id, nombre, precio, cantidad} = platillo;

    const liPlatilloPedido = document.createElement("li");
    liPlatilloPedido.classList.add(constantes.CLASE_BOOTSTRAP_LI_PLATILLO_PEDIDO);

    liPlatilloPedido.appendChild(construirH4NombrePlatilloPedido(nombre));
    liPlatilloPedido.appendChild(construirParrafoConSpanParaResumenPedido("Cantidad: ",cantidad));
    liPlatilloPedido.appendChild(construirParrafoConSpanParaResumenPedido("Precio: ", precio))
    liPlatilloPedido.appendChild(construirParrafoConSpanParaResumenPedido("Subtotal: ", `$${pedido.calcularSubtotalPlatillo(cantidad,precio)}` ))
    liPlatilloPedido.appendChild(construirBotonEliminarPlatillo(id));
    
    return liPlatilloPedido;
}

function construirH4NombrePlatilloPedido(nombrePlatillo) {
    const h4NombrePlatilloPedido = document.createElement('h4');
    h4NombrePlatilloPedido.textContent = nombrePlatillo;

    h4NombrePlatilloPedido.classList.add(...constantes.CLASES_BOOTSTRAP_H4_NOMBRE_PLATILLO_PEDIDO);
    
    return h4NombrePlatilloPedido;
}

function construirBotonEliminarPlatillo(idPlatillo) {
    const buttonEliminarPlatillo = document.createElement('button');
    buttonEliminarPlatillo.classList.add(...constantes.CLASES_BOOTSTRAP_BOTON_ELIMINAR_PLATILLO_PEDIDO);
    buttonEliminarPlatillo.textContent = 'Eliminar Platillo del Pedido';

    buttonEliminarPlatillo.addEventListener("click", ()=>{
        pedido.eliminarPlatilloDelPedido(idPlatillo);
        reiniciarContadorDelPlatillo(idPlatillo);
        actualizarResumenDesplegadoDelPedido();
    })
    
    return buttonEliminarPlatillo;
}

function desplegarMensajePedidoVacio() {
    divResumenPedido.innerHTML = '<p class="text-center">Añade Platillos al pedido</p>';
}

function reiniciarContadorDelPlatillo(idPlatillo) {
    document.getElementById(`platillo-${idPlatillo}`).value = 0;
}

function construirDivFormularioPropinas() {

    const divFormularioPropinas = document.createElement("div");
    divFormularioPropinas.classList.add(...constantes.CLASES_BOOTSTRAP_DIV_FORMULARIO_PROPINAS);

    divFormularioPropinas.appendChild(construirDivContenedorFormularioPropinas());

    return divFormularioPropinas;
}

function construirDivContenedorFormularioPropinas() {
    const divContenedorFormularioPropinas = document.createElement("div");
    divContenedorFormularioPropinas.id = constantes.ID_FORMULARIO_PROPINAS;
    divContenedorFormularioPropinas.classList.add(...constantes.CLASES_BOOTSTRAP_DIV_CONTENEDOR_FORMULARIO_PROPINAS)
    
    divContenedorFormularioPropinas.appendChild(construirH3EncabezadoResumenPedido("Propina"));
    divContenedorFormularioPropinas.appendChild(construirDivContenedorInputPorcentajePropina("10"))
    divContenedorFormularioPropinas.appendChild(construirDivContenedorInputPorcentajePropina("25"))
    divContenedorFormularioPropinas.appendChild(construirDivContenedorInputPorcentajePropina("50"))

    return divContenedorFormularioPropinas;
}

/**
 * 
 * @param {string} porcentajePropina 
 */
function construirDivContenedorInputPorcentajePropina(porcentajePropina){
    const divContenedorInputPorcentajePropina = document.createElement('div');
    divContenedorInputPorcentajePropina.classList.add(constantes.CLASE_BOOTSTRAP_DIV_CONTENEDOR_INPUT_FORMULARIO_PROPINAS);
    
    divContenedorInputPorcentajePropina.appendChild(construirLabelPorcentajePropina(porcentajePropina))
    divContenedorInputPorcentajePropina.appendChild(construirInputPorcentajePropina(porcentajePropina))

    return divContenedorInputPorcentajePropina;
}

function construirLabelPorcentajePropina(porcentajePropina){
    const labelPorcentajePropina = document.createElement('label');
    labelPorcentajePropina.textContent = `${porcentajePropina}%`;
    labelPorcentajePropina.classList.add(constantes.CLASE_BOOTSTRAP_LABEL_FORMULARIO_PROPINAS);

    return labelPorcentajePropina;
}

function construirInputPorcentajePropina(porcentajePropina){
    const inputPorcentajePropina = document.createElement('input');
    inputPorcentajePropina.type = "radio";
    inputPorcentajePropina.name = 'propina';
    inputPorcentajePropina.value = porcentajePropina;
    inputPorcentajePropina.classList.add(constantes.CLASE_BOOTSTRAP_INPUT_RADIO_FORMULARIO_PROPINAS);

    inputPorcentajePropina.addEventListener("click", evento => {
        const porcentajePropina = parseInt(evento.target.value);

        const costoTotalDeLosPlatillos = pedido.calcularCostoTotalDelosPlatillosEnELPedido();

        const totalPropina = costoTotalDeLosPlatillos * (porcentajePropina/100);

        const costoTotalDelPedido = costoTotalDeLosPlatillos + totalPropina;

        desplegarDesglosePedido(costoTotalDeLosPlatillos, totalPropina, costoTotalDelPedido);
        
    })

    return inputPorcentajePropina
}

function desplegarDesglosePedido(costoTotalDeLosPlatillos, totalPropina, costoTotalDelPedido){
    removerDesgloseAnterior();

    const divContenedorDesglose = construirDivContenedorDesglose(costoTotalDeLosPlatillos, totalPropina, costoTotalDelPedido)

    document.getElementById(constantes.ID_FORMULARIO_PROPINAS).appendChild(divContenedorDesglose);
}

function removerDesgloseAnterior() {
    const desgloseDesplegado = document.getElementById(constantes.ID_CONTENEDOR_DESGLOSE)
    if(desgloseDesplegado){
        desgloseDesplegado.remove();
    }
}

function construirDivContenedorDesglose(totalPlatillos, totalPropina, totalPedido) {
    const divContenedorDesglose = document.createElement("div");
    divContenedorDesglose.id = constantes.ID_CONTENEDOR_DESGLOSE

    divContenedorDesglose.appendChild(construirParrafoTotalPlatillos(totalPlatillos));
    divContenedorDesglose.appendChild(construirParrafoDesglose("Propina: ", totalPropina));
    divContenedorDesglose.appendChild(construirParrafoDesglose("Total: ", totalPedido));

    return divContenedorDesglose;
}

function construirParrafoTotalPlatillos(totalPlatillos) {
    const parrafoTotalPlatillos = document.createElement('P');
    parrafoTotalPlatillos.classList.add(...constantes.CLASES_BOOTSTRAP_PARRAFO_TOTAL_PLATILLOS_DESGLOSE);
    parrafoTotalPlatillos.textContent = 'Total platillos: ';

    const spanTotalPlatillos = document.createElement('SPAN');
    spanTotalPlatillos.classList.add(constantes.CLASE_BOOTSTRAP_SPAN_RESUMEN_PEDIDO);
    spanTotalPlatillos.textContent = `$${totalPlatillos}`;
    parrafoTotalPlatillos.appendChild(spanTotalPlatillos);

    return parrafoTotalPlatillos;
}

function construirParrafoDesglose(contenidoParrafo, contenidoSpan) {
    const parrafoDesglose = document.createElement('P');
    parrafoDesglose.classList.add(...constantes.CLASES_BOOTSTRAP_PARRAFO_TOTAL_DESGLOSE);
    parrafoDesglose.textContent = contenidoParrafo;

    const spanDesglose = document.createElement('SPAN');
    spanDesglose.classList.add(constantes.CLASE_BOOTSTRAP_SPAN_RESUMEN_PEDIDO);
    spanDesglose.textContent = `$${contenidoSpan}`;
    parrafoDesglose.appendChild(spanDesglose);

    return parrafoDesglose;
}


export default{
    buttonGuardarCliente,
    inputMesa,
    inputHora,
    desplegarAlertaError,
    cerrarModal,
    mostrarSeccionesDeLaPagina,
    desplegarPlatillos
}
