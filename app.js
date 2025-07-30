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

    
}