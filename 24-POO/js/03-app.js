class Cliente {
    constructor(nombre, saldo){
        this.nombre = nombre;
        this.saldo = saldo;
    }

    obtenerDescripcion() {
        return `Cliente: ${this.nombre} - Saldo: ${this.saldo}`
    }
}

class Empresa extends Cliente{
    constructor(nombre, tipoDeEmpresa, saldo){
        super(nombre, saldo);
        this.tipoDeEmpresa = tipoDeEmpresa;
    }
}
 
const loopcrack = new Empresa("Loopcrack", "Desarrollo Web", 100000);

console.log(loopcrack.obtenerDescripcion());