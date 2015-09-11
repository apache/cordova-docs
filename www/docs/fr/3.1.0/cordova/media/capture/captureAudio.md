---
license: >
    Licensed to the Apache Software Foundation (ASF) under one
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

# capture.captureAudio

> Démarrez l'application enregistreur audionumérique et renvoyer des informations sur les fichiers de clips audio capturés.

    navigator.device.capture.captureAudio(
        <a href="<a href="capture.html">Capture</a>CB.html"><a href="capture.html">Capture</a>CB</a> captureSuccess, <a href="capture.html">Capture</a>ErrorCB captureError,  [<a href="capture.html">Capture</a>AudioOptions options]
    );
    

## Description

Commence une opération asynchrone pour capturer les enregistrements audio à l'aide d'application d'enregistrement audio de l'appareil par défaut. L'opération permet à l'utilisateur de l'appareil capturer des enregistrements multiples en une seule séance.

L'opération de capture se termine lorsque l'utilisateur quitte l'enregistrement demande, ou le nombre maximal d'enregistrements spécifié par audio `<a href="capture.html">Capture</a>AudioOptions.limit` est atteinte. Si aucun `limit` valeur du paramètre est spécifiée, par défaut à un (1), et l'opération de capture se termine après que l'utilisateur enregistre un clip audio unique.

Fin de l'opération de capture, le `<a href="capture.html">Capture</a>Callback` s'exécute avec un tableau de `<a href="<a href="../media.html">Media</a><a href="../../file/fileobj/fileobj.html">File</a>.html"><a href="../media.html">Media</a><a href="../../file/fileobj/fileobj.html">File</a></a>` objets décrivant chacune capturé fichiers clip audio. Si l'utilisateur annule l'opération avant un clip audio est capturé, le `<a href="capture.html">Capture</a>ErrorCallback` s'exécute avec un `<a href="capture.html">Capture</a>Error` objet, mettant en vedette le `<a href="capture.html">Capture</a>Error.CAPTURE_NO_MEDIA_FILES` code d'erreur.

## Plates-formes prises en charge

*   Android
*   BlackBerry WebWorks (OS 5.0 et plus)
*   iOS
*   Windows Phone 7 et 8
*   Windows 8

## Petit exemple

    // capture callback
    var captureSuccess = function(media<a href="../../file/fileobj/fileobj.html">File</a>s) {
        var i, path, len;
        for (i = 0, len = media<a href="../../file/fileobj/fileobj.html">File</a>s.length; i < len; i += 1) {
            path = media<a href="../../file/fileobj/fileobj.html">File</a>s[i].fullPath;
            // do something interesting with the file
        }
    };
    
    // capture error callback
    var captureError = function(error) {
        navigator.notification.alert('Error code: ' + error.code, null, '<a href="capture.html">Capture</a> Error');
    };
    
    // start audio capture
    navigator.device.capture.captureAudio(captureSuccess, captureError, {limit:2});
    

## Exemple complet

    <!DOCTYPE html>
    <html>
      <head>
        <title><a href="capture.html">Capture</a> Audio</title>
    
        <script type="text/javascript" charset="utf-8" src="cordova.js"></script>
        <script type="text/javascript" charset="utf-8" src="json2.js"></script>
        <script type="text/javascript" charset="utf-8">
    
        // Called when capture operation is finished
        //
        function captureSuccess(media<a href="../../file/fileobj/fileobj.html">File</a>s) {
            var i, len;
            for (i = 0, len = media<a href="../../file/fileobj/fileobj.html">File</a>s.length; i < len; i += 1) {
                upload<a href="../../file/fileobj/fileobj.html">File</a>(media<a href="../../file/fileobj/fileobj.html">File</a>s[i]);
            }
        }
    
        // Called if something bad happens.
        //
        function captureError(error) {
            var msg = 'An error occurred during capture: ' + error.code;
            navigator.notification.alert(msg, null, 'Uh oh!');
        }
    
        // A button will call this function
        //
        function captureAudio() {
            // Launch device audio recording application,
            // allowing user to capture up to 2 audio clips
            navigator.device.capture.captureAudio(captureSuccess, captureError, {limit: 2});
        }
    
        // Upload files to server
        function upload<a href="../../file/fileobj/fileobj.html">File</a>(media<a href="../../file/fileobj/fileobj.html">File</a>) {
            var ft = new <a href="../../file/fileobj/fileobj.html">File</a>Transfer(),
                path = media<a href="../../file/fileobj/fileobj.html">File</a>.fullPath,
                name = media<a href="../../file/fileobj/fileobj.html">File</a>.name;
    
            ft.upload(path,
                "http://my.domain.com/upload.php",
                function(result) {
                    console.log('Upload success: ' + result.responseCode);
                    console.log(result.bytesSent + ' bytes sent');
                },
                function(error) {
                    console.log('Error uploading file ' + path + ': ' + error.code);
                },
                { fileName: name });
        }
    
        </script>
        </head>
        <body>
            <button onclick="captureAudio();"><a href="capture.html">Capture</a> Audio</button> <br>
        </body>
    </html>
    

## BlackBerry WebWorks Quirks

*   Cordova pour BlackBerry WebWorks tente de lancer l'application **Dictaphone Notes** , fournie par RIM, pour capturer des enregistrements audio. L'application reçoit un `<a href="capture.html">Capture</a>Error.CAPTURE_NOT_SUPPORTED` code d'erreur si l'application n'est pas installée sur l'appareil.

## iOS Quirks

*   iOS n'a pas une application d'enregistrement audio par défaut, donc une interface utilisateur simple est fournie.

## Windows Phone 7 et 8 Quirks

*   Windows Phone 7 n'a pas une application d'enregistrement audio par défaut, donc une interface utilisateur simple est fournie.