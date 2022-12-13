/*

Criar um sistema para transformar notas numéricas
para caractéres A, B, C, D e F

*/

let grades = [10, 20, 30, 40, 50, 60, 70, 80, 90];
let arrayLenght = grades.length;
console.log('Notas em numerais: ' + grades)

function transformGrades(gradesArray, length) {
  for (var i = 0; i < length; i++) {
    switch (true) {
      case gradesArray[i] < 60:
        gradesArray[i] = "F";
        continue;
      case gradesArray[i] < 70:
        gradesArray[i] = "D";
        continue;
      case gradesArray[i] < 80:
        gradesArray[i] = "C";
        continue;
      case gradesArray[i] < 90:
        gradesArray[i] = "B";
        continue;
      case gradesArray[i] >= 90:
        gradesArray[i] = "A";
        continue;
    }
  }
  return gradesArray;
}

let newGrades = transformGrades(grades, arrayLenght);
console.log('Notas em Caracteres: ' + newGrades);
