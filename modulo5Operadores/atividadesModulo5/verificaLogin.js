// Crie duas variáveis temLogin e temSenha. Use operadores lógicos para verificar se o usuário pode acessar o sistema.

function verificaLogin(senha, login) {
    const temLogin = true;
    const temSenha = true;
    const senhaCadastral = 'Senha123';
    const loginCadastral = 'Dario';

    if(temLogin == true && temSenha == true && senhaCadastral == senha && loginCadastral == login){
        console.log('Acesso permitido')
    } else {
        console.log('Acesso negado')
    };
}
verificaLogin('Senha123', 'Dario')