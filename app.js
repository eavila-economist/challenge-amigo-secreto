//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let amigos = [];

function listaAmigos() {
    var lista = document.getElementById('listaAmigos');
    lista.innerHTML = '';
    for (var i = 0; i < amigos.length; i++) {
        var item = document.createElement('li');
        item.appendChild(document.createTextNode(amigos[i]));
        lista.appendChild(item);
    }
}

function adicionarAmigo() {
    // Trim the input value to remove extra spaces
    var amigo = document.getElementById('amigo').value.trim();

    // Check if the trimmed value is empty
    if (amigo === '') {
        // Display message if no valid input is provided
        document.getElementById('alert').innerHTML = 'Por favor, insira um nome.';
    } else {
        // Add the friend to the list if valid input is provided
        amigos.push(amigo);
        document.getElementById('amigo').value = '';
        document.getElementById('amigo').focus();
        document.getElementById('resultado').innerHTML = '';
        document.getElementById('alert').innerHTML = '';
        listaAmigos();
    }
}


function sortearAmigo() {
    if (amigos.length === 0) {
        document.getElementById('alert').innerHTML = 'Nenhum amigo disponível para sortear.';
        return;
    }
    else {
        var amigoSorteado = amigos[Math.floor(Math.random() * amigos.length)];
        document.getElementById('resultado').innerHTML = amigoSorteado;
        document.getElementById('alert').innerHTML = '';
    }
}


function limparLista() {
    amigos = [];
    listaAmigos();
    document.getElementById('resultado').innerHTML = '';
}