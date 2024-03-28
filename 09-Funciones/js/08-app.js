
const userPrompt = prompt("Give keyword:")

let response = getContent(userPrompt);

if(response !== "Correct!") {
    window.location.href = response
} else{
    alert(response)
}



function getContent(keyword = "") {
    const content = validateKeyword(keyword)
    return content
}

function validateKeyword(keyword) {
    if (keyword==="secret word") return "Correct!"

    return "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
}