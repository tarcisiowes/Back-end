// const imprimir = function (mensagem) {
//     console.log(mensagem);
// }

// imprimir("Olar");

//=========================================== ARROW FUNCTION

const imprimir = () => {
    console.log("Oi!")
}

imprimir()

//=========================== Read File assycrono

// const fs = require('fs');

// console.log("Vou começar ler o arquivo")

// fs.readFile('./texto.txt', function (err, data) {
//     if (!err) {
//         console.log(data.toString());
//     }
// });

// console.log("Uêpá")

//=============================== mesmo code mas usando arrow function

// const fs = require('fs');

// console.log("Vou começar ler o arquivo")

// fs.readFile('./texto.txt', (err, data) => {
//     if (!err) {
//         console.log(data.toString());
//     }
// });

// console.log("Uêpá")

//================================== SET TIME OUT

setTimeout(function () {
    console.log("Aoba");
}, 1000);

console.log("Comecou o programa")
console.log("Processando algumas coisas")

//================================

function imprimirMensagem (mensagem) {
    console.log(mensagem);
};

setTimeout(imprimirMensagem, 1000, "Olá")

//========================== SET INTERVAL

// setInterval(() => {
//     console.log(`passou um segundo`)
// }, 1000);

// console.log(`to processando coisas`);

//==================================== CONTAGEM REGRESSIVA

let contagem = 10;

function imprimirContagem() {
    if (contagem ===0) {
        console.log(`KABUMMMMMM!!!`);
        clearInterval(intervalId);
    } else {
        console.log(`A bomba explodirá em ${contagem} segundo${contagem === 1 ? "" : "s"}`);
        contagem--;
    }
}

imprimirContagem();  // aqui chama a funcao de cara pra ja mostrar o dado
const intervalId = setInterval(imprimirContagem, 1000);


//============================ WRITE FILES

const fs = require('fs');

const erro = "Deu erro ao cadastrar";   // aqui é o que sera escrito no novo arquivo

fs.writeFile("./novoarquivo.txt", erro, () => {
    console.log("O arquivo foi escrito!");        // aqui executa algo apos 
});

//=================== FILTER (array)

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// maiores que 5

const arrayFiltrado = array.filter((x) => {
    if (x > 5) {
        return true;
    } else {
        return false;
    }
});

console.log(arrayFiltrado);

//=================== FILTER RESUMIDO (array)

// SE tyem apenas um paramento nao precisa parenteses, se busca apenas um boleano pode se retirar o if else, chaves e return

const arrayFiltrado2 = array.filter(x => x < 5);

console.log(arrayFiltrado2);

// é possivel aplicar filter em filter

const arrayFiltrado3 = array.filter(x => x < 5).filter(x => x % 2 === 0);

console.log(arrayFiltrado3);


//======================================= MAP (array)

const arrayModificado = array.map((x, index, array) => {
    return x ** 2;          
});                         //aqui se pode resumir da mesma forma que o de cima

console.log(arrayModificado);

//==================================== FOR EACH (nao é possivel usar break e continue)

array.forEach(y => {
    console.log(`O elemento ${y} esta no indice ${i} do array ${a}`)
}) ;


//================================ FIND

