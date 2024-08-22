// Espera a que el contenido del DOM esté completamente cargado
document.addEventListener('DOMContentLoaded', () => {
    // Obtiene el elemento de entrada con el id 'nombre-id'
    const inputField = document.getElementById('nombre-id');

    // Añade un escuchador de eventos para el evento 'input' en el campo de entrada
    inputField.addEventListener('input', (event) => {
        // Obtiene el valor actual del campo de entrada
        const value = event.target.value;

        // Filtra el valor para permitir solo letras y espacios
        // La expresión regular [^a-zA-Z\s] busca caracteres que NO sean letras o espacios
        // El modificador 'g' asegura que se aplique la búsqueda globalmente a todo el texto
        const filteredValue = value.replace(/[^a-zA-Z\s]/g, '');

        // Establece el valor filtrado de vuelta en el campo de entrada
        event.target.value = filteredValue;
    });
});

// Espera a que el contenido del DOM esté completamente cargado
document.addEventListener('DOMContentLoaded', () => {
    // Obtiene el elemento textarea con el id 'mensaje-id'
    const textArea = document.getElementById('mensaje-id');
    const maximoDeCaracteres = 500;

    // Añade un escuchador de eventos para el evento 'input' en el textarea
    textArea.addEventListener('input', () => {
        const tamañoPalabra = textArea.value.length;

        // Si se supera el máximo de caracteres, recorta el valor a 30 caracteres
        if (tamañoPalabra > maximoDeCaracteres) {
            textArea.value = textArea.value.substring(0, maximoDeCaracteres);
        }
    });
});
