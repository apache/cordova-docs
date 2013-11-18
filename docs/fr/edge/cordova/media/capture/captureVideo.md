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

# capture.captureVideo

> Ouvre l'application enregistreur vidéo et fournit des informations sur les clips vidéo capturés.

    navigator.device.capture.captureVideo(
        CaptureCB captureSuccess, CaptureErrorCB captureError, [CaptureVideoOptions options]
    );
    

## Description

Débute une opération asynchrone de capture de vidéos via l'application d'enregistrement de vidéos par défaut de l'appareil. Cette opération permet à l'utilisateur de l'appareil d'enregistrer plusieurs fichiers en une seule séance de capture.

L'opération de capture se termine lorsque l'utilisateur quitte l'application d'enregistrement de vidéos, ou quand le nombre maximal d'enregistrements spécifié par `CaptureVideoOptions.limit` est atteint. Si aucune valeur n'est fournie pour le paramètre `limit` celle utilisée par défaut est un (1), l'opération de capture se terminerait donc après que l'utilisateur ait enregistré un seul clip vidéo.

Une fois l'opération de capture terminée, la fonction callback `CaptureCB` est exécutée et un tableau contenant des objets `MediaFile` décrivant chaque clip vidéo capturé lui est passé en paramètre. Si l'utilisateur annule l'opération avant qu'un clip vidéo ne soit capturé, la fonction callback `CaptureErrorCB` est exécutée et un objet `CaptureError` comprenant le code d'erreur `CaptureError.CAPTURE_NO_MEDIA_FILES` lui est passé en paramètre.

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
    
    // débute la capture de vidéo(s)
    navigator.device.capture.captureVideo(captureSuccess, captureError, {limit:2});
    

## Exemple complet

    <!DOCTYPE html>
    <html>
      <head>
        <title>Capture Vid&eacute;o</title>
    
        <script type="text/javascript" charset="utf-8" src="cordova.js"></script>
        <script type="text/javascript" charset="utf-8" src="json2.js"></script>
        <script type="text/javascript" charset="utf-8">
    
        // appelée quand l'opération de capture est terminée
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
        function captureVideo() {
            // ouvre l'application d'enregistrement de l'appareil,
            // et permet à l'utilisateur de capturer jusqu'à 2 clips vidéo
            navigator.device.capture.captureVideo(captureSuccess, captureError, {limit: 2});
        }
    
        // envoie les fichiers au serveur
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
            <button onclick="captureVideo();">Capture Vid&eacute;o</button> <br>
        </body>
    </html>
    

## Particularités de BlackBerry WebWorks

*   Cordova pour BlackBerry WebWorks tente d'ouvrir l'application **Enregistreur vidéo**, fournie par RIM, pour capturer des clips vidéo. Le code d'erreur `CaptureError.CAPTURE_NOT_SUPPORTED` est renvoyé si celle-ci n'est pas installée sur l'appareil.