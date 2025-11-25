const fabricantes = ['Mercedes', 'Audi', 'BMW']

function imprimir(nome, indice) {
    console.log(`${indice + 1}. ${nome}`);
}

fabricantes.forEach(imprimir)

console.log();

fabricantes.forEach(function(fabricante, indice) {
    console.log(indice, fabricante);
})

console.log();

fabricantes.forEach((fabricante, indice) => console.log(indice, fabricante))
