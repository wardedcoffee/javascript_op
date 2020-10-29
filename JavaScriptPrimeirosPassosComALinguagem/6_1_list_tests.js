// console.log(`Nomes de Pessoas`);

const listaDePessoas = new Array(
    `Ana`,
    `Jaqueline`,
    `Karina`,
    `Josefina`,
    `Jessica`,
    `Denise`,
    `Yolanda`,
    `Rafaela`,
    `Tatiane`,
    `Vanessa`

);

listaDePessoas.push(`Marcos`) // está adicionando ao final da lista
console.log("Nomes de Pessoas:");

listaDePessoas.splice(0,6); // exclui o número indicado na lista começando do zero, o segundo número controla o tamanho da lista exibida no console.

console.log(listaDePessoas);

console.log(listaDePessoas[1], listaDePessoas[2]); // chama as pessoas na lista, está atrelado ao resultado do "listaDePessoas.splice();"
