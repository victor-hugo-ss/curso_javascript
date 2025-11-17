const escola = 'cod3r';

console.log(escola.charAt(4)); // Retorna a letra que está no indice 4.

console.log(escola.charCodeAt(3)); // Retorna valor na tabela unicode.

console.log(escola.indexOf(3)); // retorna o indice que corresponde ao valor repassado.

console.log(escola.substring(2)); // percorre a partir do indice informado até o final da string.
console.log(escola.substring(0, 3)); // Significa que a string será percorrida sem incluir o ultimo valor.

console.log('Escola '.concat(escola).concat('!')); // Usado para concatenar string.
console.log('Escola ' + escola + '!'); // Outra forma de concatenar strings.

console.log(escola.replace(3, 'a')); // Substitui o valor informado no indice repassado replace(indice, valor).

console.log('Victor,Juliana,Ana Liz'.split(',')); //Converte a string em um array, utilizando o serapador repassado por parâmetro.
