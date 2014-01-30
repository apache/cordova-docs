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

# media.play

Commence ou reprend la lecture d'un fichier audio.

    media.play();
    

## Description

La méthode `media.play` s'exécute de façon synchrone, elle permet de commencer ou reprendre la lecture d'un fichier audio.

## Plates-formes supportées

*   Android
*   BlackBerry WebWorks 5.0 +
*   iOS
*   Windows Phone 7 et 8
*   Tizen
*   Windows 8

## Exemple court

    // joue le clip audio
    //
    function playAudio(url) {
        // joue le fichier audio situé à cette url
        var my_media = new Media(url,
            // fonction callback de succès
            function () {
                console.log("playAudio() : fichier audio lu avec succès");
            },
            // fonction callback d'erreur
            function (err) {
                console.log("playAudio() : erreur lors de la lecture du fichier audio : " + err);
            }
        );
        // commence la lecture du clip audio
        my_media.play();
    }
    

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
    

## Particularités de BlackBerry WebWorks

*   Les appareils blackBerry ne prennent en charge qu'un nombre limité de canaux audio simultanés. Les modèles CDMA ne prennent en charge qu'un seul canal audio. Les autres modèles prennent en charge jusqu'à deux canaux en simultané. Essayer de jouer plus de fichiers audio simultanément que le nombre supporté se traduit par l'arrêt des lectures en cours.

## Particularités d'iOS

*   **numberOfLoops** : transmettre cette option à la méthode `play` permet de spécifier le nombre de lectures à la suite d'un fichier donné, par exemple :
    
        var myMedia = new Media("http://audio.ibeat.org/content/p1rj1s/p1rj1s_-_rockGuitar.mp3")
        myMedia.play({ numberOfLoops: 2 })
        

*   **playAudioWhenScreenIsLocked** : transmettre cette option à la méthode `play` permet de spécifier si la lecture doit continuer même lorsque l'écran de l'appareil est verrouillé. Si la valeur est `true` (par défaut), le bouton matériel mute est ignoré, par exemple :
    
        var myMedia = new Media("http://audio.ibeat.org/content/p1rj1s/p1rj1s_-_rockGuitar.mp3")
        myMedia.play({ playAudioWhenScreenIsLocked : false })
        

*   **ordre de recherche de fichier** : si un nom de fichier ou chemin d'accès simple est fourni, iOS recherche d'abord le fichier correspondant dans le répertoire `www`, puis dans le répertoire `documents/tmp` appartenant à l'application :
    
        var myMedia = new Media("audio/beer.mp3")
        myMedia.play()  // recherche d'abord le fichier www/audio/beer.mp3 puis <application>/documents/tmp/audio/beer.mp3