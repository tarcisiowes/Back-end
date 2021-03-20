//tipo de pagamento (dinheiro, credito, debito, cheque).
const tipoDePagamento = "cheque";

//valor da mercadoria (centavos)
const valorDoProduto = 13000;

let total

if( tipoDePagamento == "credito" ) {
    total = valorDoProduto*0.95/100
    console.log(`Valor a ser pago: R$${total.toFixed(2)}`)
} else if (tipoDePagamento == "cheque") {
    total = valorDoProduto*0.97/100
    console.log(`Valor a ser pago: R$${total.toFixed(2)}`)
} else {
    total = valorDoProduto*0.90/100
    console.log(`Valor a ser pago: R$${total.toFixed(2)}`)
}