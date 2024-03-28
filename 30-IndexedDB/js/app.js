let DB;

document.addEventListener("DOMContentLoaded", ()=>{
    let crmDB = window.indexedDB.open('crm',1.0)

    crmDB.onerror = function() {
        console.log("Error en la base de datos");
    }

    crmDB.onsuccess = function() {
        console.log("Base de datos creada");
        DB = crmDB.result;
    }

    crmDB.onupgradeneeded = function(e){
        const db = e.target.result;

        const objectStore = db.createObjectStore('crm',{
            keyPath: 'crm',
            autoIncrement: true
        });

        objectStore.createIndex("nombre","nombre",{unique: false})
        objectStore.createIndex("email","email",{unique: true})
        objectStore.createIndex("telefono","telefono",{unique: false})
    }

    setTimeout(()=>{
        crearCliente();
    },5000)
})

function crearCliente() {
    let transaction = DB.transaction(['crm'],'readwrite')

    transaction.oncomplete = function(){
        console.log('Transacción Completada');
    }
    
    transaction.onerror = function(){
        console.log('Hubo un error');
    }

    const objectStore = transaction.objectStore('crm');

    const nuevoCliente = {
        telefono: 9999038088,
        nombre: "Carlos",
        email: "email@email.com"
    }

    const peticion = objectStore.add(nuevoCliente);

    console.log(peticion);

}