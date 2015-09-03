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


# Захват

> Предоставляет доступ к аудио, изображений и возможности видео захвата устройства.

**Важных конфиденциальности Примечание:** Сбор и использование изображений, видео или аудио от устройства камеры или микрофона поднимает вопросы, важные конфиденциальности. Политика конфиденциальности вашего приложения должна обсудить, как приложение использует такие датчики и ли данные, записанные совместно с другими сторонами. Кроме того если app использование камеры или микрофона не является очевидной в пользовательском интерфейсе, необходимо предоставить уведомление just-in-time до вашего приложения, доступ к камеру или микрофон (если операционной системы устройства не так уже). Это уведомление должно обеспечивать ту же информацию, отметили выше, а также получения разрешения пользователя (например, путем представления выбора **OK** и **Нет, спасибо**). Обратите внимание, что некоторые торговые площадки app может потребоваться приложению уведомлять just-in-time и получить разрешение от пользователя до доступа к камеру или микрофон. Для получения дополнительной информации пожалуйста, смотрите в руководстве конфиденциальности.

## Объекты

*   Захват
*   CaptureAudioOptions
*   CaptureImageOptions
*   CaptureVideoOptions
*   CaptureCallback
*   CaptureErrorCB
*   ConfigurationData
*   MediaFile
*   MediaFileData

## Методы

*   capture.captureAudio
*   capture.captureImage
*   capture.captureVideo
*   MediaFile.getFormatData

## Сфера

The `capture` object is assigned to the `navigator.device` object, and therefore has global scope.

    // The global capture object
    var capture = navigator.device.capture;
    

## Свойства

*   **supportedAudioModes**: аудио записи форматы, поддерживаемые устройством. (ConfigurationData[])

*   **supportedImageModes**: запись изображения размеры и форматы, поддерживаемые устройством. (ConfigurationData[])

*   **supportedVideoModes**: запись видео резолюций и форматы, поддерживаемые устройством. (ConfigurationData[])

## Методы

*   `capture.captureAudio`: Запуск приложения устройства записи звука для записи аудио клипы.

*   `capture.captureImage`: Запуск приложения камеры устройства принимать фотографии.

*   `capture.captureVideo`: Запуск приложения видеомагнитофон устройства для записи видео.

## Поддерживаемые платформы

*   Андроид
*   WebWorks ежевики (OS 5.0 и выше)
*   iOS
*   Windows Phone 7 и 8
*   ОС Windows 8

## Доступ к функции

Начиная с версии 3.0 Кордова реализует интерфейсы API уровень устройства как *плагины*. Использование CLI `plugin` команды, описанные в интерфейс командной строки, чтобы добавить или удалить эту функцию для проекта:

        $ cordova plugin add org.apache.cordova.media-capture
        $ cordova plugin ls
        [ 'org.apache.cordova.media-capture' ]
        $ cordova plugin rm org.apache.cordova.media-capture
    

Эти команды применяются для всех целевых платформ, но изменить параметры конфигурации платформы, описанные ниже:

*   Андроид
    
        (in app/res/xml/plugins.xml)
        <feature name="Capture">
            <param name="android-package" value="org.apache.cordova.Capture" />
        </feature>
        
        (in app/AndroidManifest.xml)
        <uses-permission android:name="android.permission.RECORD_AUDIO" />
        <uses-permission android:name="android.permission.WRITE_EXTERNAL_STORAGE" />
        

*   Ежевика WebWorks
    
        (in www/plugins.xml)
        <feature name="Capture">
            <param name="blackberry-package" value="org.apache.cordova.capture.MediaCapture" />
        </feature>
        
        (in www/config.xml)
        <feature id="blackberry.system"  required="true" version="1.0.0.0" />
        <feature id="blackberry.io.file" required="true" version="1.0.0.0" />
        

*   iOS (в`config.xml`)
    
        <feature name="Capture">
            <param name="ios-package" value="CDVCapture" />
        </feature>
        

*   Windows Phone (в`Properties/WPAppManifest.xml`)
    
        <Capabilities>
            <Capability Name="ID_CAP_MEDIALIB" />
            <Capability Name="ID_CAP_MICROPHONE" />
            <Capability Name="ID_HW_FRONTCAMERA" />
            <Capability Name="ID_CAP_ISV_CAMERA" />
            <Capability Name="ID_CAP_CAMERA" />
        </Capabilities>
        

Некоторые платформы могут поддерживать эту функцию без необходимости специальной настройки. В разделе *Поддержка платформы* в разделе Обзор.


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


# CaptureAudioOptions

> Инкапсулирует параметры конфигурации аудио захвата.

## Свойства

*   **ограничение**: максимальное количество аудио клипы, устройства пользователь может записывать в одном захвата. Значение должно быть больше или равно 1 (по умолчанию 1).

*   **Продолжительность**: максимальная продолжительность звука звукового клипа в секундах.

## Быстрый пример

    // limit capture operation to 3 media files, no longer than 10 seconds each
    var options = { limit: 3, duration: 10 };
    
    navigator.device.capture.captureAudio(captureSuccess, captureError, options);
    

## Андроид причуды

*   `duration`Параметр не поддерживается. Запись длины не могут быть ограничены программным способом.

## Ежевика WebWorks совместимости

*   `duration`Параметр не поддерживается. Запись длины не могут быть ограничены программным способом.

## iOS причуды

*   `limit`Параметр не поддерживается, поэтому только одна запись может быть создана для каждого вызова.


# capture.captureImage

> Запустите приложение камеры и возвращают сведения о файлах образа.

    navigator.device.capture.captureImage(
        CaptureCB captureSuccess, CaptureErrorCB captureError, [CaptureImageOptions options]
    );
    

## Описание

Начинает асинхронную операцию для захвата изображения с помощью приложения камеры устройства. Операция позволяет пользователям захватывать более одного изображения за один сеанс.

Операции захвата заканчивается, либо когда пользователь закрывает приложение камеры, или максимальное количество записей, указанный `CaptureAudioOptions.limit` достигается. Если не `limit` указано значение, по умолчанию он один (1) и захвата операция прекращается после того, как пользователь захватывает отдельное изображение.

По завершении операции захвата он вызывает `CaptureCB` обратного вызова с массивом `MediaFile` объектов, описывающих каждый файл образа. Если пользователь завершает операцию до захвата изображения, `CaptureErrorCB` обратного вызова выполняется с `CaptureError` объекта с изображением `CaptureError.CAPTURE_NO_MEDIA_FILES` код ошибки.

## Поддерживаемые платформы

*   Андроид
*   WebWorks ежевики (OS 5.0 и выше)
*   iOS
*   Windows Phone 7 и 8
*   ОС Windows 8

## Windows Phone 7 причуды

Вызов приложения родной камеры в то время как ваше устройство подключено через Zune не работает, и выполняет обратный вызов для ошибки.

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
    
    // start image capture
    navigator.device.capture.captureImage(captureSuccess, captureError, {limit:2});
    

## Полный пример

    <!DOCTYPE html>
    <html>
      <head>
        <title>Capture Image</title>
    
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
        function captureImage() {
            // Launch device camera application,
            // allowing user to capture up to 2 images
            navigator.device.capture.captureImage(captureSuccess, captureError, {limit: 2});
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
            <button onclick="captureImage();">Capture Image</button> <br>
        </body>
    </html>


# CaptureImageOptions

> Инкапсулирует параметры конфигурации захвата изображения.

## Свойства

*   **ограничение**: максимальное количество изображений, которые пользователь может захватить в одном захвата. Значение должно быть больше или равно 1 (по умолчанию 1).

## Быстрый пример

    // limit capture operation to 3 images
    var options = { limit: 3 };
    
    navigator.device.capture.captureImage(captureSuccess, captureError, options);
    

## iOS причуды

*   Параметр **limit** не поддерживается, и только одно изображение берется за вызов.


# capture.captureVideo

> Запустите приложение видеомагнитофон и возвращают сведения о файлах захваченного видео клип.

    navigator.device.capture.captureVideo(
        CaptureCB captureSuccess, CaptureErrorCB captureError, [CaptureVideoOptions options]
    );
    

## Описание

Начинает асинхронную операцию, чтобы захватить видео записи с помощью устройства записи видео приложения. Операция позволяет пользователю захватить более чем одной записи в течение одной сессии.

Операции захвата заканчивается, когда либо пользователь выходит из приложения записи видео, или максимальное количество записей, указанный `CaptureVideoOptions.limit` достигается. Если не `limit` значение параметра указывается, по умолчанию он один (1) и захвата операция прекращается после того, как пользователь записывает один видео клип.

По завершении операции захвата его `CaptureCB` обратного вызова выполняется с массивом `MediaFile` объекты, описывающие каждый захвачен файл видео клип. Если пользователь завершает операцию до захвата видео клип, `CaptureErrorCB` обратного вызова выполняется с `CaptureError` объекта с изображением `CaptureError.CAPTURE_NO_MEDIA_FILES` код ошибки.

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
    
    // start video capture
    navigator.device.capture.captureVideo(captureSuccess, captureError, {limit:2});
    

## Полный пример

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
    

## Ежевика WebWorks совместимости

*   Cordova для BlackBerry WebWorks пытается запустить приложение **Видеомагнитофон** , предоставляемых RIM, чтобы захватить видео записи. Приложение получает `CaptureError.CAPTURE_NOT_SUPPORTED` код ошибки, если приложение не установлено на устройстве.


# CaptureVideoOptions

> Инкапсулирует параметры конфигурации захвата видео.

## Свойства

*   **ограничение**: максимальное количество видеоклипов устройства пользователь может захватить в одном захвата. Значение должно быть больше или равно 1 (по умолчанию 1).

*   **Продолжительность**: максимальная длительность видеоклипа, в секундах.

## Быстрый пример

    // limit capture operation to 3 video clips
    var options = { limit: 3 };
    
    navigator.device.capture.captureVideo(captureSuccess, captureError, options);
    

## Ежевика WebWorks совместимости

*   Параметр **duration** не поддерживается, поэтому длина записи не могут быть ограничены программным способом.

## iOS причуды

*   Параметр **limit** не поддерживается. Только один видео записывается на вызов.


# CaptureError

> Инкапсулирует код ошибки, в результате операции захвата неудачной СМИ.

## Свойства

*   **код**: один из предопределенных кодов, перечисленных ниже.

## Константы

*   `CaptureError.CAPTURE_INTERNAL_ERR`: Камеру или микрофон не удалось захватить изображение или звук.

*   `CaptureError.CAPTURE_APPLICATION_BUSY`: Приложение камеры или аудио захвата в настоящее время отбывает другой запрос захвата.

*   `CaptureError.CAPTURE_INVALID_ARGUMENT`: Недопустимое использование API (например, значение `limit` меньше, чем один).

*   `CaptureError.CAPTURE_NO_MEDIA_FILES`: Пользователь выходит из камеры или аудио захвата приложений до захвата ничего.

*   `CaptureError.CAPTURE_NOT_SUPPORTED`: Запрошенный захвата операция не поддерживается.


# CaptureCB

> Вызывается после операции захвата успешных медиа.

    function captureSuccess( MediaFile[] mediaFiles ) { ... };
    

## Описание

Эта функция выполняется после завершения операции успешного захвата. В этот момент был захвачен файл мультимедиа и либо пользователь завершил приложение захват средств массовой информации, или захват предел был достигнут.

Каждый `MediaFile` объект описывает захваченных медиа-файлов.

## Быстрый пример

    // capture callback
    function captureSuccess(mediaFiles) {
        var i, path, len;
        for (i = 0, len = mediaFiles.length; i < len; i += 1) {
            path = mediaFiles[i].fullPath;
            // do something interesting with the file
        }
    };


# CaptureErrorCB

> Вызывается, если ошибка возникает во время операции захвата средств массовой информации.

    function captureError( CaptureError error ) { ... };
    

## Описание

Эта функция выполняется, если возникает ошибка при попытке запуска операции захвата мультимедиа. Сценарии сбоев включают когда захват приложение занято, операции захвата уже имеет место, или пользователь отменяет операцию, прежде чем любой медиа-файлы записываются.

Эта функция выполняет с `CaptureError` объект, содержащий соответствующие ошибки`code`.

## Быстрый пример

    // capture error callback
    var captureError = function(error) {
        navigator.notification.alert('Error code: ' + error.code, null, 'Capture Error');
    };


# ConfigurationData

> Инкапсулирует набор параметров захвата средств массовой информации, которые поддерживает устройство.

## Описание

Описывает режимы захвата мультимедиа поддерживается устройством. Данные конфигурации включает в себя тип MIME и размеры захвата для захвата видео или изображения.

Типы MIME должны присоединиться к [RFC2046][1]. Примеры:

 [1]: http://www.ietf.org/rfc/rfc2046.txt

*   `video/3gpp`
*   `video/quicktime`
*   `image/jpeg`
*   `audio/amr`
*   `audio/wav`

## Свойства

*   **тип**: кодировке ASCII нижнего регистра строка, представляющая тип средств массовой информации. (DOMString)

*   **Высота**: высота изображения или видео в пикселях. Значение равно нулю для звуковых клипов. (Число)

*   **Ширина**: ширина изображения или видео в пикселях. Значение равно нулю для звуковых клипов. (Число)

## Быстрый пример

    // retrieve supported image modes
    var imageModes = navigator.device.capture.supportedImageModes;
    
    // Select mode that has the highest horizontal resolution
    var width = 0;
    var selectedmode;
    for each (var mode in imageModes) {
        if (mode.width > width) {
            width = mode.width;
            selectedmode = mode;
        }
    }
    

Не поддерживается на любой платформе. Все массивы данных конфигурации являются пустыми.


# MediaFile

> Инкапсулирует свойства файла захвата мультимедиа.

## Свойства

*   **имя**: имя файла, без сведений о пути. (DOMString)

*   **полный путь**: полный путь к файлу, включая имя. (DOMString)

*   **тип**: тип mime файла (DOMString)

*   **lastModifiedDate**: Дата и время последнего изменения файла. (Дата)

*   **Размер**: Размер файла в байтах. (Число)

## Методы

*   **MediaFile.getFormatData**: Возвращает сведения о формате файла мультимедиа.


# MediaFile.getFormatData

> Извлекает формат сведений о файле записи СМИ.

    mediaFile.getFormatData(
        MediaFileDataSuccessCB successCallback,
        [MediaFileDataErrorCB errorCallback]
    );
    

## Описание

Эта функция асинхронно пытается извлечь сведения о формате для файла мультимедиа. Если успешно, он вызывает `MediaFileDataSuccessCB` обратного вызова с `MediaFileData` объект. Если попытка завершается неудачей, то функция вызывает `MediaFileDataErrorCB` обратного вызова.

## Поддерживаемые платформы

*   Андроид
*   WebWorks ежевики (OS 5.0 и выше)
*   iOS
*   Windows Phone 7 и 8
*   ОС Windows 8

## Ежевика WebWorks совместимости

Не предоставляет API для получения информации о медиа-файлов, так что все `MediaFileData` объекты возвращают со значениями по умолчанию.

## Андроид причуды

API для доступа к медиа файла формата информации ограничено, поэтому не все `MediaFileData` свойства поддерживаются.

## iOS причуды

API для доступа к медиа файла формата информации ограничено, поэтому не все `MediaFileData` свойства поддерживаются.


# MediaFileData

> Инкапсулирует сведения о файле мультимедиа формате.

## Свойства

*   **кодеки**: фактический формат аудио и видео контента. (DOMString)

*   **битрейт**: средний битрейт содержание. Значение равно нулю для изображений. (Число)

*   **Высота**: высота изображения или видео в пикселях. Значение равно нулю для аудио клипы. (Число)

*   **Ширина**: ширина изображения или видео в пикселях. Значение равно нулю для аудио клипы. (Число)

*   **Продолжительность**: длина видео- или звукового клипа в секундах. Значение равно нулю для изображений. (Число)

## Ежевика WebWorks совместимости

Нет API предоставляет сведения о формате для мультимедийных файлов, так что `MediaFileData` объект, возвращенный `MediaFile.getFormatData` имеет следующие значения по умолчанию:

*   **кодеки**: не поддерживается и возвращает`null`.

*   **битрейт**: не поддерживается и возвращает ноль.

*   **Высота**: не поддерживается и возвращает ноль.

*   **Ширина**: не поддерживается и возвращает ноль.

*   **Продолжительность**: не поддерживается и возвращает ноль.

## Андроид причуды

Поддерживает следующие `MediaFileData` Свойства:

*   **кодеки**: не поддерживается и возвращает`null`.

*   **битрейт**: не поддерживается и возвращает ноль.

*   **Высота**: поддерживается: только изображения и видео файлы.

*   **Ширина**: поддерживается: только изображения и видео файлы.

*   **Продолжительность**: Поддерживаемые: аудио и видео файлы только.

## iOS причуды

Поддерживает следующие `MediaFileData` Свойства:

*   **кодеки**: не поддерживается и возвращает`null`.

*   **битрейт**: поддерживается на устройствах iOS4 для только аудио. Возвращает значение 0 для изображений и видео.

*   **Высота**: поддерживается: только изображения и видео файлы.

*   **Ширина**: поддерживается: только изображения и видео файлы.

*   **Продолжительность**: Поддерживаемые: аудио и видео файлы только.
