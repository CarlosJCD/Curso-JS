

export class Cliente{
    constructor(nombreCliente = "Carlos Calderon", ahorroCliente = 3500){
        this.nombreCliente = nombreCliente;
        this.ahorroCliente = ahorroCliente;
    }

    mostrarAhorroCliente() {
        return `El cliente ${this.nombreCliente} ha ahorrado ${this.ahorroCliente} pesos`
    }
}