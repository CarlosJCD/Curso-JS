class Cliente {
    constructor(nombre, saldo){
        this.nombre = nombre;
        this.saldo = saldo;
    }
}

const juan = new Cliente("Juan", 100);

const Cliente2 = class {
    constructor(nombre, saldo){
        this.nombre = nombre;
        this.saldo = saldo;
    }
}

const carlos = new Cliente2("Carlos", 200);

console.log(juan);
console.log(carlos);