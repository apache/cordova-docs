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

# capture.captureAudio

> Ouvre l'application enregistreur audio et fournit des informations sur les fichiers audio capturés.

    navigator.device.capture.captureAudio(
        CaptureCB captureSuccess, CaptureErrorCB captureError,  [CaptureAudioOptions options]
    );
    

## Description

Débute une opération asynchrone de capture audio via l'application d'enregistrement audio par défaut de l'appareil. Cette opération permet à l'utilisateur de l'appareil d'enregistrer plusieurs prises en une seule séance de capture.

L'opération de capture se termine lorsque l'utilisateur quitte l'application d'enregistrement audio, ou quand le nombre maximal d'enregistrements spécifié par `CaptureAudioOptions.limit` est atteint. Si aucune valeur n'est fournie pour le paramètre `limit` celle utilisée par défaut est un (1), l'opération de capture se terminerait donc après que l'utilisateur ait enregistré un seul clip audio.

Une fois l'opération de capture terminée, la fonction callback `CaptureCallback` est exécutée et un tableau contenant des objets `MediaFile` décrivant chaque clip audio capturé lui est passé en paramètre. Si l'utilisateur annule l'opération avant qu'un clip audio ne soit capturé, la fonction callback `CaptureErrorCallback` est exécutée et un objet `CaptureError` comprenant le code d'erreur `CaptureError.CAPTURE_NO_MEDIA_FILES` lui est passé en paramètre.

## Plates-formes supportées

*   Android
*   BlackBerry WebWorks 5.0 +
*   iOS
*   Windows Phone 7 et 8
*   Windows 8

## Exemple court

    // fonction callback de capture
    var captureSuccess = function(mediaFiles) {
        var i, path, len;
        for (i = 0, len = mediaFiles.length; i < len; i += 1) {
            path = mediaFiles[i].fullPath;
            // faire quelque chose d'intéressant avec le fichier
        }
    };
    
    // fonction callback d'erreur de capture
    var captureError = function(error) {
        navigator.notification.alert('Code d\'erreur : ' + error.code, null, 'Erreur de capture');
    };
    
    // débute la capture audio
    navigator.device.capture.captureAudio(captureSuccess, captureError, {limit:2});
    

## Exemple complet

    <!DOCTYPE html>
    <html>
      <head>
        <title>Capture Audio</title>
    
        <script type="text/javascript" charset="utf-8" src="cordova.js"></script>
        <script type="text/javascript" charset="utf-8" src="json2.js"></script>
        <script type="text/javascript" charset="utf-8">
    
        // appelée lorsque l'opération de capture est terminée
        //
        function captureSuccess(mediaFiles) {
            var i, len;
            for (i = 0, len = mediaFiles.length; i < len; i += 1) {
                uploadFile(mediaFiles[i]);
            }
        }
    
        // appelée si un problème survient
        //
        function captureError(error) {
            var msg = 'Une erreur est survenue durant la capture : ' + error.code;
            navigator.notification.alert(msg, null, 'Oh oh !');
        }
    
        // un bouton appellera cette fonction
        //
        function captureAudio() {
            // ouvre l'application d'enregistrement audio,
            // en permettant à l'utilisateur de capturer deux clips audio
            navigator.device.capture.captureAudio(captureSuccess, captureError, {limit: 2});
        }
    
        // envoie les fichiers sur le serveur
        function uploadFile(mediaFile) {
            var ft = new FileTransfer(),
                path = mediaFile.fullPath,
                name = mediaFile.name;
    
            ft.upload(path,
                "http://my.domain.com/upload.php",
                function(result) {
                    console.log('Succès de l\'upload : ' + result.responseCode);
                    console.log(result.bytesSent + ' octets envoyés');
                },
                function(error) {
                    console.log('Erreur lors de l\'upload du fichier ' + path + ' : ' + error.code);
                },
                { fileName: name });
        }
    
        </script>
        </head>
        <body>
            <button onclick="captureAudio();">Capture Audio</button> <br>
        </body>
    </html>
    

## Particularités de BlackBerry WebWorks

*   Cordova pour BlackBerry WebWorks tente de lancer l'application **Dictaphone**, fournie par RIM, pour capturer des enregistrements audio. Le code d'erreur `CaptureError.CAPTURE_NOT_SUPPORTED` est renvoyé si celle-ci n'est pas installée sur l'appareil.

## Particularités d'iOS

*   iOS ne possède pas d'application d'enregistrement audio par défaut, par conséquent une interface utilisateur simple est fournie.

## Particularités de Windows Phone 7 et 8

*   Windows Phone 7 ne possède pas d'application d'enregistrement audio par défaut, par conséquent une interface utilisateur simple est fournie.