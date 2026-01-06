// Crie duas variáveis com notas de um aluno. Calcule a média. Se for maior ou igual a 7, mostre "Aprovado". Caso contrário, mostre "Reprovado".

function situacaoAluno(nota1, nota2){
    let mediaAluno = (nota1 + nota2) / 2;
    if(mediaAluno >= 7){
        console.log('PARABENS!!! Aprovado, com média: ', mediaAluno.toFixed(2))
    } else if (6 <= mediaAluno && mediaAluno < 6.99){
        console.log('Vai para conselho, com média: ', mediaAluno.toFixed(2))
    } else {
        console.log('Infelizmente Reprovado, com média: ', mediaAluno.toFixed(2))
    }
}
situacaoAluno(7,8)