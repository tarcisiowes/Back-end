const numeros = [0, 122, 4, 6, 7, 8, 44];

const ehValido = numeros.every(x => x % 2 === 0);

console.log(ehValido ? "Array válido" : "Array inválido")
