/*

Criar um objeto que possua dois arrays como propriedades:
  receitas: []
  despesas: []

Criar uma função que calcula o total de receitas e despesas e 
mostra uma mensagem se a família está com saldo positivo ou negativo.

*/

function Registo() {
  this.receitas;
  this.despesas;
}

const familia1 = new Registo();
familia1.receitas = [34, 12, 56, 72, 12, 76, 34];
familia1.despesas = [32, 76, 34, 90, 12, 17];

function calcularSaldo(familia) {
  var totalReceitas = 0;
  var totalDespesas = 0;
  for (i = 0; i < familia.receitas.length; i++) {
    totalReceitas += familia.receitas[i];
  }
  for (i = 0; i < familia.despesas.length; i++) {
    totalDespesas += familia.despesas[i];
  }
  var saldo = totalReceitas - totalDespesas;
  console.log("Valor do saldo: " + saldo);
  return saldo >= 0 ? "Saldo Positivo" : "Saldo Negativo";
}

console.log(calcularSaldo(familia1));
