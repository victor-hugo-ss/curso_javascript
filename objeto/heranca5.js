console.log(typeof String)
console.log(typeof Array)
console.log(typeof Object)

String.prototype.reverse = function () {
    return this.split('').reverse().join('')
}

console.log('Victor hugo'.reverse())

Array.prototype.primeiro = function () {
    return this[0]
}

console.log([5, 6, 4, 3, 6, 3].primeiro())
