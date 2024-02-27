document.addEventListener("DOMContentLoaded", ()=>{
    let crmDB = window.indexedDB.open('crm',1.0)

    crmDB.onerror = function() {
        console.log("Error en la base de datos");
    }

    crmDB.onsuccess = function() {
        console.log("Base de datos creada");
    }

    crmDB.onupgradeneeded = function(){
        console.log("Upgrade needed");
    }
})