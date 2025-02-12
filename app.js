let amigos = [];

function adicionarAmigo() {
    let input = document.querySelector("#amigo");
    let nomeAmigo = input.value.trim();

    if (nomeAmigo === "") {
        alert("Por favor, insira um nome.");
        return;
    }

    amigos.push(nomeAmigo);
    console.log(amigos);
    input.value = ""; // Limpa o campo de entrada
    atualizarLista();
}

function atualizarLista() {
    let lista = document.querySelector("#listaAmigos")
    lista.innerHTML = ""; 

    for (let amigo of amigos) {
        lista.innerHTML += `<li>${amigo}</li>`; // Adiciona cada amigo como um <li>
    }
}

function sortearAmigo() {
    if (amigos.length === 0) { 
        alert("Não há amigos para sortear!");
        return;
    }

    //Gerar um índice aleatório
    let indiceAleatorio = Math.floor(Math.random() * amigos.length);
    
    //nome sorteado
    let amigoSorteado = amigos[indiceAleatorio];

    //exibir sorteado
    let resultado = document.querySelector("#resultado");
    resultado.innerHTML = `<li>${amigoSorteado}</li>`;
}