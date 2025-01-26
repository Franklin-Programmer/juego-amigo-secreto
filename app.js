let listaDeAmigos = []; // Declaro un arreglo vacío para almacenar los nombres de los amigos

function agregarAmigo() {
    // Obtengo el valor del campo de entrada con id 'amigos'
    let amigos = document.getElementById('amigo').value;

    // Verifica si el campo de entrada está vacío
    if (amigos === '') {
        // Muestro una alerta si el campo está vacío
        alert('Por favor, ingrese un nombre válido');
        return;
    }
        // Agrego el nombre al arreglo listaDeAmigos
        listaDeAmigos.push(amigos);

        // Limpio el campo de entrada
        document.getElementById('amigo').value = '';

        // Llamo a la función mostrarAmigos para actualizar la lista en el HTML
        mostrarAmigos();
    }

function mostrarAmigos() {
    // Obtengo el elemento de la lista con id 'listaAmigos'
    let lista = document.getElementById('listaAmigos');

    // Limpio la lista existente para evitar duplicados
    lista.innerHTML = "";
      // Recorro el arreglo listaDeAmigos
        for (let i = 0; i < listaDeAmigos.length; i++) {
        // Crea un nuevo elemento <li>
        let li = document.createElement('li');

        // Establesco el texto del <li> con el nombre del amigo
        li.textContent = listaDeAmigos[i];

        // Agrego el <li> a la lista
        lista.appendChild(li); 
    }
}

function sortearAmigo() {
    // Verifico si hay amigos en la lista
   // Verifico si la lista de amigos está vacía
if (listaDeAmigos.length === 0) {
    // Muestro una alerta si la lista está vacía
    alert('Por favor, agrega amigos antes de sortear');
    return;
}

// Genero un índice aleatorio
let indiceAleatorio = Math.floor(Math.random() * listaDeAmigos.length);

// Obtengo el amigo sorteado
let amigoSorteado = listaDeAmigos[indiceAleatorio];

// Actualizo el contenido del elemento de resultado
document.getElementById('resultado').innerHTML = `Amigo sorteado: ${amigoSorteado}`;
}