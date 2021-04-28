const name = prompt('Seja bem-vinda! Qual é o seu nome?');

const a = "Sim"
const b = "Nao"
let q1
let q2
let q3

document.getElementById("boas-vindas").innerHTML = "Olá, " + name;

const beginTest = prompt('Deseja iniciar o teste? Responda com a letra correspondente \r\n A: Sim \r\n B: Não');


if (beginTest == 'B') {

  alert('Até mais!')

}

else { 

  q1 = prompt ('Qual alternativa contém o valor de 1+1? \r\n A: 0 \r\n B: 2 \r\n C: 5');

  q2 = prompt ('Qual alternativa contém o valor de 6-1? \r\n A: 5 \r\n B: 1 \r\n C: 7');

  q3 = prompt ('Qual alternativa contém o valor de 5+5? \r\n A: 7 \r\n B: 10 \r\n C: 8');

}

if (q1 == 'B')

{document.getElementById("resposta-certa").innerHTML += "\r\n Resposta 1";
console.log(document.getElementById("resposta-certa"))

}

else{document.getElementById("resposta-incorreta").innerHTML += "\r\n Resposta 1";
console.log(document.getElementById("resposta-incorreta"))

}

if (q2 == 'A')

{document.getElementById("resposta-certa").innerHTML += "\r\n Resposta 2";
console.log(document.getElementById("resposta-certa"))

}

else{document.getElementById("resposta-incorreta").innerHTML += "\r\n Resposta 2";


}

if (q3 == 'B')

{
  document.getElementById("resposta-certa").innerHTML += "\r\n Resposta 3";


}

else{document.getElementById("resposta-incorreta").innerHTML += "\r\n Resposta 3";


}













 



