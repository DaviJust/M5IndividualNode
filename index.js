const redlineSync = require("readline-sync");
// import da biblioteca readline sync
const lista = [];
// Cria um array vazio para armazenar as propriedades.
// A lista Servira de pote para guarda os registros das propriedades que serão retornadas pelo readline
let entrada = "";
// É a entrada que servirá  como um comando para terminar os registros das propriedades, ou para ver as propriedades registradas.
//OBS:Será a porta que o usuário entrará e sairá

const adicionarNaLista = (prop) => {
  lista.push(prop);
  //Dentro da array serão adicionadas a leitura das propriedades do CSS, ou seja: A cada nova propriedade será computada um novo registro

};

const ordenar = () => {
  lista.sort();
  //Imprime as propriedades em ordem alfabética
};

const listar = () => {
   lista.forEach((elemento) => { console.log(elemento); }); 
   //Retorna no terminal as propriedades em cada linha
};


while (true)
// Laço while que executa enquanto a entrada(input) não for "sair"
{
  entrada = redlineSync.question("Digite a propriedade CSS ou 'SAIR' para exibir a listagem e encerrar: ");
  //  readline que é um modulo responsável pela interface que realiza a leitura dos dados.
  // Pergunta qual a propriedade, o readline será responsável pela  interface e leitura dos dados.
