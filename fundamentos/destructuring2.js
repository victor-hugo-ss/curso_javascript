function rand({min = 0, max = 1000}) {
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

console.log(rand({ max: 50, min: 40 }));

function rand1([min = 0, max = 1000]) {
    if (min > max) [min, max] = [max, min]
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

console.log(rand1([ 50, 40 ]));
console.log(rand1([987]));
console.log(rand1([, 40]));
console.log(rand1([]));
console.log(rand1());