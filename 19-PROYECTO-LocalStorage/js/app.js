
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

    const tweetAgregado = inputTweet.value;

    if(tweetAgregado === ""){
        desplegarError("No se pueden agregar tweets vacíos");
    } else{ 
        agregarTweet(tweetAgregado);
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

    localStorage.setItem("tweets", JSON.stringify(tweets))
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
        const liTweet = document.createElement("LI");
        liTweet.innerText = tweet;

        listaTweets.appendChild(liTweet);
    })
}