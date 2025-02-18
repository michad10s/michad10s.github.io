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

    // Obtiene el elemento textarea con el id 'mensaje-id'
    const textArea = document.getElementById('mensaje-id');
    const maximoDeCaracteres = 500;

    // Añade un escuchador de eventos para el evento 'input' en el textarea
    textArea.addEventListener('input', () => {
        const tamañoPalabra = textArea.value.length;

        // Si se supera el máximo de caracteres, recorta el valor a 500 caracteres
        if (tamañoPalabra > maximoDeCaracteres) {
            textArea.value = textArea.value.substring(0, maximoDeCaracteres);
        }
    });

    // Enviar el formulario de contacto
    document.getElementById('contact-form').addEventListener('submit', function (e) {
        e.preventDefault(); // Prevenir el comportamiento predeterminado del formulario

        // Obtener los valores del formulario
        const nombre = document.getElementById('nombre-id').value;
        const correo = document.getElementById('correo-id').value;
        const mensaje = document.getElementById('mensaje-id').value;

        // Crear los datos a enviar
        const data = {
            nombre: nombre,
            correo: correo,
            mensaje: mensaje
        };

        // Realizar la solicitud para enviar el correo
        fetch('https://tu-servidor.com/enviar-correo', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        })
        .then(response => response.json())
        .then(data => {
            alert('Correo enviado exitosamente');
            // Limpiar el formulario después de enviar
            document.getElementById('contact-form').reset();
        })
        .catch(error => {
            alert('Hubo un problema al enviar el correo');
            console.error(error);
        });
    });
});
