import { Cliente } from "./cliente.js";

export class Empresa extends Cliente{
    constructor(nombreCliente, ahorroCliente, tipoDeEmpresa = "Publica"){
        super(nombreCliente, ahorroCliente);

        this.tipoDeEmpresa = tipoDeEmpresa;
    }
}