Array.prototype.miMetodo = function (funcion, valorInicial) {
    let acumulador = valorInicial !== undefined ? valorInicial : this[0];
    let indiceInicio = valorInicial !== undefined ? 0 : 1;

    for (let i = indiceInicio; i < this.length; i++) {
        acumulador = funcion(this[i], acumulador);
    }

    return acumulador;
};

const arreglo = [1, 2, 3, 4, 5];
const funcion = (actual, acumulador) => {
    acumulador += actual;
    return acumulador;
};

console.log(arreglo.miMetodo(funcion)); 


