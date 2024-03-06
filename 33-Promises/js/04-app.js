
const paises = [];


const nuevoPais = pais => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            paises.push(pais)
            resolve(`Pais Agregado: ${pais}`)
        }, 3000);
    })
}

nuevoPais('Alemania')
    .then( resultado => {
        console.log(resultado);
        console.log(paises);
        return nuevoPais('Francia');
    })
    .then(resultado => {
        console.log(resultado);
        console.log(paises);
        return nuevoPais('Inglaterra');
    })
    .then(resultado => {
        console.log(resultado)
        console.log(paises);
    })
