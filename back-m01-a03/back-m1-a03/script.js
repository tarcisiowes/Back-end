const valorDaCompra = 10000;
const numeroDeParcelas = 12;

if (numeroDeParcelas === 1) {
    let debito = (valorDaCompra * 0.9 / 100);
    console.log(`Pagando o valor a vista, voce ganha 10% off e o total fica em R$${debito.toFixed(2)}` );
} else if (numeroDeParcelas<=6){
    let credito = valorDaCompra / numeroDeParcelas /100
    console.log(`Parcelando em ${numeroDeParcelas}x sem juros, o valor da parcela fica em R$${credito.toFixed(2)}, totalizando R$${(valorDaCompra/100).toFixed(2)}.` )
} else if (numeroDeParcelas <= 12){
    let montante = valorDaCompra * (Math.pow((1 + 0.01),numeroDeParcelas)) /100
    let credito = montante / numeroDeParcelas 
    console.log(`Parcelando em ${numeroDeParcelas}x , o valor da parcela fica em R$${credito.toFixed(2)}, totalizando R$${montante.toFixed(2)}.` )
} else {
    console.log(`Perdoe-nos, pois nao conseguimos parcelar mais do que 12x.` )
}






