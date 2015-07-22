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

> Iniciar la aplicación grabadora de audio y devolver información acerca de los archivos capturados clip de audio.

    navigator.device.capture.captureAudio(
        CaptureCB captureSuccess, CaptureErrorCB captureError,  [CaptureAudioOptions options]
    );
    

## Descripción

Inicia una operación asincrónica para capturar grabaciones de audio mediante la aplicación de grabación de audio del dispositivo por defecto. La operación permite al usuario del dispositivo capturar varias grabaciones en una sola sesión.

La operación de captura termina cuando el usuario sale del audio grabación de aplicación, o el número máximo de registros especificado por `CaptureAudioOptions.limit` se alcanza. Si no `limit` se especifica el valor del parámetro, por defecto a uno (1), y la operación de captura termina después de que el usuario registra un solo clip de audio.

Cuando finaliza la operación de captura, el `CaptureCallback` se ejecuta con una gran variedad de `MediaFile` objetos describiendo cada uno capturado archivo del clip de audio. Si el usuario finaliza la operación antes de que sea capturado un clip de audio, el `CaptureErrorCallback` se ejecuta con un `CaptureError` de objeto, con el `CaptureError.CAPTURE_NO_MEDIA_FILES` código de error.

## Plataformas soportadas

*   Android
*   BlackBerry WebWorks (OS 5.0 y superiores)
*   iOS
*   Windows Phone 7 y 8
*   Windows 8

## Ejemplo rápido

    // capture callback
    var captureSuccess = function(mediaFiles) {
        var i, path, len;
        for (i = 0, len = mediaFiles.length; i < len; i += 1) {
            path = mediaFiles[i].fullPath;
            // do something interesting with the file
        }
    };
    
    // capture error callback
    var captureError = function(error) {
        navigator.notification.alert('Error code: ' + error.code, null, 'Capture Error');
    };
    
    // start audio capture
    navigator.device.capture.captureAudio(captureSuccess, captureError, {limit:2});
    

## Ejemplo completo

    <!DOCTYPE html>
    <html>
      <head>
        <title>Capture Audio</title>
    
        <script type="text/javascript" charset="utf-8" src="cordova.js"></script>
        <script type="text/javascript" charset="utf-8" src="json2.js"></script>
        <script type="text/javascript" charset="utf-8">
    
        // Called when capture operation is finished
        //
        function captureSuccess(mediaFiles) {
            var i, len;
            for (i = 0, len = mediaFiles.length; i < len; i += 1) {
                uploadFile(mediaFiles[i]);
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
        function uploadFile(mediaFile) {
            var ft = new FileTransfer(),
                path = mediaFile.fullPath,
                name = mediaFile.name;
    
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
            <button onclick="captureAudio();">Capture Audio</button> <br>
        </body>
    </html>
    

## BlackBerry WebWorks rarezas

*   Cordova para BlackBerry WebWorks intenta lanzar la aplicación **Grabadora de notas de voz** , proporcionada por RIM, capturar grabaciones de audio. La aplicación recibe una `CaptureError.CAPTURE_NOT_SUPPORTED` código de error si la aplicación no está instalada en el dispositivo.

## iOS rarezas

*   iOS no tiene una aplicación de grabación de audio predeterminada, así se proporciona una sencilla interfaz de usuario.

## Windows Phone 7 y 8 rarezas

*   Windows Phone 7 no tiene una aplicación de grabación de audio predeterminada, así se proporciona una sencilla interfaz de usuario.