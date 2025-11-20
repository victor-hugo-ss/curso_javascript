function soma() {
    let soma = 0
    for (const i in arguments) {
        soma += arguments[i]
    }
    return soma
}

console.log(soma());
console.log(soma(2));
console.log(soma(6, 3.3, 6.8));
