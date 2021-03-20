//valor do produto comprado.
const valorDoProduto = 100000;

//quantidade de parcelas
const quantidadeDoParcelamento = 20;

//valor pago
const valorPago = 500;

let parcela = valorDoProduto/quantidadeDoParcelamento/100 ;
let parcelapaga = valorPago/parcela ;
let parcelarestante = quantidadeDoParcelamento-parcelapaga;
 
console.log(`Restam ${parcelarestante} parcelas de R$${parcela}`)


 