const prova = {
    aluno: "João",
    materia: "Português",
    valor: 10,
    questoes: [
        {
            resposta: "a",
            correta: "b"
        },
        {
            resposta: "c",
            correta: "c"
        },
        {
            resposta: "b",
            correta: "b"
        },
        {
            resposta: "e",
            correta: "b"
        },
        {
            resposta: "c",
            correta: "c"
        }
    ]
}

let acertos = 0

function corrigirProva(prova) {
    
    for(let questao of prova.questoes) {
        if(questao.resposta === questao.correta)
        acertos += 1
        
    }
}
corrigirProva(prova)

pontos = prova.valor/prova.questoes.length
console.log(`O aluno(a) ${prova.aluno} acertou ${acertos} questões e obteve nota ${pontos*acertos}`)