const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function myMethod(str) {
    if (str.length === 0) return "";

    let resultado = "";
    let contador = 1;

    for (let i = 0; i < str.length; i++) {
        if (str[i] === str[i + 1]) {
            contador++;
        } else {
            resultado += str[i] + contador;
            contador = 1;
        }
    }

    return resultado.length < str.length ? resultado : str;
}

rl.question("Ingresa una cadena: ", function (input) {
    console.log("Resultado: ", myMethod(input));
    rl.close();
});
