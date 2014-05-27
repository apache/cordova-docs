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

> Iniciar la aplicación grabadora de vídeo y devolver información acerca de archivos de vídeo capturado.

    navigator.device.capture.captureVideo(
        CaptureCB captureSuccess, CaptureErrorCB captureError, [CaptureVideoOptions options]
    );
    

## Descripción

Inicia una operación asincrónica para capturar video grabaciones mediante aplicación de grabación de vídeo del dispositivo. La operación permite al usuario capturar grabaciones de más de una en una sola sesión.

La operación de captura termina cuando el usuario sale de la aplicación de grabación de vídeo, o el número máximo de registros especificado por `CaptureVideoOptions.limit` se alcanza. Si no `limit` se especifica el valor del parámetro, por defecto a uno (1), y la operación de captura termina después de que el usuario registra un solo clip de video.

Cuando finaliza la operación de captura, es la `CaptureCB` devolución de llamada se ejecuta con una gran variedad de `MediaFile` objetos describiendo cada uno capturado archivo de videoclip. Si el usuario finaliza la operación antes de capturar un clip de vídeo, el `CaptureErrorCB` devolución de llamada se ejecuta con un `CaptureError` objeto ofrece un `CaptureError.CAPTURE_NO_MEDIA_FILES` código de error.

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
    
    // start video capture
    navigator.device.capture.captureVideo(captureSuccess, captureError, {limit:2});
    

## Ejemplo completo

    <!DOCTYPE html>
    <html>
      <head>
        <title>Capture Video</title>
    
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
        function captureVideo() {
            // Launch device video recording application,
            // allowing user to capture up to 2 video clips
            navigator.device.capture.captureVideo(captureSuccess, captureError, {limit: 2});
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
            <button onclick="captureVideo();">Capture Video</button> <br>
        </body>
    </html>
    

## BlackBerry WebWorks rarezas

*   Cordova para BlackBerry WebWorks intenta lanzar la aplicación **Grabadora de Video** , proporcionada por RIM, capturar grabaciones de vídeo. La aplicación recibe una `CaptureError.CAPTURE_NOT_SUPPORTED` código de error si la aplicación no está instalada en el dispositivo.