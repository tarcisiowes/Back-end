const celular = 7199918888;


function formatarCelular(numero) {
    let cell = `${numero}`
    let numCell = cell.split("");

    if(numCell.length == 10) {
        numCell.splice(0,0,"(");
        numCell.splice(3,0,")");
        numCell.splice(4,0," 9 ");
        numCell.splice(9,0,"-");
        return numCell.join("")

    } else if (numCell.length == 8) {
        numCell.splice(0,0,"9 ");
        numCell.splice(5,0,"-");        
        return numCell.join("")

    } else {
        return ("Numero Inválido")
    }
}


console.log(formatarCelular(celular))

