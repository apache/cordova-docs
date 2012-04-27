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

media.stopRecord
================

Detiene la grabación de un fichero de audio.

    media.stopRecord();


Descripción
-----------

La función `media.stopRecord` es una función síncrona que detiene la grabación de un fichero de audio.

Plataformas Soportadas
----------------------

- Android
- iOS
    
Ejemplo Rápido
--------------

    // Graba audio
    // 
    function recordAudio() {
        var src = "myrecording.mp3";
        var mediaRec = new Media(src,
            // función 'callback' satisfactoria
            function() {
                console.log("recordAudio():Audio correcto");
            },
            
            // función 'callback' de error
            function(err) {
                console.log("recordAudio():Error de audio: "+ err.code);
            });

        // Graba audio
        mediaRec.startRecord();

        // Detiene la grabación tras 10 segundos
        setTimeout(function() {
            mediaRec.stopRecord();
        }, 10000);
    }


Ejemplo Completo
----------------

    <!DOCTYPE html>
    <html>
      <head>
        <title>Ejemplo de Media</title>

        <script type="text/javascript" charset="utf-8" src="phonegap-1.0.0.js"></script>
        <script type="text/javascript" charset="utf-8">

        // Espera a que PhoneGap se inicie
        //
        document.addEventListener("deviceready", onDeviceReady, false);

        // Graba audio
        // 
        function recordAudio() {
            var src = "myrecording.mp3";
            var mediaRec = new Media(src, onSuccess, onError);

            // Graba audio
            mediaRec.startRecord();

            // Detiene la grabación tras 10 segundos
            var recTime = 0;
            var recInterval = setInterval(function() {
                recTime = recTime + 1;
                setAudioPosition(recTime + " seg");
                if (recTime >= 10) {
                    clearInterval(recInterval);
                    mediaRec.stopRecord();
                }
            }, 1000);
        }

        // PhoneGap esta listo
        //
        function onDeviceReady() {
            recordAudio();
        }
    
        // función 'callback' onSuccess
        //
        function onSuccess() {
            console.log("recordAudio():Audio correcto");
        }
    
        // función 'callback' onError
        //
        function onError(error) {
            alert('código: '  + error.code    + '\n' + 
                  'mensaje: ' + error.message + '\n');
        }

        // Muestra la posición
        // 
        function setAudioPosition(position) {
            document.getElementById('audio_position').innerHTML = position;
        }

        </script>
      </head>
      <body>
        <p id="media">Grabando audio...</p>
        <p id="audio_position"></p>
      </body>
    </html>



