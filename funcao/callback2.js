const notas = [6.5, 5.7, 3.7, 3.2, 9.7, 6.9, 4.8, 7.6, 7.1]

// Sem callback

const notasBaixas1 = []
for (let nota in notas) {
    if (notas[nota] < 7) {
        notasBaixas1.push(notas[nota])
    }
}
console.log(notasBaixas1);

// Com callback
const notasMenor = nota => nota < 7
const notasBaixas2 = notas.filter(notasMenor)
console.log(notasBaixas2);
