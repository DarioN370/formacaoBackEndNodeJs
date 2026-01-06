const idade = 22;
const maiorDeIdade = idade >= 18;
const possuiCNH = true;

const podeDirigir = maiorDeIdade && possuiCNH; //&& AND 
const podeViajarSolo = maiorDeIdade || possuiCNH; // || OR
const precisaDeAcompanhante = !maiorDeIdade; // NOT, aqui ele inverte o valor, ou seja, qnd 'maiorDeIdade' for true, o 'precisaDeAcompanhante' vai ser false, e vice e versa

console.log('Pode dirigir ?', podeDirigir);
console.log('Pode viajar sozinha ?', podeViajarSolo);
console.log('Precisa de acompanhante ?', precisaDeAcompanhante);

// EXEMPLO AND - Entrar na FESTA

if(maiorDeIdade && possuiCNH) {
    console.log('Pode entrar na festa');
} else {
    console.log('Nao pode entrar, CAI FORA!!!');
};

// EXEMPLO OR - Pode fazer a compra
let temCartaoCredito = false;
let temDinheiro = true;

if(temCartaoCredito || temDinheiro) {
    console.log('Pode fazer a compra');
} else {
    console.log('Ta duro dorme!!!');
};

// EXEMPLO NOT - Esta chovendo
let estaChovendo = true;

if (!estaChovendo) {
    console.log('Pode sair sem guarda-chuva');
} else {
    console.log('Leva guarda-chuva');
};

// COMBINANDO TODOS OS OPERADORES
let idadeFan = 20;
let possuiIngresso = true;
let entradaPermitida = (idadeFan >= 18 && possuiIngresso);

if (entradaPermitida) {
    console.log('Entrada Permitida');
} else {
    console.log('Entrada Negada');
};