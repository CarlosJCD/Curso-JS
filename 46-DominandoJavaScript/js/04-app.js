// Implicit binding es la asociación implicita de una referencia de la llamada de una funcion al contexto
// en el que es invocada dicha función.


// Cuando la función es llamada, la palabra clave "this" hace una interpretacion de manera implicita
// en el contexto en el cual es llamada la función.

// en este caso, como la función implicit invocation es llamado en el contexto de obj, el valor
// que se imprimer es 10.
function implicitInvocation() {
    console.log(this.a);
}

const obj = {
    a: 10,
    implicitInvocation: implicitInvocation
}

obj.implicitInvocation();

// Y aunque luego obj se acceda por medio de otros contextos, debido a que la función es llamada
// dentro del contexto de obj esta siempre imprimirá el valor de a dentro del contexto de obj.

const obj2 = {
    a: 5,
    obj: obj,
    implicitInvocation
}

obj2.obj.implicitInvocation();
obj2.implicitInvocation(); // implicit invocation es llamada dentro del contexto de obj2 y no de obj, causando que se imprima 5.

implicitInvocation(); // Si es llamada en un contexto global, javascript lo determinará como "undefined".