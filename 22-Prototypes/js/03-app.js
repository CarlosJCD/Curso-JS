function Cliente(nombre, saldo) {
    this.nombre = nombre;
    this.saldo = saldo;
}

Cliente.prototype.tipoCliente = function () {
    let tipo;

    if(this.saldo > 10000){
        tipo = "Gold";
    } else if(this.saldo > 5000){
        tipo = "Platinum"
    } else {
        tipo = "Normal"
    }

    return tipo;
}

Cliente.prototype.nombreClienteSlado = function() {
    return `Nombre: ${this.nombre}, Saldo: ${this.saldo}, Tipo Cliente: ${this.tipoCliente()}`
}

const pedro = new Cliente("Pedro", 60000);

console.log(pedro.tipoCliente());

console.log(pedro.nombreClienteSaldo());

console.log(pedro);