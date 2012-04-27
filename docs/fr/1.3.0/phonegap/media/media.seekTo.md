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
============

Déplacer la position courante dans le fichier audio.

    media.seekTo(milliseconds);

Paramètres
----------

- __milliseconds__: La nouvelle position de lecture du fichier audio, en millisecondes.


Description
-----------

La fonction `media.seekTo` est une fonction asynchrone qui met à jour la position courante de lecture du fichier audio que représente un objet Media. Met également à jour le paramètre ___position__ de l'objet Media. 

Plateformes supportées
----------------------

- Android
- iOS
- Windows Phone 7 ( Mango )
    
Exemple rapide
--------------

        // Lire le clip audio désigné par src
        //
        var my_media = new Media(src, onSuccess, onError);
		my_media.play();
        // Attendre 5 secondes, puis se positionner à la 10ème seconde du clip audio
        setTimeout(function() {
            my_media.seekTo(10000);
        }, 5000);


Exemple complet
---------------

        <!DOCTYPE html>
        <html>
          <head>
            <title>Exemple Media</title>
        
            <script type="text/javascript" charset="utf-8" src="phonegap-1.3.0.js"></script>
            <script type="text/javascript" charset="utf-8">
        
            // Attendre que PhoneGap soit prêt
            //
            document.addEventListener("deviceready", onDeviceReady, false);
        
            // PhoneGap est prêt
            //
            function onDeviceReady() {
                playAudio("http://audio.ibeat.org/content/p1rj1s/p1rj1s_-_rockGuitar.mp3");
            }
        
            // Lecteur audio
            //
            var my_media = null;
            var mediaTimer = null;
        
            // Lire le clip audio
            //
            function playAudio(src) {
                // Créer l'objet Media à partir de src
                my_media = new Media(src, onSuccess, onError);
        
                // Lire le clip audio
                my_media.play();
                // Récupérer la positon courante une fois par seconde
        		mediaTimer = setInterval(function() {
            		// Récupérer la positon de my_media
           			my_media.getCurrentPosition(
                		// Callback en cas de succès
                		function(position) {
                    		if (position > -1) {
                        		setAudioPosition((position) + " sec");
                    		}
                		},
                		// Callback en cas d'erreur
                		function(e) {
                    		console.log("Erreur lors de la récupération de la position = " + e);
                		}
            		);
        		}, 1000);
        		// Attendre 5 secondes, puis se positionner à la 10ème seconde du clip audio
        		setTimeout(function() {
            		my_media.seekTo(10000);
           		}, 5000);
     		}
        
            // Arrêter la lecture audio
            // 
            function stopAudio() {
                if (my_media) {
                    my_media.stop();
                }
                clearInterval(mediaTimer);
                mediaTimer = null;
            }
        
            // Callback en cas de succès
            //
            function onSuccess() {
                console.log("playAudio() : Réussite");
            }
        
            // Callback en cas d'erreur
            //
            function onError(error) {
                alert('code : '    + error.code    + '\n' + 
                      'message : ' + error.message + '\n');
            }
        
            // Ecrire la position
            // 
            function setAudioPosition(position) {
                document.getElementById('audio_position').innerHTML = position;
            }
        
            </script>
          </head>
          <body>
            <a href="#" class="btn large" onclick="playAudio('http://audio.ibeat.org/content/p1rj1s/p1rj1s_-_rockGuitar.mp3');">Lire le clip audio</a>
            <a href="#" class="btn large" onclick="stopAudio();">Arrêter la lecture</a>
            <p id="audio_position"></p>
          </body>
        </html>