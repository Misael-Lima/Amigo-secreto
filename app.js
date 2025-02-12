let amigos = [];

function adicionarAmigo() {
    let input = document.querySelector("#amigo");
    let nomeAmigo = input.value.trim();

    if (nomeAmigo === "") {
        alert("Por favor, insira um nome.");
        return;
    }

    amigos.push(nomeAmigo);
    console.log(amigos); // Exibe a lista no console
    input.value = ""; // Limpa o campo de entrada
}