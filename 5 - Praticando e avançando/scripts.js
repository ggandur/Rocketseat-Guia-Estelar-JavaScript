// 1 - Declarar uma variável de nome weight
let weight

// 2 - Qual é o tipo da variável declarada ?
// Como ainda não foi atribuído nenhum valor, seu tipo é undefined
console.log(typeof weight)

// 3 - Declare uma variável com os seguintes dados:
//     name: String
//     age: Number (int)
//     stars: Number (float)
//     isSubscribed: Boolean

let nome = "Joao"
let age = 35
let stars = 1.87
let isSubscribed = false

console.log(nome, age, stars, isSubscribed)

// 4 - Atribuir as mesmas variáveis agora para um objeto e imprimir os valores

let myObject = {
    name: "Joao",
    age: 35,
    stars: 1.87,
    isSubscribed: false,
}

weight = 80

console.log(`${myObject.name} de idade ${myObject.age} pesa ${weight} kg.`)

// 5 - Declarar um array vazio de nome students

let students = []

// 6 - Inserir o objeto criado na questão 4 dentro do array.

students[0] = myObject

console.log(students)

// 7 - Printar no console o valor da posição 0 do array

console.log(students[0])

// 8 - Criar um novo objeto e colocar na posição 1 do array

let myObject2 = {
    name: "Maria",
    age: 32,
    stars: 4.93,
    isSubscribed: true,
}

students[1] = myObject2

console.log(students)

// 9 - Qual será o output do código abaixo ?

console.log(a)
var a = 1

// Undefined pois a variável 'a' só é declarada e recebe uma atribuição depois do log.