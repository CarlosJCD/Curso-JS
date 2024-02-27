document.addEventListener("DOMContentLoaded", ()=>{
    let crmDB = window.indexedDB.open('crm',1.0)

    crmDB.onerror = function() {
        console.log("Error en la base de datos");
    }

    crmDB.onsuccess = function() {
        console.log("Base de datos creada");
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
})