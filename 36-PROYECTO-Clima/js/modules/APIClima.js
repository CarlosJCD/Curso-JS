const urlAPIClima = "https://api.openweathermap.org/data/2.5/weather?q={city-name},{country-code}&appid=1be2705047d6ec9ec5f7f3fa2a513b2b"

/**
 * 
 * @param {string} ciudad 
 * @param {string} pais 
 */
function obtenerUrlAPI(ciudad, pais) {
    let  url = urlAPIClima.repeat(1);
    url = url.replace("{city-name}",ciudad);
    url = url.replace("{country-code}",pais);
    return url;
}

/**
 * 
 * @param {string} ciudad 
 * @param {string} pais - Codigo del pais en ISO 3166
 */
export function obtenerClimaDeLaAPI(ciudad, pais){
    return new Promise((resolve, reject) =>{
        const urlConsulta = obtenerUrlAPI(ciudad, pais)

        fetch(urlConsulta).then(respueta => respueta.json()).then(datosClima => resolve(datosClima));
    })
}