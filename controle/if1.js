
function soBoaNoticia(nota) {
    if(nota >= 7){
        console.log('Aprovado com ' + nota);
    }
}

soBoaNoticia(7)

function seForVerdadeEuFalo(valor) {
    if(valor) {
        console.log('É verdade... ' + valor);
    }
}

seForVerdadeEuFalo() // Retorna false
seForVerdadeEuFalo(5)