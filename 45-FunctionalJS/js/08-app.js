const obtenerCliente = () =>  {
    const nombre = "Carlos";
    
    function muestraNombre() {
        console.log(nombre);
    }
    
    return muestraNombre;
}
  
const cliente = obtenerCliente();
cliente(); 