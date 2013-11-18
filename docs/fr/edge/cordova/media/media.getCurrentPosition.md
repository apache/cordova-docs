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

# media.getCurrentPosition

Retourne la position courante dans un fichier audio.

    media.getCurrentPosition(mediaSuccess, [mediaError]);
    

## Paramètres

*   **mediaSuccess** : la fonction callback à laquelle est transmise la position actuelle exprimée en secondes.

*   **mediaError** : (facultative) la fonction callback exécutée si une erreur se produit.

## Description

Une fonction asynchrone donnant accès à la position de lecture du fichier audio représenté par un objet `Media` donné. Met également à jour la valeur de la propriété `position` de l'objet `Media`.

## Plates-formes supportées

*   Android

*   BlackBerry WebWorks 5.0 +

*   iOS

*   Windows Phone 7 et 8

*   Tizen

*   Windows 8

## Exemple court

    // lecteur audio
    //
    var my_media = new Media(src, onSuccess, onError);
    
    // met à jour la position de lecture du fichier à chaque seconde
    var mediaTimer = setInterval(function () {
        // récupère la position
        my_media.getCurrentPosition(
            // fonction callback de succès
            function (position) {
                if (position > -1) {
                    console.log((position) + " secondes");
                }
            },
            // fonction callback d'erreur
            function (e) {
                console.log("Erreur lors de l'obtention de la position : " + e);
            }
        );
    }, 1000);
    

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
                if (mediaTimer == null) {
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
                                setAudioPosition("Erreur : " + e);
                            }
                        );
                    }, 1000);
                }
            }
    
            // met en pause la lecture du clip audio
            //
            function pauseAudio() {
                if (my_media) {
                    my_media.pause();
                }
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
            <a href="#" class="btn large" onclick="pauseAudio();">Mettre en pause la lecture</a>
            <a href="#" class="btn large" onclick="stopAudio();">Arr&ecirc;ter la lecture</a>
            <p id="audio_position"></p>
          </body>
        </html>