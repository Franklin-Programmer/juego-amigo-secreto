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
}
