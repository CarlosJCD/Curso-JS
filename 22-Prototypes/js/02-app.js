function Cliente(nombre, saldo) {
    this.nombre = nombre;
    this.saldo = saldo;
}

const carlos = new Cliente("Carlos", 15);

function formatearCliente(cliente) {
    const {nombre, saldo} = cliente

    return `El Cliente ${nombre} tiene un saldo de ${saldo}`
}

console.log(formatearCliente(carlos));

function Empresa(nombre, saldo, categoria) {
    this.nombre = nombre;
    this.saldo = saldo;
    this.categoria = categoria;
}

const loopcrack = new Empresa("Loopcrack", 100000, "Desarrollo Web")

console.log(loopcrack);