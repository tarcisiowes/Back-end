let identificador = "123";
let nome = "José silva costa";
let email = "      jose@email.com  ";
let tags = ['financeiro', 'administrativo', 'geral'];

const idvalido = `${identificador}`.padStart(6,"0")

const emailvalido = email.trim()

const tagvalida = tags.join()

const nomecompleto = nome.split(" ")


for(let i  = 0; i < nomecompleto.length; i++) {
   
    nomecompleto[i] = nomecompleto[i].replace(nomecompleto[i][0], nomecompleto[i][0].toUpperCase());
    
}
const nomevalido = nomecompleto.join( " ")

console.log(idvalido)
console.log(nomevalido)
console.log(emailvalido)
console.log(tagvalida)


