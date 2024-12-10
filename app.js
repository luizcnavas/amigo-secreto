let todosNomes = [];

function adicionar() {
    //variaveis
    let nome = document.getElementById("nome-amigo").value;
    let listaDeNomes = document.getElementById("lista-amigos");

    //condições para adicionar um nome
    if (nome == 0) {
        alert("Digite um nome!");
        return;
    } else if (todosNomes.includes(nome)) {
        alert("Esse nome já foi adicionado!");
        return;
    } else {
    todosNomes.push(nome);
    listaDeNomes.textContent = todosNomes.join (", ");
    }
    //limpa o input quando adiciona um nome
    document.getElementById("nome-amigo").value = "";
    }

function sortear() {

    //se apertar para sortear sem tiver um nome recebe aviso
    if (todosNomes.length == 0) {
        alert("A lista está vazia. Adicione nomes antes de sortear.");
        return;
    }

    //embaralha a array
    embaralhador(todosNomes);

    //pega o array embaralhado e faz um ciclo, pegando o primeiro elemendo do array
    //passa por todos os elementos e no final aponta para o primeiro elemento novamente

    let resultado = [];
    for (let i = 0; i < todosNomes.length; i++) {
        let proximo = (i + 1) % todosNomes.length;                       // Índice do próximo nome (volta ao início no final)
        resultado.push(`${todosNomes[i]} -> ${todosNomes[proximo]}`);    //é apenas uma string no array resultado
        }
    
        // exibição do sorteio do amigo secreto
        let areaResultado = document.getElementById("lista-sorteio");
        areaResultado.innerHTML = resultado.join("<br>");
}
function reiniciar() {

    todosNomes = [];    //limpa o array
    document.getElementById("lista-amigos").textContent = "";        //limpa a lista de nomes
    document.getElementById("lista-sorteio").textContent = "";       //limpa o sorteio
    alert("A lista foi reiniciada. Você pode começar novamente.");

}

// embaralha um array
function embaralhador(array) {
    for (let i = array.length - 1; i > 0; i--) {        //faz o sorteio do array baseado no i(total de elementos do array - 1)
      const j = Math.floor(Math.random() * (i + 1));    //e j que é um numero aleatório entre 0 e 1 * i + 1
      [array[i], array[j]] = [array[j], array[i]];      //essa ultima lnha do embaralhador faz com que o i e j se embaralhe
    }}