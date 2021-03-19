const numeros = [3, 24, 1, 8, 11, 7, 15];

let resultado = 0
for ( let i = 0 ; i < numeros.length ; i++) {
    
    if( numeros[i] > resultado) {
        resultado = numeros[i]
        
    }
}
console.log(resultado)
