window.addEventListener('online', updateNetState);
window.addEventListener('offline', updateNetState);
function updateNetState(e) {
    if(navigator.onLine ) {
        console.log('Si estas conectado')
    } else {
        console.log('Parece que has perdido tu conexión...')
    }
}