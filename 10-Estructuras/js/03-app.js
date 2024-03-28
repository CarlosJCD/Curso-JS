

const test = () => {
    const givenNumber = parseInt(prompt("Give Number greater than 0 and less than 50"));

    if(givenNumber < 50 || givenNumber > 0){
        alert("Never gonna give you up");
        window.location.href = "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
        return;
    }

    alert("booo!, boring :/")
}

test()