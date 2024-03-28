function getContent(keyword) {
    if (keyword==="secret word") return "Correct!"

    return "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
}

console.log(getContent("secret word"))

console.log(getContent("huh?"))