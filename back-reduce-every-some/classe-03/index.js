const numeros = [1, 98, -76, 0, 12, 19, 5, 60, 44];

const maior = numeros.reduce((acc,item) => item > acc ? item : acc )

console.log(maior)