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

> Запустите приложение аудио рекордер и возвращают сведения о файлах захватили аудио клип.

    navigator.device.capture.captureAudio(
        CaptureCB captureSuccess, CaptureErrorCB captureError,  [CaptureAudioOptions options]
    );
    

## Описание

Начинает асинхронную операцию, чтобы захватить аудио записи с помощью устройства по умолчанию аудио записи приложения. Операция позволяет пользователю устройства захвата нескольких записей за один сеанс.

Операции захвата заканчивается, когда либо пользователь выходит из аудио записи приложения, или максимальное количество записей, указанный `CaptureAudioOptions.limit` достигается. Если не `limit` значение параметра указывается, по умолчанию он один (1) и захвата операция прекращается после того, как пользователь записывает один аудио клип.

По завершении операции захвата `CaptureCallback` выполняет с массивом `MediaFile` объекты, описывающие каждый захвачен файл аудио клип. Если пользователь завершает операцию перед захваченных аудио клип `CaptureErrorCallback` выполняет с `CaptureError` объект, показывая `CaptureError.CAPTURE_NO_MEDIA_FILES` код ошибки.

## Поддерживаемые платформы

*   Андроид
*   WebWorks ежевики (OS 5.0 и выше)
*   iOS
*   Windows Phone 7 и 8
*   ОС Windows 8

## Быстрый пример

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
    

## Полный пример

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
    

## Ежевика WebWorks совместимости

*   Cordova для BlackBerry WebWorks пытается запустить приложение **Диктофон записок** , предоставляемых RIM, чтобы захватить аудио записей. Приложение получает `CaptureError.CAPTURE_NOT_SUPPORTED` код ошибки, если приложение не установлено на устройстве.

## iOS причуды

*   iOS не имеет приложение записи звука по умолчанию, поэтому предоставляется простой пользовательский интерфейс.

## Windows Phone 7 и 8 причуды

*   Windows Phone 7 не имеет приложение записи звука по умолчанию, поэтому предоставляется простой пользовательский интерфейс.