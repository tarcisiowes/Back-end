const letras = ["A", "a", "B", "C", "E", "e"];

let encontrado = false
let total = 0
for ( let letra of letras) {
    if (letra === "E" || letra === "e" ) {
        encontrado = true;
        if( letra === "E" || letra === "e") {
            total +=1            
        }       
        
    }
    
}

console.log(`Foram encontradas ${total} ${(total===1? "letra" : "letras")} "E" ou "e".`);

if (!encontrado) {
    console.log(`Nenhuma letra "E" ou "e" foi encontrada.`);
}