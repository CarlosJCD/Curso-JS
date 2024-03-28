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

Cliente.prototype.nombreClienteSaldo = function() {
    return `Nombre: ${this.nombre}, Saldo: ${this.saldo}, Tipo Cliente: ${this.tipoCliente()}`
}

function Persona(nombre, saldo, telefono) {
    Cliente.call(this, nombre, saldo)
    this.telefono = telefono;
}

Persona.prototype = Object.create( Cliente.prototype );

Persona.prototype.constructor = Cliente

const carlos = new Persona("Carlos", 10000, "9999038088");

console.log(carlos);

console.log(carlos.nombreClienteSaldo());