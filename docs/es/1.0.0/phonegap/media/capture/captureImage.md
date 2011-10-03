capture.captureImage
====================

> Inicia la aplicación de cámara y retorna información sobre los ficheros de imágenes capturados.

    navigator.device.capture.captureImage( 
	    CaptureCB captureSuccess, CaptureErrorCB captureError, [CaptureImageOptions options]
	);

Descripción
-----------

Este método inicia una operación asíncrona para capturar imágenes usando la aplicación de cámara del dispositivo. Se pueden tomar varias imágenes en una sola sesión.
La operación de captura termina cuando el usuario sale de la aplicación de cámara, o cuando se alcanza el numero máximo de imágenes especificado en la opción __limit__ de `CaptureImageOptions`. Si no se especifica ningún valor,  se usara 1 por defecto.
Cuando la operación de captura termine, llamara a la función 'callback' `CaptureCB` con un array de objetos `MediaFile` con información sobre las imágenes capturadas. Si el usuario cierra la aplicación antes de capturar ninguna imagen, se lanzara la función 'callback' `CaptureErrorCB` pasándole de argumento un `CaptureError` con código `CAPTURE_NO_MEDIA_FILES`.


Plataformas Soportadas
----------------------

- Android
- BlackBerry WebWorks (OS 5.0 y superior)
- iOS

Ejemplo Rápido
--------------

    // Función 'callback' de captura
    var captureSuccess = function(mediaFiles) {
        var i, path, len;
        for (i = 0, len = mediaFiles.length; i < len; i += 1) {
            path = mediaFiles[i].fullPath;
            // hacer algo interesante con el fichero
        }
    };

    // función 'callback' de error
    var captureError = function(error) {
        navigator.notification.alert('Código de error: ' + error.code, null, 'Capture Error');
    };

    // Inicia la captura de imágenes
    navigator.device.capture.captureImage(captureSuccess, captureError, {limit:2});

Ejemplo Completo
----------------

    <!DOCTYPE html>
    <html>
      <head>
        <title>Ejemplo de Capture</title>

        <script type="text/javascript" charset="utf-8" src="phonegap.js"></script>
        <script type="text/javascript" charset="utf-8" src="json2.js"></script>
        <script type="text/javascript" charset="utf-8">

        // Función 'callback' satisfactoria
        //
        function captureSuccess(mediaFiles) {
            var i, len;
            for (i = 0, len = mediaFiles.length; i < len; i += 1) {
                uploadFile(mediaFiles[i]);
            }	    
        }

        // Llamada si algún error ocurre.
        // 
        function captureError(error) {
	        var msg = 'Ocurrió un error mientras se capturaba: ' + error.code;
            navigator.notification.alert(msg, null, 'Uh oh!');
        }

        // Un botón llamara esta función
        //
        function captureImage() {
            // Lanza la aplicación de cámara, 
            // y permite capturar hasta 2 imágenes
            navigator.device.capture.captureImage(captureSuccess, captureError, {limit: 2});
        }

        // Sube los ficheros al servidor
        function uploadFile(mediaFile) {
            var ft = new FileTransfer(),
                path = mediaFile.fullPath,
                name = mediaFile.name;

            ft.upload(path,
                "http://my.domain.com/upload.php",
                function(result) {
                    console.log('Subida correcta: ' + result.responseCode);
                    console.log(result.bytesSent + ' bytes enviados');
                },
                function(error) {
                    console.log('Error en la subida del fichero ' + path + ': ' + error.code);
                },
                { fileName: name });   
        }

        </script>
        </head>
        <body>
            <button onclick="captureImage();">Capturar imagen</button> <br>
        </body>
    </html>


