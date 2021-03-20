const caractere = "h";


let tipo


if ( caractere === "A" ||caractere ===  "E" ||caractere ===  "I" ||caractere ===  "O" ||caractere ===  "U") {
    tipo = "Vogal maiúscula"
} else if ( caractere === "a" ||caractere ===  "e" ||caractere ===  "i" ||caractere ===  "o" ||caractere ===  "u") {
    tipo = "Vogal minuscula"
} else if ( caractere === "1" ||caractere ===  "2" ||caractere ===  "3" ||caractere ===  "4" ||caractere ===  "5" ||caractere ===  "6" ||caractere ===  "7" ||caractere ===  "8" ||caractere ===  "9" ||caractere ===  "10") {
    tipo = "Número"
} else {
    tipo = "Consoante"
}

console.log(tipo)