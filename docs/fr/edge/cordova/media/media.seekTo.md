---

license: Licensed to the Apache Software Foundation (ASF) under one or more contributor license agreements. See the NOTICE file distributed with this work for additional information regarding copyright ownership. The ASF licenses this file to you under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License. You may obtain a copy of the License at

           http://www.apache.org/licenses/LICENSE-2.0
    
         Unless required by applicable law or agreed to in writing,
         software distributed under the License is distributed on an
         "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
         KIND, either express or implied.  See the License for the
         specific language governing permissions and limitations
    

   under the License.
---

# media.seekTo

Définit la position de lecture actuelle dans un fichier audio.

    media.seekTo(milliseconds);
    

## Paramètres

*   **milliseconds** : la nouvelle position de lecture au sein du fichier audio, en millisecondes.

## Description

La méthode `media.seekTo` s'exécute de façon asynchrone, elle permet la mise à jour de la position de lecture au sein d'un fichier audio, référencé par un objet `Media`. Elle met également à jour la valeur de la propriété `position` de l'objet `Media` correspondant.

## Plates-formes supportées

*   Android
*   BlackBerry WebWorks (OS 6.0 et supérieur)
*   iOS
*   Windows Phone 7 et 8
*   Tizen
*   Windows 8

## Exemple court

    // lecteur audio
    //
    var my_media = new Media(src, onSuccess, onError);
        my_media.play();
    // avance la position à 10 secondes du début du fichier après 5 secondes
    setTimeout(function() {
        my_media.seekTo(10000);
    }, 5000);
    

## Exemple complet

        <!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN"
                              "http://www.w3.org/TR/html4/strict.dtd">
        <html>
          <head>
            <title>Exemple M&eacute;dia</title>
    
            <script type="text/javascript" charset="utf-8" src="cordova.js"></script>
            <script type="text/javascript" charset="utf-8">
    
            // attend que les API de l'appareil soient chargées
            //
            document.addEventListener("deviceready", onDeviceReady, false);
    
            // les API de l'appareil sont disponibles
            //
            function onDeviceReady() {
                playAudio("http://audio.ibeat.org/content/p1rj1s/p1rj1s_-_rockGuitar.mp3");
            }
    
            // lecteur audio
            //
            var my_media = null;
            var mediaTimer = null;
    
            // joue le clip audio
            //
            function playAudio(src) {
                // crée un objet média à partir de src
                my_media = new Media(src, onSuccess, onError);
    
                // lance la lecture du clip audio
                my_media.play();
    
                // met à jour la position de my_media à chaque seconde
                mediaTimer = setInterval(function() {
                    // récupère la position de lecture de my_media
                    my_media.getCurrentPosition(
                        // fonction callback de succès
                        function(position) {
                            if (position > -1) {
                                setAudioPosition((position) + " secondes");
                            }
                        },
                        // fonction callback d'erreur
                        function(e) {
                            console.log("Erreur lors de la récupération de la position : " + e);
                        }
                    );
                }, 1000);
    
                // SeekTo to 10 seconds after 5 seconds
                setTimeout(function() {
                    my_media.seekTo(10000);
                }, 5000);
            }
    
            // arrête la lecture du clip audio
            //
            function stopAudio() {
                if (my_media) {
                    my_media.stop();
                }
                clearInterval(mediaTimer);
                mediaTimer = null;
            }
    
            // fonction callback onSuccess
            //
            function onSuccess() {
                console.log("playAudio() : clip joué avec succès");
            }
    
            // fonction callback onError
            //
            function onError(error) {
                alert('code : '    + error.code    + '\n' +
                      'message : ' + error.message + '\n');
            }
    
            // affiche la position du clip audio
            //
            function setAudioPosition(position) {
                document.getElementById('audio_position').innerHTML = position;
            }
    
            </script>
          </head>
          <body>
            <a href="#" class="btn large" onclick="playAudio('http://audio.ibeat.org/content/p1rj1s/p1rj1s_-_rockGuitar.mp3');">Jouer le clip audio</a>
            <a href="#" class="btn large" onclick="stopAudio();">Arr&ecirc;ter la lecture</a>
            <p id="audio_position"></p>
          </body>
        </html>
    

## Particularités de BlackBerry WebWorks

*   Cette méthode n'est pas prise en charge sur les périphériques BlackBerry OS 5.