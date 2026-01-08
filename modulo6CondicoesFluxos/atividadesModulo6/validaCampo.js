let email = '';
let nome = 'Dario';
let idade = 25;
let cidade = 'São Paulo';

function validaEmail(email) {
    if (email == null || nome == null || idade == null) {
        console.log('Campo necessario vazio')
    } else {
        console.log('Acesso Liberado')
    }
}

validaEmail()