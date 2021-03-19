const nomes = ["Ana", "Joana", "Carlos", "amanda"];

const list = []
for(let i = 0; i < nomes.length; i++ ) {
    let nome = nomes[i] // aqui é como se nomes[i] virasse uma array e nome vai ler so a pos 0, e vai se repetindo ate acabar a array nomes
    if(nome[0] === "A" || nome[0] === "a" ) { // aqui rola o filtro
        list.push(nome)
    }
  
}
console.log(list)

//comentando pois nessa o professor ajudou demais, eu tava em outro caminho