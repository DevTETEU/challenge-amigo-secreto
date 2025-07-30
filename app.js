let amigos = [];

function adicionarAmigo(){
    let nome = document.getElementById('amigo').value;
    if (nome){
        amigos.push(nome);
        document.getElementById('amigo').value = "";
        atualizarLista(); // Atualiza a lista na tela
    }
}

function atualizarLista(){
    const mostrar = document.getElementById('toggleLista').checked;
    const lista = document.getElementById('listaAmigos');
    lista.innerHTML = "";

    if (mostrar) {
        amigos.forEach(function(amigo) {
            const li = document.createElement('li');
            li.textContent = amigo;
            lista.appendChild(li);
        });
        lista.style.display = "block";
    } else {
        lista.style.display = "none";
    }
}