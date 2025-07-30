let amigos = [];

function adicionarAmigo(){
    let nome = document.getElementById('amigo').value;
    if (nome){
        amigos.push(nome);
        document.getElementById('amigo').value = "";
        document.getElementById('amigo').focus();
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

function sortearAmigo(){
    const resultado = document.getElementById('resultado');
    resultado.innerHTML = "";
    if (amigos.length === 0){
        resultado.innerHTML = "<li>Nenhum amigo adicionado.</li>";
        return;
        }

        const indiceAleatorio = Math.floor(Math.random() * amigos.length);
        
        const amigoSorteado = amigos[indiceAleatorio];

        resultado.innerHTML = `<li>${amigoSorteado} foi o sorteado!</li>`;
        amigos.splice(indiceAleatorio, 1); // Remove o amigo sorteado da lista
    atualizarLista(); // Atualiza a lista após remover o sorteado
}