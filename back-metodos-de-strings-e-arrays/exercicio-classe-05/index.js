const comentario = "Esse  é muito perigoso!";

const comentarioArray = comentario.split(" ")
const proibido = ["covid", "Covid","COVID","Pandemia","PANDEMIA","pandemia"]
let tem = 0
for(let palavra of comentarioArray){
    if (proibido.includes(palavra)) {
        tem += 1        
    }    

}

console.log(tem > 0? "Comentário bloqueado por conter palavras proibidas" : "Comentário autorizado")

