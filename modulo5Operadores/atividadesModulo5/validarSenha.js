// Crie duas variáveis com senhas digitadas em momentos diferentes. Verifique se são iguais usando operadores de comparação.

function validaSenha(senha1, senha2){
    let validacao = senha1 == senha2;

    if(validacao == true){
        console.log('Senhas Iguais')
    } else {
        console.log('Senhas Diferentes')
    }
}
validaSenha(123, 123)