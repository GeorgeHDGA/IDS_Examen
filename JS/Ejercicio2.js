function distancia(str1, str2) {
    let diferencia = 0;
    const longitud1 = str1.length;
    const longitud2 = str2.length;
    const minLongitud = Math.min(longitud1, longitud2);
    
    for (let i = 0; i < minLongitud; i++) {
        if (str1[i] !== str2[i]) {
            diferencia++;
        }
    }

    diferencia += Math.abs(longitud1 - longitud2);
    
    return diferencia;
}

// 🔹 CÓDIGO DE PRUEBA
console.log(distancia("hola", "hola"));   
console.log(distancia("sol", "tol"));     
console.log(distancia("carro", "correr"));
console.log(distancia("gato", "perro"));  
console.log(distancia("casa", "casita"));
console.log(distancia("amigo", "amor"));  
