let notaMat = 9;
let notaPort = 4;
let notaCie = 1;
const calculoMedia = (notaMat + notaPort + notaCie) / 3;

console.log('Média final de:', calculoMedia)
if(calculoMedia >= 7){
    console.log('APROVADO!!!')
} else if (calculoMedia >= 6 && calculoMedia <7){
    console.log('CONSELHO -_-')
} else {
    console.log('REPROVADO')
}

