const listaDeTarefas = new Array(
    `Passar pano no quarto`,
    `Recolher lixo`,
    `Lavar louça`,
    `Lavar roupa`
);

const idadeFazer = 14;
const temAjuda = false;
const temIdadeEajuda = true;

console.log("Tarefas possíveis:");
console.log(listaDeTarefas);

if (idadeFazer >= 11 || temAjuda == true) {
    console.log("Tem idade para fazer ou está acompanhado")
    listaDeTarefas.splice(2,1);
} else {
    console.log("Não tem idade para fazer")
}

console.log("Fazendo: \n")
if(idadeFazer >= 11 && temAjuda) {
    console.log("Bora fazer");
    console.log(listaDeTarefas[1], listaDeTarefas[0]);
} else {
    console.log("Você não pode fazer");
}