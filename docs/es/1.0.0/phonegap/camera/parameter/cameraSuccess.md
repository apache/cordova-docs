cameraSuccess
=============

Función 'callback' onSuccess que proporciona información de la imagen.

    function(imageData) {
        // Hacer algo con la imagen
    }

Argumentos
----------

- __imageData:__ Imagen codificada en Base64, o la ruta URI del fichero de imagen, según la opción que uses en `cameraOptions`. (`String`)

Ejemplo
-------

    // Mostrar imagen
    //
    function cameraCallback(imageData) {
        var image = document.getElementById('miImagen');
        image.src = "data:image/jpeg;base64," + imageData;
    }
