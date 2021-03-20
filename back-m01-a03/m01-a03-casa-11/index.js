//renda mensal do aluno, em centavos.
const rendaMensalEmCentavos = 350000;

// Tempo decorrido de contrato. Se for maior que 60 meses, o aluno não deve mais nada.
const mesesDecorridos = 12;

// Soma das parcelas já pagas pelo aluno nos meses anteriores (em centavos). Se for igual a 18 mil reais, o aluno não deve pagar mais nada, pois já quitou a dívida.
const totalJaPagoPeloAluno = 1810000;

let parcela

if (rendaMensalEmCentavos < 200000) {
    console.log("O valor da parcela desse mês é R$ 0 reais. Nenhum valor é devido pois a renda do estudante está abaixo do valor mínimo de R$ 2000 reais.")

} else if (totalJaPagoPeloAluno >= 1800000){
    console.log("Nenhum valor é devido pois o estudante ja quitou sua divida")
    
} else if (mesesDecorridos >= 60) {
    console.log("Nenhum valor é devido pois o tempo maximo do prazo da divida foi atingido")
} else {
    console.log(`O valor da parcela desse mês é R$ ${rendaMensalEmCentavos*0.18/100} reais`)
}