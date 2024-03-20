const mostrarCliente = (cliente) => () => console.log(cliente);


mostrarCliente({nombre: "Carlos", saldo: "100.00"})();