const urlCategoriasAPI = 'https://www.themealdb.com/api/json/v1/1/categories.php'

/**
 * 
 * @returns {Promise<{categories: {idCategory: string, strCategory: string, strCategoryDescription: string, strCategoryThumb: string}[]}>}
 */
export function obtenerCategoriasDeLaAPI(){
    return new Promise((resolve, reject) =>{
        fetch(urlCategoriasAPI).then(resultadoAPI => resolve(resultadoAPI.json()))
    })
}