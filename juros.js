//taxa de juros

const M = 90.000; //montante para encerrar a divida
const C = 60.000; //valor que pegou emprestado
const n = 24; //tempo prazo para pagar

const i = (M / C) ** 1/24 - 1;
console.log(i);
