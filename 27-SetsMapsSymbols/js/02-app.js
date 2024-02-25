
const weakSet = new WeakSet();


const cliente = {
    nombre: "Juan",
    saldo: 100
}

weakSet.add(cliente)

weakSet.add(cliente)


console.log(weakSet);

console.log(weakSet.has(cliente));

weakSet.delete(cliente)

console.log(weakSet);