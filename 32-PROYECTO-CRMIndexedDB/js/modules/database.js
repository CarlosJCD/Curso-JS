import VistaHTMLNuevoCliente from "./VistaHTMLNuevoCliente.js";

let crmDB;

export function crearDBClientes() {
    const db = window.indexedDB.open("crm", 1);

    db.onerror = () =>{
        console.log("Error al crear la db");
    }

    db.onsuccess= () => {
        crmDB = db.result;
    }

    db.onupgradeneeded = (e) => {
        const db = e.target.result;

        const objectStore = db.createObjectStore("crm",{keyPath: 'id', autoIncrement: true});

        objectStore.createIndex("id","id",{unique: true})
        objectStore.createIndex("nombre","nombre",{unique: false})
        objectStore.createIndex("correo","correo",{unique: false})
        objectStore.createIndex("telefono","telefono",{unique: false})
        objectStore.createIndex("empresa","empresa",{unique: false})
        
    }


}


export function crearConexionDB() {
    let conexion = window.indexedDB.open("crm",1);
    
    conexion.onerror = (e) =>{
        console.log(e);
    }

    conexion.onsuccess = ()=>{
        crmDB = conexion.result;
        console.log(crmDB);
    }
}

/**
 * 
 * @param {Object} clienteNuevo 
 * @param {string} clienteNuevo.nombre
 * @param {string} clienteNuevo.email
 * @param {string} clienteNuevo.telefono
 * @param {string} clienteNuevo.empresa
 * 
 * @returns {Promise}
 */
export function registrarCliente(clienteNuevo) {
   return new Promise((resolve, reject) => {
    const transaccionRegistrarCliente = crmDB.transaction(['crm'], "readwrite");

    const objectStoreRegistrarCliente = transaccionRegistrarCliente.objectStore('crm');

    objectStoreRegistrarCliente.add(clienteNuevo);

    transaccionRegistrarCliente.onerror = (evento) =>{
        console.log(clienteNuevo);
        console.log(evento);
        resolve(false)
    }
    
    transaccionRegistrarCliente.oncomplete = () => {
        resolve(true)
    }
   })
}