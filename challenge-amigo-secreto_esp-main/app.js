// Array que almacenará los nombres de los amigos
let amigos = [];

// Función para agregar un amigo a la lista
function agregarAmigo() {
    const input = document.getElementById("amigo");  
    const nombre = input.value.trim();  

    if (nombre === "") {
        alert("Por favor, ingresa un nombre válido.");  
        return;
    }

    if (amigos.includes(nombre)) {
        alert("Este nombre ya ha sido agregado anteriormente. Si se repite, puedes agregar un número al final.");
        return;  
    }

    amigos.push(nombre);  
    actualizarLista();  
    input.value = "";  
    input.focus();  

    // Habilitar el botón de reinicio ya que hay al menos un amigo agregado
    document.getElementById("reiniciar").removeAttribute("disabled");
}

// Función para reiniciar el juego
function reiniciarJuego() {
    amigos = []; // Vaciar el array de amigos
    limpiarLista(); // Función para limpiar la lista de amigos
    document.getElementById("resultado").innerHTML = ""; // Limpiar el resultado del sorteo

    // Deshabilitar el botón de reinicio porque no hay amigos en la lista
    document.getElementById("reiniciar").setAttribute("disabled", "true");
}

// Función para actualizar la lista visual de amigos
function actualizarLista() {
    const lista = document.getElementById("listaAmigos");  
    lista.innerHTML = "";  

    amigos.forEach(nombre => {
        const li = document.createElement("li");  
        li.textContent = '*'.repeat(nombre.length);  
        lista.appendChild(li);  
    });
}

// Función para limpiar la lista visual de amigos
function limpiarLista() {
    const lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";
}

// Función para realizar el sorteo de un amigo secreto
function sortearAmigo() {
    if (amigos.length === 0) {  
        alert("Agrega al menos un nombre antes de iniciar el sorteo.");
        return;
    }

    const indiceAleatorio = Math.floor(Math.random() * amigos.length);  
    const amigoSecreto = amigos[indiceAleatorio];  

    amigos.splice(indiceAleatorio, 1);
    actualizarLista();

    const resultado = document.getElementById("resultado");
    resultado.innerHTML = `<li>Tu amigo secreto es: <strong>${amigoSecreto}</strong></li>`;

    if (amigos.length === 0) {
        alert("Ya no quedan amigos para sortear.");
    }
}

// Añadir evento de "Enter" al campo de texto
document.getElementById("amigo").addEventListener("keydown", function(event) {
    if (event.key === "Enter") {  
        agregarAmigo();  
    }
});
