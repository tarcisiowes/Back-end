// const primeiroNome = "Tarcisio";
//
// console.log(primeiroNome);
//
//Variavel const nao é possivel ser alterada

let primeiroNome = "Tarcisio";

console.log(primeiroNome);

// variavel let me permite mudar >>>>>>>>>>>>>>>>>>>>>>>>>

let idade = 35;
let alturaEmMetros = 1.75

console.log(idade)
console.log(alturaEmMetros)

//é possivel add mais de uma variavel por linha, apenas separe por virgula ex let/const x = 10, y = 2
// para evitar varios console.logs e tambem melhorar a formataçao da resposta temos a opçao de usar a crase ` dentro da string template para chamar  a variavel

console.log(`Meu nome é ${primeiroNome}, tenho ${idade} anos de idade e possuo ${alturaEmMetros} de altura`);

// var e let
// var pode ser acessado no codigo de qlqr parte sem respeitar a ordem cronologica do codigo, aparentemente é uma pratica ruim, por isso é aconselhavel usar apenas let e const

// ESCOPO >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
//tudo criado dentro de um escopo, so existe dentro do escopo

{
    let idade = 29 // aqui o 29 so sera acessado dentro do escopo, um console.log fora nao mostrara esse valor
    console.log(idade)
}

 idade = 35

{
   console.log(idade) //nesse caso o 35 sera mostrado pois 35 foi feito na raiz do code 
}

// pesquisar o que precisar em MDN >>>>>>>>>>>>>>>>>>>>>>>

// tipos de variaveis >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

    nome = "Tarcisio";  // string
    idade = 35;         // number
    alturaEmMetros = 1.75; // number
let ehProf = true; // boolean
let nota;  
console.log(nota);// undefined
nota = 10;
console.log(nota);
nota = null;  
console.log(nota)// null

// OPERADORES ARITMETICOS >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

let x = 10, y = 2

let resultado = x + y

console.log("A soma de " + x + " e " + y + " é " + resultado)

    resultado = x - y

console.log("A subtração de " + x + " por " + y + " é " + resultado)

    resultado = x * y

console.log("A multiplicação de " + x + " por " + y + " é " + resultado)

    resultado = x / y

console.log("A divisão de " + x + " por " + y + " é " + resultado)

// Infinity  e  NaN >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// sao casos de indeterminação ou nao é um numero mesmo
// numa divisao de 10 por 0 seria igual a infinito entao aparece Infinity
// numa divisao 0/0  daria NaN
// tentar transformar um texto em numero mas que nao daria de fato um numero tambem vai aparecer o NaN
// NaN sinal de besteira rs

//Outras maneira de escrever  >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

let z = 5;

// z = z + 3
z += 3

console.log(z)
// vale para os outros operadores tambem


// Operador Modulo >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

const resto = 12 % 5
console.log(resto)

// incrementar e decrementar

let w = 10;
w ++; // o mesmo vale para x--
console.log(w)

// usando ++ antes da variavel, ela era add1 antes de retornar valor, usando ++ depois da variavel, ela retorna valor antes de add1 ex:

o = ++ w //aqui o da 11
l = w ++ // aqui l da 10

// Raiz quadrada e potencia >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
const j = Math.sqrt(49);
console.log(j)

const i = Math.pow(4,2)

console.log(i)