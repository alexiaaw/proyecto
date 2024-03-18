$(document).ready(function() {
    $('#contactForm').submit(function(event) {
        event.preventDefault(); // Evitar que el formulario se envíe de manera predeterminada

        // Recopilar datos del formulario
        var formData = {
            'name': $('#name').val(),
            'email': $('#email').val(),
            'subject': $('#subject').val(),
            'message': $('#message').val()
        };

        // Enviar datos del formulario a Formspree utilizando AJAX
        $.ajax({
            type: 'POST',
            url: 'https://formspree.io/f/xvoeqnzk', // Reemplaza 'tu-endpoint-de-formulario' con el enlace que Formspree te proporcionó
            data: formData,
            dataType: 'json',
            encode: true
        })
        .done(function(data) {
            // Manejar la respuesta de Formspree aquí
            console.log(data);
            // Mostrar un mensaje al usuario indicando que el formulario se ha enviado correctamente
            $('#success').html('<div class="alert alert-success">¡Gracias! Tu mensaje ha sido enviado, responderemos a tu dirección de correo.</div>');
        })
        .fail(function(data) {
            // Manejar errores si el formulario no se puede enviar
            console.log(data);
            // Mostrar un mensaje de error al usuario
            $('#success').html('<div class="alert alert-danger">Error al enviar el formulario. Por favor, inténtelo de nuevo más tarde.</div>');
        });
    });
});
