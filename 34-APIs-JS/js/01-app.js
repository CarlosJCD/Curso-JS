const notificarBtn = document.getElementById("notificar");

notificarBtn.addEventListener("click", () => {
    Notification.requestPermission().then(resultado => console.log(`Resultado: ${resultado}`));
})

const verNotificacion = document.getElementById("verNotificacion");

verNotificacion.addEventListener('click', ()=>{
    if(Notification.permission === "granted"){
        const noti = new Notification("Notificacion Nueva", { icon: "img/ccj.png", body: "Codigo con juan" })
        noti.onclick = ()=> window.open("https://www.youtube.com/watch?v=dQw4w9WgXcQ")
    }
})
