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

Начинает запись аудио файлов.

    media.startRecord();
    

## Описание

`media.startRecord`Метод выполняется синхронно, начинает запись для звукового файла.

## Поддерживаемые платформы

*   Андроид
*   WebWorks ежевики (OS 5.0 и выше)
*   iOS
*   Windows Phone 7 и 8
*   ОС Windows 8

## Быстрый пример

    // Record audio
    //
    function recordAudio() {
        var src = "myrecording.mp3";
        var mediaRec = new Media(src,
            // success callback
            function() {
                console.log("recordAudio():Audio Success");
            },
    
            // error callback
            function(err) {
                console.log("recordAudio():Audio Error: "+ err.code);
            });
    
        // Record audio
        mediaRec.startRecord();
    }
    

## Полный пример

    <!DOCTYPE html>
    <html>
      <head>
        <title>Device Properties Example</title>
    
        <script type="text/javascript" charset="utf-8" src="cordova.js"></script>
        <script type="text/javascript" charset="utf-8">
    
        // Wait for device API libraries to load
        //
        document.addEventListener("deviceready", onDeviceReady, false);
    
        // Record audio
        //
        function recordAudio() {
            var src = "myrecording.amr";
            var mediaRec = new Media(src, onSuccess, onError);
    
            // Record audio
            mediaRec.startRecord();
    
            // Stop recording after 10 sec
            var recTime = 0;
            var recInterval = setInterval(function() {
                recTime = recTime + 1;
                setAudioPosition(recTime + " sec");
                if (recTime >= 10) {
                    clearInterval(recInterval);
                    mediaRec.stopRecord();
                }
            }, 1000);
        }
    
        // device APIs are available
        //
        function onDeviceReady() {
            recordAudio();
        }
    
        // onSuccess Callback
        //
        function onSuccess() {
            console.log("recordAudio():Audio Success");
        }
    
        // onError Callback
        //
        function onError(error) {
            alert('code: '    + error.code    + '\n' +
                  'message: ' + error.message + '\n');
        }
    
        // Set audio position
        //
        function setAudioPosition(position) {
            document.getElementById('audio_position').innerHTML = position;
        }
    
        </script>
      </head>
      <body>
        <p id="media">Recording audio...</p>
        <p id="audio_position"></p>
      </body>
    </html>
    

## Андроид причуды

*   Android устройств записи аудио в формате адаптивной мульти ставка. Указанный файл должен заканчиваться *.amr* расширение.

## Ежевика WebWorks совместимости

*   Устройства blackBerry записывать звук в формате адаптивной мульти ставка. Указанный файл должен оканчиваться расширением *.amr* .

## iOS причуды

*   iOS только записи в файлы типа *.wav* и возвращает ошибку, если расширение не исправить.

*   Если полный путь не указан, запись помещается в приложения `documents/tmp` каталог. Это могут быть доступны через `File` API с помощью `LocalFileSystem.TEMPORARY` . Любой подкаталог, указанный на время записи должны уже существовать.

*   Файлы могут быть и сыграны записываются обратно, используя документы URI:
    
        var myMedia = new Media("documents://beer.mp3")
        

## Tizen причуды

*   Не поддерживается на устройствах Tizen.