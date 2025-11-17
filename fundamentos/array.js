const valores = [7.7, 6, 'Victor', {nome: 'Victor', sobrenome: 'Silva'}];

console.log(valores[2]);
console.log(valores[0], valores[3].sobrenome);
console.log(valores.length);

valores.push({id: 3}); // Adiciona valores no final do array.
console.log(valores);

valores.pop(); // Remove o ultimo valor do array.
console.log(valores);

delete valores[0]; // Remove valor correspondente ao indice informado.
console.log(valores);