let cliques = 0;
function contadorDeCliques() {
    cliques ++; //cliques++ é a mesma coisa que eu usar cliques = cliques + 1
    console.log('Botão clicado! Total de cliques:', cliques);
};

//Criando 3 testes
contadorDeCliques();
contadorDeCliques();
contadorDeCliques();

console.log('Total de cliques:', cliques);