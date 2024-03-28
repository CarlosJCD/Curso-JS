const categorias = {
    1: 'Comida',
    2: 'Bebidas',
    3: 'Postres'
}

function obtenerCategoria(numCategoria) {
    return categorias[numCategoria];
}

export default {
    obtenerCategoria
}