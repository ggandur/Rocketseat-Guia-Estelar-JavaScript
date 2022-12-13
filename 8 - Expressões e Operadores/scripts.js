// Comparações entre Number e um objeto Number
const value = 4
console.log(value)

const valueObject = new Number(4)
console.log(valueObject)

console.log(value.toString())
console.log(valueObject.toString())

// Comparações com '==' e '==='
const one = 1
const two = 2

console.log(one == 1)
console.log(one == "1")
console.log(one === "1")