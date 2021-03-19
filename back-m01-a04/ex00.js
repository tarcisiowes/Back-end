const paises = ["Japão", "China", "Alemanha", "USA", "Espanha"]

paises.push("Italia")
console.log(paises)

paises.pop()
console.log(paises)

paises.unshift("Italia")
console.log(paises)

paises.shift()
console.log(paises)
console.log(paises[paises.length -1])
console.log(paises[1])
console.log(paises[2])

const megasena = [ 02, 05, 12, 18, 35, 55]

for(let resultado of megasena) {
    console.log(resultado)
}

const palavra = "iiiiiiiiiiiiiiiiiiiii"

let encontrado = false //aqui é para configurar o if final caso nao encontre

for ( let letra of palavra) {
    if (letra === "j") {
        encontrado = true;
        console.log("Tem a letra j");
        break; // para parar o codigo caso encontre a letra, senao vai imprimir todas
    }
}

if (!encontrado) {
    console.log("Não tem a letra j");
}

total = 0
for (let azinho of palavra) {
    if( azinho === "a") {
        total +=1
        
    }
}

console.log(total)

if (total === 0) {
    console.log("Não tem a letra a");
}



for (let i = 10 ; i >= 0; i--) {
    console.log(i)
}

for (let i = 0; i <= 50; i = i+2) {
    console.log(i)
}

const list =["Taru", "Joao", "Maria"]

let tem = false
for ( let nome of list) {
    if (nome === "Joao") {
        tem = true;
        console.log(list.indexOf("Joao"));
        break; // para parar o codigo caso encontre a letra, senao vai imprimir todas
    }
}
if (! tem) {
    console.log("Não encontrado");
}

