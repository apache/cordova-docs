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

# media.startRecord

Permet de démarrer l'enregistrement d'un fichier audio.

    media.startRecord();
    

## Description

La méthode `media.startRecord` s'exécute de façon synchrone, elle démarre l'enregistrement d'un fichier audio.

## Plates-formes supportées

*   Android
*   BlackBerry WebWorks 5.0 +
*   iOS
*   Windows Phone 7 et 8
*   Windows 8

## Exemple court

    // enregistrement audio
    //
    function recordAudio() {
        var src = "myrecording.mp3";
        var mediaRec = new Media(src,
            // fonction callback de succès
            function() {
                console.log("recordAudio() : audio enregistré avec succès");
            },
    
            // fonction callback d'erreur
            function(err) {
                console.log("recordAudio() : erreur lors de l'enregistrement audio : " + err.code);
            });
    
        // débute l'enregistrement audio
        mediaRec.startRecord();
    }
    

## Exemple complet

    <!DOCTYPE html>
    <html>
      <head>
        <title>Exemple enregistrement audio</title>
    
        <script type="text/javascript" charset="utf-8" src="cordova.js"></script>
        <script type="text/javascript" charset="utf-8">
    
        // attend le chargement des API de l'appareil
        //
        document.addEventListener("deviceready", onDeviceReady, false);
    
        // enregistrement audio
        //
        function recordAudio() {
            var src = "myrecording.amr";
            var mediaRec = new Media(src, onSuccess, onError);
    
            // démarre l'enregistrement audio
            mediaRec.startRecord();
    
            // arrête l'enregistrement après 10 secondes
            var recTime = 0;
            var recInterval = setInterval(function() {
                recTime = recTime + 1;
                setAudioPosition(recTime + " secondes");
                if (recTime >= 10) {
                    clearInterval(recInterval);
                    mediaRec.stopRecord();
                }
            }, 1000);
        }
    
        // les API de l'appareil sont disponibles
        //
        function onDeviceReady() {
            recordAudio();
        }
    
        // fonction callback onSuccess
        //
        function onSuccess() {
            console.log("recordAudio() : audio enregistré avec succès");
        }
    
        // fonction callback onError
        //
        function onError(error) {
            alert('code : '    + error.code    + '\n' +
                  'message : ' + error.message + '\n');
        }
    
        // affiche la position de lecture du fichier audio
        //
        function setAudioPosition(position) {
            document.getElementById('audio_position').innerHTML = position;
        }
    
        </script>
      </head>
      <body>
        <p id="media">Enregistrement audio en cours...</p>
        <p id="audio_position"></p>
      </body>
    </html>
    

## Particularités d'Android

*   Les appareils Android enregistrent de l'audio au format Adaptive Multi-Rate. Le nom de fichier spécifié doit donc comporter une extension *.amr*.

## Particularités de BlackBerry WebWorks

*   Les appareils Android enregistrent de l'audio au format Adaptive Multi-Rate. Le nom de fichier spécifié doit donc comporter une extension *.amr*.

## Particularités d'iOS

*   iOS produit uniquement des enregistrements sous la forme de fichier de type *.wav* et renvoie une erreur si l'extension du nom de fichier est incorrecte.

*   Si un chemin d'accès complet n'est pas précisé, l'enregistrement est placé dans le répertoire `documents/tmp` correspondant à l'application. Il sera ensuite accessible via l'API `File` en utilisant la constante `LocalFileSystem.TEMPORARY`. Tout sous-répertoire présent dans le chemin d'accès au moment de l'enregistrement doit déjà exister.

*   Les fichiers peuvent être enregistrés et lus à l'aide de l'URI des documents :
    
        var myMedia = new Media("documents://beer.mp3")
        

## Particularités de Tizen

*   Cette méthode n'est pas prise en charge par les appareils Tizen.