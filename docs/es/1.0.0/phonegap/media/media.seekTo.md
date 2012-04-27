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

media.seekTo
========================

Fija la posición actual en el fichero de audio.

    media.seekTo(milisegundos);

Argumentos
----------

- __milliseconds__: La nueva posición en el fichero de audio (en milisegundos).


Descripción
-----------

La función `media.seekTo` es una función síncrona que actualiza la posición actual de reproducción del objeto `Media, este método también actualiza su atributo __position__.

Plataformas Soportadas
----------------------

- Android
- iOS
    
Ejemplo Rápido
--------------

        // Reproductor de audio
        //
        var my_media = new Media(src, onSuccess, onError);
		my_media.play();
        // Pasados 5 segundos, cambia la posición hacia el segundo numero 10
        setTimeout(function() {
            my_media.seekTo(10000);
        }, 5000);


Ejemplo Completo
----------------

        <!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN"
                      "http://www.w3.org/TR/html4/strict.dtd">
        <html>
          <head>
            <title>Ejemplo de Media</title>
        
            <script type="text/javascript" charset="utf-8" src="phonegap-1.0.0.js"></script>
            <script type="text/javascript" charset="utf-8">
        
            // Espere a que PhoneGap se inicie
            //
            document.addEventListener("deviceready", onDeviceReady, false);
        
            // PhoneGap esta listo
            //
            function onDeviceReady() {
                playAudio("http://audio.ibeat.org/content/p1rj1s/p1rj1s_-_rockGuitar.mp3");
            }
        
            // Un reproductor de audio
            //
            var my_media = null;
            var mediaTimer = null;
        
            // Reproduce el audio
            //
            function playAudio(src) {
                // Crea un objeto `Media` desde el argumento
                my_media = new Media(src, onSuccess, onError);
        
                // Reproduce el audio
                my_media.play();
                // Actualiza la posición cada segundo
        		mediaTimer = setInterval(function() {
            		// Obtiene la posición actual
           			my_media.getCurrentPosition(
                		// Función 'callback' satisfactoria
                		function(position) {
                    		if (position > -1) {
                        		setAudioPosition(position + " seg");
                    		}
                		},
                		// error callback
                		function(e) {
                    		console.log("Error obteniendo posición=" + e);
                		}
            		);
        		}, 1000);
        		// Pasados 5 segundos, cambia la posición hacia el segundo numero 10
        		setTimeout(function() {
            		my_media.seekTo(10000);
           		}, 5000);
     		}
        
            // Detiene la reproducción
            // 
            function stopAudio() {
                if (my_media) {
                    my_media.stop();
                }
                clearInterval(mediaTimer);
                mediaTimer = null;
            }
        
            // Función 'callback' satisfactoria
            //
            function onSuccess() {
                console.log("playAudio():Audio correcto");
            }
        
            // Función 'callback' de error
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
            <a href="#" class="btn large" onclick="playAudio('http://audio.ibeat.org/content/p1rj1s/p1rj1s_-_rockGuitar.mp3');">Reproducir</a>
            <a href="#" class="btn large" onclick="stopAudio();">Detener</a>
            <p id="audio_position"></p>
          </body>
        </html>
