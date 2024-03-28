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


function crearConexionDB() {
    return new Promise((result, reject) =>{
        let conexion = window.indexedDB.open("crm",1);
    
        conexion.onerror = (e) =>{
            reject(e);
        }
    
        conexion.onsuccess = ()=>{
            result(conexion.result);
        }
    })
   
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
        crearConexionDB().then((db) => {
            const transaccionRegistrarCliente = db.transaction(["crm"], "readwrite");

            const objectStoreRegistrarCliente = transaccionRegistrarCliente.objectStore("crm");

            objectStoreRegistrarCliente.add(clienteNuevo);

            transaccionRegistrarCliente.onerror = (evento) => {
                console.log(clienteNuevo);
                console.log(evento);
                resolve(false);
            };

            transaccionRegistrarCliente.oncomplete = () => {
                resolve(true);
            };
        });
    });
}

export function obtenerClientesDeLaBD() { 
    return new Promise((resolve, reject) => {
        crearConexionDB().then( (db) => {
            const objectStore = db.transaction('crm').objectStore('crm');

            const clientes = [];

            objectStore.openCursor().onsuccess = (e) =>{
                const cursor = e.target.result;

                if(cursor){
                    clientes.push(cursor.value);
                    cursor.continue();
                } else{
                    resolve(clientes);
                }
            }

        })
    })
}

/**
 * 
 * @param {string} idCliente 
 */
export function obtenerClientePorId(idCliente) {
    return new Promise((resolve, reject) =>{
        crearConexionDB().then((db)=>{
            const transaccionObtenerClientePorId = db.transaction(['crm'], "readwrite");
            const objectStore = transaccionObtenerClientePorId.objectStore('crm');

            const resultadoBusqueda = objectStore.get(idCliente);

            resultadoBusqueda.onsuccess = ()=>{
                const cliente = resultadoBusqueda.result;
                if(cliente) resolve(cliente);

                reject(new Error("Cliente no encontrado"));
            }

            resultadoBusqueda.onerror = (e) => {
                reject(e);
            }
        })
    })
}

/**
 * @param {Object} cliente
 * @param {string} cliente.nombre
 * @param {string} cliente.email
 * @param {string} cliente.telefono
 * @param {string} cliente.empresa
 */

export function actualizarRegistroCliente(cliente) {
    return new Promise((resolve, reject)=>{
        crearConexionDB().then((db)=>{
            const transaccionActualizarCliente = db.transaction(['crm'], "readwrite");
            const crmObjectStore = transaccionActualizarCliente.objectStore('crm');

            crmObjectStore.put(cliente);

            transaccionActualizarCliente.oncomplete = ()=>{
                resolve(true);
            }

            transaccionActualizarCliente.onerror = (evento) =>{
                console.log(cliente);
                console.log(evento);
                reject(false)
            }
        })
    })
}

/**
 * 
 * @param {int} idCliente 
 */
export function eliminarRegistroCliente(idCliente) {
    return new Promise((resolve, reject) => {
        crearConexionDB().then((db)=>{
            const transaccionEliminarRegistroCliente = db.transaction(['crm'], "readwrite");
            const objectStore = transaccionEliminarRegistroCliente.objectStore('crm');

            objectStore.delete(idCliente);

            transaccionEliminarRegistroCliente.oncomplete = ()=>{
                resolve(true)
            }

            transaccionEliminarRegistroCliente.onerror = ()=>{
                reject(new Error("Error al eliminar el cliente con id" + idCliente))
            }
        })
    })    
}