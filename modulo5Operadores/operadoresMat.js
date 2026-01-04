const numUm = 4;
const numDois = 8;

//Somando o valor da variavel, com outro valor(Mais, Menos, Vezes, Divisão)
let numeroTres = 2;
numeroTres +=3;
console.log (numeroTres);

const subtracao = numUm-numDois;
console.log('Subtracao: ', subtracao);

const soma = numUm+numDois;
console.log('Soma: ', soma);

const div = numUm/numDois;
console.log('Divisao: ', div);


const multi = numUm*numDois;
console.log('Multiplicacao: ', multi);

const complexa = (numUm+numDois)*numUm; //segue as regras matematicas
console.log('Complexa: ', complexa);

const restoDaDiv = 13 % 2;
console.log('Resto da divisão: ', restoDaDiv);

const potencia = 2**3;
console.log('Potencia: ', potencia);

let contador = 5; //IMPORTANTE
contador ++; //Aqui ele vai adicionar um numero na variavel contador... NAO PODE SER CONST
console.log('Incrementando: ', contador);
contador --;
console.log('Decrementando aqui ele pega o valor do contador mostrado no incrementando de cima e tira 1, mostrando o resultado 5: ', contador);
contador --;
console.log('Decrementando, aqui ele pega o valor do contador de cima e tira 1, mostrando o resultado 4: ', contador);