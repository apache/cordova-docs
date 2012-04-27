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

capture.captureAudio
====================

> Inicia la aplicación del dispositivo de grabación de audio y retorna información sobre el fichero capturado.

    navigator.device.capture.captureAudio( 
	    CaptureCB captureSuccess, CaptureErrorCB captureError,  [CaptureAudioOptions options]
	);

Descripción
-----------

Este método inicia una operación asíncrona de captura de audio usando la aplicación por defecto para la grabación de audio. Esta operación permite al usuario realizar varias grabaciones de una misma vez.

La operación termina cuando el usuario sale de la aplicación de grabación, o cuando se alcanza el numero máximo de grabaciones especificadas por la opción __limit__ del argumento `CaptureAudioOptions`. Si no se especifica un valor para __limit__, por defecto sera 1, y la aplicación se cerrara tras grabar un solo clip.

Cuando termina la captura, se llamara a la función 'callback' CaptureCB con el array de objetos MediaFile. Si la aplicación de grabación es cerrada por el usuario sin grabar nada, se llamara a la función `CaptureErrorCB` pasándole un objeto `CaptureError` con el código `CAPTURE_NO_MEDIA_FILES`.

Plataformas Soportadas
----------------------

- Android
- BlackBerry WebWorks (OS 5.0 y superior)
- iOS

Ejemplo Sencillo
----------------

    // función 'callback' satisfactoria
    var captureSuccess = function(mediaFiles) {
        var i, path, len;
        for (i = 0, len = mediaFiles.length; i < len; i += 1) {
            path = mediaFiles[i].fullPath;
            // hacer algo interesante con el fichero...
        }
    };

    // función 'callback' de error
    var captureError = function(error) {
        navigator.notification.alert('Código de error: ' + error.code, null, 'Error de captura');
    };

    // inicia la captura de audio
    navigator.device.capture.captureAudio(captureSuccess, captureError, {limit:2});

Ejemplo Completo
----------------

    <!DOCTYPE html>
    <html>
      <head>
        <title>Ejemplo de Capture</title>

        <script type="text/javascript" charset="utf-8" src="phonegap-1.0.0.js"></script>
        <script type="text/javascript" charset="utf-8" src="json2.js"></script>
        <script type="text/javascript" charset="utf-8">

        // Llamado cuando termine la operación de captura
        //
        function captureSuccess(mediaFiles) {
            var i, len;
            for (i = 0, len = mediaFiles.length; i < len; i += 1) {
                uploadFile(mediaFiles[i]);
            }	    
        }

        // Llamado cuando ocurra algo mal.
        // 
        function captureError(error) {
	        var msg = 'Ocurrió un error durante la captura: ' + error.code;
            navigator.notification.alert(msg, null, 'Uh oh!');
        }

        // Un botón llamara a esta función
        //
        function captureAudio() {
            // Inicia la aplicación del dispositivo de captura de audio
            // permitiendo al usuario capturar hasta 2 clips de audio.
            navigator.device.capture.captureAudio(captureSuccess, captureError, {limit: 2});
        }

        // Subir ficheros al servidor
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
                    console.log('Error subiendo el fichero ' + path + ': ' + error.code);
                },
                { fileName: name });   
        }

        </script>
        </head>
        <body>
            <button onclick="captureAudio();">Capturar audio</button> <br>
        </body>
    </html>

Peculiaridades BlackBerry WebWorks
----------------------------------

- PhoneGap para BlackBerry WebWorks intenta lanzar la aplicación __Grabadora de notas de voz__ proporcionada por RIM para grabar audio. Si la aplicación no esta instalada se pasara un CaptureError. con el código `CAPTURE_NOT_SUPPORTED`.

Peculiaridades iOS
------------------

- iOS no tiene una aplicación por defecto para grabar audio, entonces se proporcionara una interfaz simple de grabación.
