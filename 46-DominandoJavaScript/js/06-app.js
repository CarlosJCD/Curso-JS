/**
 * new Binding es una forma de crear instancias de objetos con propiedades y métodos 
 * compartidos definidos en una función constructora.
 * 
 * La plabra clave "new" se utiliza para crear una instancia de un tipo de objeto definido por el usuario. 
 * Cuando se utiliza new con una función, se crea un nuevo objeto, se establece la palabra clave "this" para hacer referencia a ese objeto dentro de la función 
 * y se devuelve el objeto recién creado.
 */

class Persona {
    constructor(nombre, edad) {
        this.nombre = nombre;
        this.edad = edad;
    }
}

const person1 = new Persona('Carlos', 10);
  
console.log(person1.nombre);
console.log(person1.edad); 
  