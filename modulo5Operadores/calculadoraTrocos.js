console.log('Boas Vindas a calculadora de trocos!');
function calculadora(valorPago, valorCompra) {
    let valorTroco = valorPago - valorCompra;
    // o .toFixed(2) é pra manter até duas casas decimais
    if(valorTroco >= 0){
        console.log('Valor da sua compra: R$', valorCompra)
        console.log('Valor Recebido: R$', valorPago)
        console.log('O valor a ser dado de troco é: R$', valorTroco.toFixed(2))
    } else {
        console.log(valorCompra)
        console.log(valorPago)
        console.log('Você não pagou o suficiente, ainda faltam: R$', valorTroco.toFixed(2))
    }
};
calculadora(10, 5);