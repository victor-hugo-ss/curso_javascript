
/* let contador = 1

while (contador <= 10) {
    console.log(`Contador = ${contador}`);
    contador++
}

for (let index = 1; index <= 10; index++) {
    console.log(`index = ${index}`);
} */

const notas = [5, 7, 8, 9, 2, 6, 11]

for (let i = 0; i < notas.length; i++) {
    const nota = notas[i];

    if (nota >= 0 && nota <= 5) {
        console.log(`Reprovado!\nNota: ${nota}\n`);
    } else if (nota > 5 && nota <= 10) {
        console.log(`Aprovado!\nNota: ${nota}\n`);
    } else {
        console.log('Nota inválida!\n');
    }
        
/*     switch (nota) {
        case 6: case 7: case 8: case 9: case 10:
            console.log(`Aprovado!\nNota: ${nota}\n`);
            break

        case 1: case 2: case 3: case 4: case 5:
            console.log(`Reprovado!\nNota: ${nota}\n`);
            break;
        
        default:
            console.log('Nota inválida!\n');
    } */
}