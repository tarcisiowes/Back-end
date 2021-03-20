const diaDaSemana = 8;

let resto = diaDaSemana % 7;

if (diaDaSemana > 7){
    console.log("O dia da semana informado não é válido.")
} else if(resto === 0) {
  console.log("Domingo")
} else if (resto === 1) {
  console.log ("Segunda-Feira")
} else if (resto === 2) {
  console.log ("Terça-Feira")
} else if (resto === 3) {
  console.log ("Quarta-Feira")
} else if (resto === 4) {
  console.log ("Quinta-Feira")
} else if (resto === 5) {
  console.log ("Sexta-Feira")
} else if (resto === 6) {
  console.log ("Sabado-Feira")
}



