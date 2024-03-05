const CLASES_CSS_ALERTA = ["px-4", "py-3", "rounded",  "max-w-lg", "mx-auto", "mt-6", "text-center", "border" ];
const CLASES_CSS_ALERTA_ERROR = ['bg-red-100', "border-red-400", "text-red-700"];
const CLASES_CSS_ALERTA_EXITO = ['bg-green-100', "border-green-400", "text-green-700"];

export default class VistaHTMLNuevoCliente{
    static formNuevoCliente = document.getElementById("formulario");
    static inputNombreCliente = document.getElementById("nombre");
    static inputCorreoCliente = document.getElementById("email");
    static inputTelefonoCliente = document.getElementById("telefono");
    static inputEmpresaCliente = document.getElementById("empresa");

    static desplegarAlertaError(mensaje = "error") {
        const divAlerta = document.createElement('div');
        divAlerta.classList.add(...CLASES_CSS_ALERTA, ...CLASES_CSS_ALERTA_ERROR);
        divAlerta.textContent = mensaje;

        this.formNuevoCliente.appendChild(divAlerta);

        setTimeout( () => {
            divAlerta.remove();
        }, 3000);
    }
    
    static desplegarAlertaExito(mensaje = "exito") {
        const divAlerta = document.createElement('div');
        divAlerta.classList.add(...CLASES_CSS_ALERTA, ...CLASES_CSS_ALERTA_EXITO);
        divAlerta.textContent = mensaje;

        this.formNuevoCliente.appendChild(divAlerta);

        setTimeout( () => {
            divAlerta.remove();
        }, 3000);
    }

}