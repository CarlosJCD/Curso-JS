
const contenedorContenido = document.getElementById("contenido");

const formularioTweet = document.getElementById("formulario");

const inputTweet = document.querySelector("textarea#tweet");

const listaTweets = document.getElementById("lista-tweets");

let tweets = [];


document.addEventListener("DOMContentLoaded", event => {
    cargarListaTweets();
    desplegarTweetsEnHTML();
});

formularioTweet.addEventListener("submit", event => {
    event.preventDefault();

    const textoTweetNuevo = inputTweet.value;

    if(textoTweetNuevo === ""){
        desplegarError("No se pueden agregar tweets vacíos");
    } else{ 
        const nuevoTweet = {
            id: Date.now(),
            texto: textoTweetNuevo
        }
        agregarTweet(nuevoTweet);
        actualizarTweetsEnLocalStorage();
        desplegarTweetsEnHTML();
        formularioTweet.reset();
    }

})


function cargarListaTweets() {
    const tweetsLocalStorage = JSON.parse(localStorage.getItem("tweets"));

    if(tweetsLocalStorage) tweets = tweetsLocalStorage;
}

function agregarTweet(tweet) {
    tweets.push(tweet);
}

function actualizarTweetsEnLocalStorage() {
    localStorage.setItem("tweets", JSON.stringify(tweets));
}

function desplegarError(mensaje) {
    const alertaError = document.createElement("p");
    alertaError.innerText = mensaje;
    alertaError.classList.add("error");

    contenedorContenido.appendChild(alertaError);

    setTimeout(() => {
       alertaError.remove(); 
    }, 5000);
}

function desplegarTweetsEnHTML() {
    listaTweets.innerHTML = "";

    tweets.forEach(tweet => {
        
        const botónEliminar = document.createElement("a");
        botónEliminar.classList.add("borrar-tweet");
        botónEliminar.innerText = "X";
        botónEliminar.addEventListener("click", event => {
            event.preventDefault();

            tweets = tweets.filter(tweet => tweet.id != event.target.parentElement.id);
            event.target.parentElement.remove();
            
            actualizarTweetsEnLocalStorage();
            desplegarTweetsEnHTML();
        })

        const liTweet = document.createElement("LI");
        liTweet.innerText = tweet.texto;
        liTweet.id = tweet.id;

        liTweet.appendChild(botónEliminar);
        listaTweets.appendChild(liTweet);
    })
}