const palavras = ["arroz", "feijão", "carne", "cerveja", "macarrão"];

const temBebida = palavras.some(x => x === "cerveja" || x === "vodka" );

console.log(temBebida ? "Revise sua lista, joão. Possui bebida com venda proibida!" : "Tudo certo, vamos as compras!")