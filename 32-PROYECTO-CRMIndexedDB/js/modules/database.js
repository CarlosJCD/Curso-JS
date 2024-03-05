
let crmDB;

export function crearDBClientes() {
    const db = window.indexedDB.open("crm", 1);

    db.onerror = () =>{
        console.log("Error al crear la db");
    }

    db.onsuccess= () => {
        crmDB = db.result;
    }

    crearDB.onupgradeneeded = (e) => {
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
    const conexion = window.indexedDB.open("crm",1);
    
    conexion.onerror = (e) =>{
        console.log(e);
    }

    conexion.onsuccess = ()=>{
        crmDB = conexion.result;
    }

    return crmDB;
}

export function registrarCliente(params) {
    
}