//soma
function soma(valor1, valor2) {
  return Number(valor1) + Number(valor2);}
//subtração
function subtracao(valor1, valor2) {
  return Number(valor1) - Number(valor2);}
//multiplicação
function multiplicacao(valor1, valor2) {
  return Number(valor1) * Number(valor2);}
//divisão
function divisao(valor1, valor2) {
  return Number(valor1) / Number(valor2);}

let valor1;
let valor2;
let operacao = "";
do {operacao = prompt(`Qual operação ?  'soma', 'subtração', 'multiplicação', 'divisão' ou 'sair'.`);
  //testa a condição, laço de repetição
  while (operacao != "soma" && operacao != "subtração" && operacao != "multiplicação" && operacao != "divisão" && operacao != "sair")
  {
    //alerta 
    alert(`Operação não reconhecida!`);
    operacao = prompt(`Qual operação ? 'soma', 'subtração', 'multiplicação', 'divisão' ou 'sair'.`);}

  //if e else verdadeiro ou falso
  if (operacao === "sair") {
    break;
  }
  // primeiro valor 
  valor1 = prompt(`Insira o primeiro valor:`);
  // segundo valor  
  valor2 = prompt(`Insira o segundo valor:`);
  //operação soma 
  switch (operacao) {case 'soma':alert(`O resultado da ${operacao} é ${soma(valor1, valor2)}`);
      //operação subtração  
      break;
    case 'subtração':
      alert(`O resultado da ${operacao} é ${subtracao(valor1, valor2)}`);
      //operação multiplicação       
      break;
    case 'multiplicação':
      alert(`O resultado da ${operacao} é ${multiplicacao(valor1, valor2)}`);
      //operação divisão
      break;
    case 'divisão':
      alert(`O resultado da ${operacao} é ${divisao(valor1, valor2)}`);
      break;}
  //laço de repetição
} while (operacao === "soma" ||
operacao === "subtração" ||
operacao === "multiplicação" || operacao === "divisão");
alert(`Próximo Cálculo!`);