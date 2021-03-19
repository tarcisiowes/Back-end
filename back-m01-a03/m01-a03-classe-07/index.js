const aposentada = false;
const portadoraDeDoenca = true;
const totalDeRendimentos = 3000000; //emCentavos

//seu código aqui

if (portadoraDeDoenca || aposentada) {
    console.log("ISENTA")
} else if(totalDeRendimentos < 2955970) {
    console.log("VAZA LEAO! JA TA DIFICIL SEM VOCE")
} else {
    console.log("PEGA LEAO")
}
