const numeros = [54, 22, 14, 87, 10, 284];

let tem = false
for ( let numb of numeros) {
    if (numb === 10) {
        tem = true;
        console.log(numeros.indexOf(10));
        break;
    }
}
if (! tem) {
    console.log(-1);
}
