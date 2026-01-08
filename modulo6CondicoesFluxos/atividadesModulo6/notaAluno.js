function verificaNota(nota) {
    if ( nota >= 9 && nota <= 10){
        console.log('Nota A')
    } else if (nota >= 8 && nota <= 8.99){
        console.log('NOTA B')
    } else if (nota >= 6 && nota <= 7.99){
        console.log('NOTA C+')
    }else if (nota >= 4 && nota <= 5.99){
        console.log('NOTA C-')
    }else if (nota >= 0 && nota <= 3.99){
        console.log('NOTA F')
    }
}

verificaNota(6.74)