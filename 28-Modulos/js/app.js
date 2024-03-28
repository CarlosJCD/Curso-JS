import rickRollLink, { Cliente } from "./cliente.js";
import { Empresa } from "./empresa.js";

const cliente = new Cliente();

console.log(cliente.nombreCliente);

console.log(`Ahorro: ${cliente.ahorroCliente}`);

console.log(cliente.mostrarAhorroCliente());


const empresa = new Empresa();

console.log(empresa.tipoDeEmpresa);

window,location.href = "https://www.youtube.com/watch?v=dQw4w9WgXcQ";