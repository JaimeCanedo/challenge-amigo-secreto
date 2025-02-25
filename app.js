// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];

function agregarAmigo() {
    let texto = document.getElementById('amigo');
    let nombre = texto.value.trim();
    if (nombre !== "") {
        amigos.push(nombre);
        texto.value = "";
        actualizarLista();
    } else {
        alert("Por favor, ingresa un nombre");
    }
}

function actualizarLista() { 
    let listaAmigos = document.getElementById('listaAmigos');
    listaAmigos.innerHTML = "";
    amigos.forEach(amigo => {
        let li = document.createElement("li");
        li.appendChild(document.createTextNode(amigo));
        listaAmigos.appendChild(li);
    });
}

function sortearAmigo() {
    if (amigos.length > 0) {
        let indice = Math.floor(Math.random() * amigos.length);
        let sorteado = amigos.splice(indice, 1)[0];
        let resultado = document.getElementById('resultado');
        resultado.innerHTML = `El amigo secreto es ${sorteado}`;
        amigos = [];
        actualizarLista();
    } else {
        alert('No hay amigos en la lista');
    }
}