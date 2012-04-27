---
license: Licensed to the Apache Software Foundation (ASF) under one
         or more contributor license agreements.  See the NOTICE file
         distributed with this work for additional information
         regarding copyright ownership.  The ASF licenses this file
         to you under the Apache License, Version 2.0 (the
         "License"); you may not use this file except in compliance
         with the License.  You may obtain a copy of the License at

           http://www.apache.org/licenses/LICENSE-2.0

         Unless required by applicable law or agreed to in writing,
         software distributed under the License is distributed on an
         "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
         KIND, either express or implied.  See the License for the
         specific language governing permissions and limitations
         under the License.
---

capture.captureVideo
====================

> Inicia la aplicación de cámara de vídeo y retorna información sobre los clips de vídeo capturados.

    navigator.device.capture.captureVideo( 
	    CaptureCB captureSuccess, CaptureErrorCB captureError, [CaptureVideoOptions options]
	);

Descripción
-----------

Este método inicia una operación asíncrona para capturar clips de vídeo usando la aplicación de cámara del dispositivo. Se pueden grabar varios clips en una sola sesión.
El proceso de captura finaliza cuando el usuario sale de la aplicación de grabación, o cuando se alcanza el numero máximo de grabaciones especificado en la opción __limit__ de `CaptureVideoOptions`. Si no se especifica un valor se tomara 1 por defecto, y la aplicación se cerrara tras grabar un clip de vídeo.

Cuando la aplicación termine, se llamara a la función 'callback' pasándole un array de objetos `MediaFile` describiendo cada fichero de vídeo. Si el proceso es cancelado por el usuario sin capturar ningún vídeo, se lanzara la función 'callback' `CaptureErrorCB` pasándole un objeto `CaptureError` con el código de error `CAPTURE_NO_MEDIA_FILES`.

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
            // hacer algo interesante con los ficheros
        }
    };

    // Función 'callback' de error
    var captureError = function(error) {
        navigator.notification.alert('Error code: ' + error.code, null, 'Capture Error');
    };

    // Inicia la captura de vídeo
    navigator.device.capture.captureVideo(captureSuccess, captureError, {limit:2});

Ejemplo Completo
----------------

    <!DOCTYPE html>
    <html>
      <head>
        <title>Ejemplo de Capture</title>

        <script type="text/javascript" charset="utf-8" src="phonegap-1.0.0.js"></script>
        <script type="text/javascript" charset="utf-8" src="json2.js"></script>
        <script type="text/javascript" charset="utf-8">

        // Llamado cuando el proceso de captura finalice
        //
        function captureSuccess(mediaFiles) {
            var i, len;
            for (i = 0, len = mediaFiles.length; i < len; i += 1) {
                uploadFile(mediaFiles[i]);
            }	    
        }

        // Llamado si ocurre algún error
        // 
        function captureError(error) {
	        var msg = 'Ocurrió un error mientras se capturaba: ' + error.code;
            navigator.notification.alert(msg, null, 'Uh oh!');
        }

        // Un botón llamara esta función
        //
        function captureVideo() {
            // Inicia la aplicación de grabación
            // y permite capturar hasta 2 clips de vídeo
            navigator.device.capture.captureVideo(captureSuccess, captureError, {limit: 2});
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
            <button onclick="captureVideo();">Capturar vídeo</button> <br>
        </body>
    </html>

Peculiaridades BlackBerry WebWorks
----------------------------------

- Phonegap para BlackBerry WebWorks intentara iniciar la aplicación __Grabadora de videos__, que se distribuye en RIM. Si la aplicación no esta instalada se recibirá un objeto `CaptureError` con el código `CAPTURE_NOT_SUPPORTED`.
