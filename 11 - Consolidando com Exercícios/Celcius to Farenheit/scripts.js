/*

Criar uma função que receba uma string em Celcius ou Farenheit
e faça a conversão de uma unidade para a outra

C = (F - 32) * 5/9
F = C * 9/5 + 32

*/

let temperature = "320F";

function convert(temperatureValue) {
  let convertedTemperature;
  let numeralValue = temperatureValue;
  numeralValue = Number(String(numeralValue).slice(0, -1));

  if (temperatureValue.search("C") == -1) {
    numeralValue = ((numeralValue - 32) * 5) / 9;
    convertedTemperature = numeralValue + "C";
  } else {
    numeralValue = (numeralValue * 9) / 5 + 32;
    convertedTemperature = numeralValue + "F";
  }
  return convertedTemperature;
}

console.log(convert(temperature));
