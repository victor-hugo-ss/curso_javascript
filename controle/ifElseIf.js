Number.prototype.entre = function (inicio, fim) {
    return this >= inicio && this <= fim
}

const imprimirResultado = function (n) {
    if (n.entre(9, 10)) {
        console.log('Quadro de honra');
        
    } else if(n.entre(7, 8.99)){
        console.log('Aprovado');
        
    } else if (n.entre(4, 6.99)){
        console.log('Recuperação');

    } else if (n.entre(0, 3.99)){
        console.log('Reprovado');

    } else {
        console.log('Nota inválida');
        
    }
}

imprimirResultado(10)
imprimirResultado(8.9)
imprimirResultado(6.55)
imprimirResultado(2.3)
imprimirResultado(-1)
imprimirResultado(11)