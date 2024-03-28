class Cliente {
    constructor(nombre, saldo){
        this.nombre = nombre;
        this.saldo = saldo;
    }

    obtenerDescripcion() {
        return `Cliente: ${this.nombre} - Saldo: ${this.saldo}`
    }
}

const carlos = new Cliente("Carlos", 300);

console.log(carlos.obtenerDescripcion());

