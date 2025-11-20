const notas = [5, 7, 8, 9, 2, 6, 11]

for (let i in notas) {
    console.log(notas[i]);
    
}

const pessoa = {
    nome: 'Victor',
    idade: 24,
    peso: 78
}

for (let atributo in pessoa) {
    console.log(atributo, pessoa[atributo]);
    
}