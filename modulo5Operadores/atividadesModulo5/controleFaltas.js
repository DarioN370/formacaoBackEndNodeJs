// Considere totalAulas = 80 e faltas = 25. Calcule se as faltas ultrapassam 25% das aulas. Mostre a conclusão no console. 

function controleFaltas(totalAulas, faltas){
    // porcentagem, pega o X, faz dividido pelo total e depois vezes 100
    let porcentagemDeFaltas = (faltas/totalAulas)*100
    if(porcentagemDeFaltas <= 25){
        console.log('Sua Porcentagem de faltas é:', porcentagemDeFaltas.toFixed(2),'%, esta aprovado em presença')
    } else {
        console.log('Faltas excessivas:', porcentagemDeFaltas.toFixed(2),'%')
    }
}
controleFaltas(165,30)