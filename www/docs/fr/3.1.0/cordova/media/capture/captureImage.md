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

# capture.captureImage

> Démarrez l'application appareil photo et retourner des informations sur les fichiers de l'image capturée.

    navigator.device.capture.captureImage(
        <a href="<a href="capture.html">Capture</a>CB.html"><a href="capture.html">Capture</a>CB</a> captureSuccess, <a href="capture.html">Capture</a>ErrorCB captureError, [<a href="capture.html">Capture</a>ImageOptions options]
    );
    

## Description

Commence une opération asynchrone pour capturer des images à l'aide d'application caméra de l'appareil. L'opération permet aux utilisateurs de capturer plusieurs images en une seule séance.

L'opération de capture soit termine lorsque l'utilisateur ferme l'application appareil photo, ou le nombre maximal d'enregistrements spécifié par `<a href="capture.html">Capture</a>AudioOptions.limit` est atteinte. Si aucun `limit` valeur est spécifiée, par défaut à un (1), et l'opération de capture se termine après que l'utilisateur saisit une image unique.

Lorsque l'opération de capture terminée, elle appelle le `<a href="<a href="capture.html">Capture</a>CB.html"><a href="capture.html">Capture</a>CB</a>` rappel avec un tableau de `<a href="<a href="../media.html">Media</a><a href="../../file/fileobj/fileobj.html">File</a>.html"><a href="../media.html">Media</a><a href="../../file/fileobj/fileobj.html">File</a></a>` objets décrivant chaque fichier de l'image capturée. Si l'utilisateur annule l'opération avant la capture d'une image, la `<a href="capture.html">Capture</a>ErrorCB` rappel s'exécute avec un `<a href="capture.html">Capture</a>Error` objet mettant en vedette un `<a href="capture.html">Capture</a>Error.CAPTURE_NO_MEDIA_FILES` code d'erreur.

## Plates-formes prises en charge

*   Android
*   BlackBerry WebWorks (OS 5.0 et plus)
*   iOS
*   Windows Phone 7 et 8
*   Windows 8

## Windows Phone 7 Quirks

Invoquant l'application native caméra alors que votre appareil est connecté via Zune ne fonctionne pas, et exécute le rappel de l'erreur.

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
    
    // start image capture
    navigator.device.capture.captureImage(captureSuccess, captureError, {limit:2});
    

## Exemple complet

    <!DOCTYPE html>
    <html>
      <head>
        <title><a href="capture.html">Capture</a> Image</title>
    
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
        function captureImage() {
            // Launch device camera application,
            // allowing user to capture up to 2 images
            navigator.device.capture.captureImage(captureSuccess, captureError, {limit: 2});
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
            <button onclick="captureImage();"><a href="capture.html">Capture</a> Image</button> <br>
        </body>
    </html>