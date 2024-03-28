class Cliente {
    constructor(nombre, saldo){
        this.#nombre = nombre;
        this.saldo = saldo;
    }

    obtenerDescripcion() {
        return `Cliente: ${this.#nombre} - Saldo: ${this.saldo}`
    }

    getNombre(){
        return this.#nombre;
    }
}

const carlos = new Cliente("Carlos", 300);

console.log(carlos.getNombre());