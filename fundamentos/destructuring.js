
const pessoa = {
    nome: 'Victor',
    idade: 24,
    endereco: {
        logradouro: 'Av. 15 de agosto',
        numero: 425,
        referencia: 'Vila da Nina Abreu'
    }
};

const { nome, idade } = pessoa;
console.log(`Meu nome é ${nome} e tenho ${idade} anos.`);

const { nome: n, idade: i } = pessoa;
console.log(`Meu nome é ${n} e tenho ${i} anos.`);

const { endereco: { logradouro: r, numero: nu } } = pessoa
console.log(`Endereço:\nRua: ${r}.\nNúmero: ${nu}.`);
