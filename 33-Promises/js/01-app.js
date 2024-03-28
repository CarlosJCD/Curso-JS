const paises = ['Francia', 'España', 'Portugal', 'Australia', 'Inglaterra'];

function nuevoPais(pais, callBack = mostrarPaises) {
    setTimeout(() => {
        pais.push(pais);
        callBack();
    }, 2000);
}


function mostrarPaises() {
    setTimeout(() => {
        paises.forEach(pais=>{
            console.log(pais);
        })
    }, 1000);
}

mostrarPaises();

nuevoPais('Alemania');