const CLASES_CSS_ALERTA = ["px-4", "py-3", "rounded",  "max-w-lg", "mx-auto", "mt-6", "text-center", "border", "alerta" ];

const CLASES_CSS_ALERTA_ERROR = ['bg-red-100', "border-red-400", "text-red-700"];
const ID_ALERTA_ERROR = "alerta-error"

const CLASES_CSS_ALERTA_EXITO = ['bg-green-100', "border-green-400", "text-green-700"];
const ID_ALERTA_EXITO = "alerta-exito"


export default class VistaHTMLNuevoCliente{
    static formNuevoCliente = document.getElementById("formulario");
    static inputNombreCliente = document.getElementById("nombre");
    static inputCorreoCliente = document.getElementById("email");
    static inputTelefonoCliente = document.getElementById("telefono");
    static inputEmpresaCliente = document.getElementById("empresa");

    static desplegarAlertaError(mensaje = "error") {
        if(this.alertaDesplegada(ID_ALERTA_ERROR) !== null) return;

        const divAlerta = document.createElement('div');
        divAlerta.classList.add(...CLASES_CSS_ALERTA, ...CLASES_CSS_ALERTA_ERROR);
        divAlerta.id = ID_ALERTA_ERROR;
        divAlerta.textContent = mensaje;

        this.formNuevoCliente.appendChild(divAlerta);

        setTimeout( () => {
            divAlerta.remove();
        }, 3000);
    }
    
    static desplegarAlertaExito(mensaje = "exito") {
        if(this.alertaDesplegada(ID_ALERTA_EXITO) !== null) return;

        const divAlerta = document.createElement('div');
        divAlerta.classList.add(...CLASES_CSS_ALERTA, ...CLASES_CSS_ALERTA_EXITO);
        divAlerta.id = ID_ALERTA_EXITO;
        divAlerta.textContent = mensaje;

        this.formNuevoCliente.appendChild(divAlerta);

        setTimeout( () => {
            divAlerta.remove();
        }, 3000);
    }

    static alertaDesplegada(idAlerta){
        return document.getElementById(idAlerta);
    }

}