// Factory simples
function criarPessoa(nome, sobrenome, idade) {
    return {
        nome,
        sobrenome,
        idade
    }
}

console.log(criarPessoa('Victor', 'Silva', 24));
console.log(criarPessoa('Ana Liz', 'Silva', 0.2));
