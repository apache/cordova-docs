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

# media.release

Libère certaines ressources audio du système d'exploitation.

    media.release();
    

## Description

La méthode `media.release` s'exécute de façon synchrone, elle permet de libérer certaines des ressources audio du système d'exploitation. Ceci est particulièrement important pour Android, puisque seule une quantité finie d'instances OpenCore est permise pour la lecture de médias. Les applications doivent en général appeler cette fonction `release` pour toute ressource `Media` qui n'est plus nécessaire.

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
    
    my_media.play();
    my_media.stop();
    my_media.release();
    

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
            <a href="#" class="btn large" onclick="playAudio('http://audio.ibeat.org/content/p1rj1s/p1rj1s_-_rockGuitar.mp3');">Jouer le clip audi</a>
            <a href="#" class="btn large" onclick="pauseAudio();">Mettre en pause la lecture</a>
            <a href="#" class="btn large" onclick="stopAudio();">Arr&ecirc;ter la lecture</a>
            <p id="audio_position"></p>
          </body>
        </html>