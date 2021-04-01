//=================== EVERY (so retornara valor true se todos item forem true)

const numeros = [1,2,3,4,5];

console.log(numeros.every(x => x < 10));


//========================= EX

const precos = [100, 131, 2543]

// const ehValido = precos.every(x => {

//     const ehPositivo = x >= 0;
//     const ehInteiro = x% 1 === 0;

//     if (ehPositivo && ehInteiro) {
//         return true;
//     } else {
//         return false;
//     }
// });

// console.log(ehValido)

//=========== Arredondar pra baixo (Math.floor())

const ehValido = precos.every(x => x >= 0 && x % 1 === 0);

console.log(ehValido)

//============================ SOME (somente para 1 item)

const temMaiorQue5 = numeros.some(x => x > 5);

console.log(temMaiorQue5)

//============================= Quadrado Perfeito ( raiz)

const resultado = numeros.some(x => Math.sqrt(x) >= 0 && Math.sqrt(x) % 1 === 0);

console.log(resultado)

//========================== REDUCE (array)

const somaTotal = numeros.reduce((acc, item) => acc + item);

console.log(somaTotal)

//=========================== Maior valor com reduce

const maior = numeros.reduce((acc, item) => item > acc ? item : acc)

console.log(maior)

//============================ SORT

const aleatorios = [1, 10, 25, 32, 2, 5]
//ordem crescente
// - a vem primeiro (menor)
// + b vem primeiro (maior)

// aleatorios.sort((a, b) => {
//     if (a < b) {
//         return -1;
//     } else if (a > b) {
//         return 1;
//     } else {
//         return 0;
//     }
// });

// console.log(aleatorios)

//=========== SORT refatorando

aleatorios.sort((a, b) => a - b);

console.log(aleatorios)

//=================== ORDEM ALFABETICA

const nomes = ["ANA", "joao" , "pedro", "maria"]

nomes.sort((a,b) => a.localeCompare(b));

console.log(nomes)

//=======================

const pessoas = [
    {
        nome: "ANA",
        idade: 30
    },
    {
        nome: "joao",
        idade: 15
    },
    {
        nome: "pedro",
        idade: 30
    },
    {
        nome: "maria",
        idade: 14
    },
]

pessoas.sort((a,b) => {
    if (a.idade < b.idade) {
        return -1;
    } else if (b.idade > a.idade) {
        return 1;
    } else {
        return a.nome.localeCompare(b.nome)
    }
});

console.log(pessoas)