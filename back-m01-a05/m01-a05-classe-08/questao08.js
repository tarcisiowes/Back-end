const carro = {
    ligado: false,
    velocidade: 0,

}

function ligar(carro) {
    if (!carro.ligado) {
        carro.ligado = true
        console.log(`Carro ligado. Velocidade: ${carro.velocidade}`) //Vruuuummm!!!  vrum vrum vrum
    } else {
        console.log(`Este carro já está ligado.`)
    }
}

function acelerar(carro) {
    if (carro.ligado) {
        carro.velocidade += 10 
        console.log(`Carro ligado. Velocidade: ${carro.velocidade} `) //Vruuuummm!!! alguem me segure!
    } else {
        console.log(`Não é possível acelerar um carro desligado.`)
    }
}

function desacelerar(carro) {
    if (carro.ligado) {
        carro.velocidade -= 10 
        console.log(`Carro ligado. Velocidade: ${carro.velocidade}`) //Freeeia!!! é muita velocidade
    } else {
        console.log(`Não é possível desacelerar um carro desligado.`)
    }
}

function desligar(carro) {
    if (carro.ligado) {
        carro.ligado = false 
        carro.velocidade = 0
        console.log(`Carro desligado. Velocidade: ${carro.velocidade}`)//Gubai Masta
    } else {
        console.log(`Este carro já está desligado.`)
    }
}




desligar(carro)
ligar(carro)
ligar(carro)
acelerar(carro)
acelerar(carro)
desacelerar(carro)
desligar(carro)
acelerar(carro)
desacelerar(carro)