CaptureCB
=========

> Llamado tras una captura correcta.

    function captureSuccess( MediaFile[] mediaFiles ) { ... };

Descripción
-----------

Esta función se llama después de que se complete una operación de captura. Esto quiere decir cuando se capture un fichero y el usuario salga de la aplicación, o cuando se alcance el limite máximo.

Cada objeto `MediaFile` describe un fichero multimedia capturado.  

Ejemplo Rápido
--------------

    // función 'callback' satisfactoria
    function captureSuccess(mediaFiles) {
        var i, path, len;
        for (i = 0, len = mediaFiles.length; i < len; i += 1) {
            path = mediaFiles[i].fullPath;
            // hacer algo interesante con el fichero
        }
    };
