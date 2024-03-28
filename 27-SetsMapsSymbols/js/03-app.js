const cliente = new Map();

cliente.set("nombre", "Carlos")
cliente.set("tipo", "Premium")
cliente.set("saldo", 3000)

console.log(cliente);

console.log(cliente.get("nombre"));
console.log(cliente.has("saldo"));

cliente.delete("tipo");

console.log(cliente);

const cliente2 = new Map([["Nombre", "Alejandro"], ["cuarto","no definido"]]);

console.log(cliente2);