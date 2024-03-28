const aplicarDescuento = new Promise((resolve, reject) => {
    const descuentoAplicado = false;

    if (descuentoAplicado) {
        resolve("Descuento aplicado")
    } else{
        reject(new Error("Descuento no aplicado"))
    }
})

aplicarDescuento.then((mensaje)=> console.log(mensaje)).catch((e) => console.log(e))