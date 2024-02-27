import { Cliente } from "./cliente.js";
import { Empresa } from "./empresa.js";

const cliente = new Cliente();

console.log(cliente.nombreCliente);

console.log(`Ahorro: ${cliente.ahorroCliente}`);

console.log(cliente.mostrarAhorroCliente());


const empresa = new Empresa();

console.log(empresa.tipoDeEmpresa);