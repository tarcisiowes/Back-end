const carro = {
    marca: "Toyota",
    modelo: "Etios",
    ano:2017,
    potencia: 1.3
}

const pessoa = {
    nome: "Tarcisio",
    idade:15,
    altura:1.75,
    profissao: "Professor",
    temCNH: true,
    apelido:[ "Taru", "Tarushi"],
    carro // shorthand variavel ja atribuida com mesmo nome

}
console.log(`${pessoa.nome} tem ${pessoa.idade} anos, ${pessoa.altura}m de altura, ${pessoa.temCNH ? "possui":"não possui"} CNH e tem os seguintes apelidos:`)
for(let nick of pessoa.apelido){
    console.log(`- ${nick}`);
}

console.log(pessoa)
//==============================================================================
const cliente = {
    nome: "Baladeiro",
    idade:18,
    consumo: [
        {   
            nome:"Vodka",
            preco: 1000,
            quantidade: 4,
        },

        {
            nome:"Cerveja",
            preco: 800,
            quantidade: 6,
        },

        {
            nome:"agua",
            preco: 500,
            quantidade: 3, 
        },

        {
            nome:"cigarro",
            preco: 500,
            quantidade: 2, 
        },

    ]
}

console.log(cliente)

console.log(cliente.nome)
console.log(cliente.idade)

cliente.idade = 30

console.log(cliente.idade)

console.log(cliente.consumo[0].nome)

console.log(cliente.consumo[cliente.consumo.length - 1].preco)

let total = 0;
for (let item of cliente.consumo) {
    total = total + (item.preco * item.quantidade)
}

console.log(`${cliente.nome} , o total a ser pago é de R$${total/100}`)

//==============================================================================
console.log(`Ola! Meu nome é ${pessoa.nome} tenho ${pessoa.idade} anos, ${pessoa.altura}m de altura, ${pessoa.temCNH ? "possuo":"não possuo"} CNH e sou ${pessoa.profissao}`)


function imprimirOla() {
    console.log("Ola!");
}

imprimirOla();
//==============================================================================
function apresentar(pessoa) {
    if(pessoa.idade < 25) {
        console.log(`Ola! Meu nome é ${pessoa.nome} sou um jovem de ${pessoa.idade} anos, ${pessoa.altura}m de altura, ${pessoa.temCNH ? "possuo":"não possuo"} CNH e sou ${pessoa.profissao}`)
    } else if (pessoa.idade < 60) {
        console.log(`Ola! Meu nome é ${pessoa.nome} sou um adulto de ${pessoa.idade} anos, ${pessoa.altura}m de altura, ${pessoa.temCNH ? "possuo":"não possuo"} CNH e sou ${pessoa.profissao}`)
    } else {
        console.log(`Ola! Meu nome é ${pessoa.nome} sou um idoso de ${pessoa.idade} anos, ${pessoa.altura}m de altura, ${pessoa.temCNH ? "possuo":"não possuo"} CNH e sou ${pessoa.profissao}`)
    }
}

apresentar(pessoa)

//==============================================================================
function ehMaior() {
    if(pessoa.idade < 25) {
        return "jovem"
    } else if (pessoa.idade < 60) {
        return "adulto"
    } else {
        return "idoso"
    }
}
function apresentar(pessoa) {
    console.log(`Ola! Meu nome é ${pessoa.nome} sou um ${ehMaior()} de ${pessoa.idade} anos, ${pessoa.altura}m de altura, ${pessoa.temCNH ? "possuo":"não possuo"} CNH e sou ${pessoa.profissao}`)

}
apresentar(pessoa)