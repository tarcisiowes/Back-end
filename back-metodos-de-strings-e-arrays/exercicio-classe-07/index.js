const texto = "Aprenda programar do zero na Cubos Academy";

let low = texto.toLowerCase(); 
// console.log(low);


let link = low;
let linkAnterior = "";

while (link !== linkAnterior) {
    linkAnterior = link;
    link = link.replace(" " , "-");

}
console.log(link)
