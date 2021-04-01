const palavras = ['livro', 'caneta', 'sol', 'carro', 'orelha'];

const temMaisQue5Letras = palavras.some(x => x.length > 5);

console.log(temMaisQue5Letras ? "Existe palavra inválida" : "Nao existe palavra inválida")