const nome = 'Victor';

const contacenacao = 'Olá ' + nome + '!';
const template = `Olá ${nome}!`

console.log(contacenacao, template);

// expressoes...
console.log(`1 + 1 = ${1 + 1}`);

const up = texto => texto.toUpperCase();
console.log(`Ei... ${up('cuidado')}!`);
