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

# FileTransfer

`FileTransfer`Объект позволяет загружать файлы на сервер и обратно.

## Свойства

*   **OnProgress**: называется с `ProgressEvent` всякий раз, когда новый фрагмент данных передается. *(Функция)*

## Методы

*   **добавлено**: отправляет файл на сервер.

*   **скачать**: Скачать файл с сервера.

*   **прервать**: прерывает передачу в прогресс.

## Подробная информация

`FileTransfer`Объект предоставляет способ для загрузки файлов на удаленный сервер с помощью нескольких частей запроса POST HTTP. Поддерживаются протоколы HTTP и HTTPS. Необязательные параметры можно указать путем передачи `FileUploadOptions` объектов для `upload()` метода. При успешной отправке `FileUploadResult` объект передается в метод обратного вызова успех. Если возникает ошибка, `FileTransferError` объект передается в метод обратного вызова ошибки. Это также возможно (только на iOS и Android), чтобы загрузить файл с удаленного сервера и сохранить его на устройстве.

## Поддерживаемые платформы

*   Андроид
*   WebWorks ежевики (OS 5.0 и выше)
*   iOS
*   Windows Phone 7 и 8
*   ОС Windows 8

## загрузить

**Параметры:**

*   **filePath**: полный путь к файлу на устройстве.

*   **сервер**: URL-адрес сервера, чтобы получить файл, как закодированные`encodeURI()`.

*   **successCallback**: обратного вызова, передаваемого `Metadata` объект. *(Функция)*

*   **errorCallback**: обратного вызова, который выполняется в случае получения ошибки `Metadata` . Вызываемый с `FileTransferError` объект. *(Функция)*

*   **опции**: необязательные параметры, такие как имя файла и тип MIME.

*   **trustAllHosts**: необязательный параметр, по умолчанию равен `false` . Если значение `true` , она принимает все сертификаты безопасности. Это полезно, поскольку Android отвергает самозаверяющие сертификаты. Не рекомендуется для использования в производстве. Поддерживается на Android и iOS. *(логическое значение)*

**Быстрый пример**

    // !! Assumes variable fileURI contains a valid URI to a text file on the device
    
    var win = function (r) {
        console.log("Code = " + r.responseCode);
        console.log("Response = " + r.response);
        console.log("Sent = " + r.bytesSent);
    }
    
    var fail = function (error) {
        alert("An error has occurred: Code = " + error.code);
        console.log("upload error source " + error.source);
        console.log("upload error target " + error.target);
    }
    
    var options = new FileUploadOptions();
    options.fileKey = "file";
    options.fileName = fileURI.substr(fileURI.lastIndexOf('/') + 1);
    options.mimeType = "text/plain";
    
    var params = {};
    params.value1 = "test";
    params.value2 = "param";
    
    options.params = params;
    
    var ft = new FileTransfer();
    ft.upload(fileURI, encodeURI("http://some.server.com/upload.php"), win, fail, options);
    

**Полный пример**

    <!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN" "http://www.w3.org/TR/html4/strict.dtd">
    <html>
    <head>
        <title>File Transfer Example</title>
    
        <script type="text/javascript" charset="utf-8" src="cordova.js"></script>
        <script type="text/javascript" charset="utf-8">
    
            // Wait for device API libraries to load
            //
            document.addEventListener("deviceready", onDeviceReady, false);
    
            // device APIs are available
            //
            function onDeviceReady() {
                // Retrieve image file location from specified source
                navigator.camera.getPicture(
                    uploadPhoto,
                    function(message) { alert('get picture failed'); },
                    {
                        quality         : 50,
                        destinationType : navigator.camera.DestinationType.FILE_URI,
                        sourceType      : navigator.camera.PictureSourceType.PHOTOLIBRARY
                    }
                );
            }
    
            function uploadPhoto(imageURI) {
                var options = new FileUploadOptions();
                options.fileKey="file";
                options.fileName=imageURI.substr(imageURI.lastIndexOf('/')+1);
                options.mimeType="image/jpeg";
    
                var params = {};
                params.value1 = "test";
                params.value2 = "param";
    
                options.params = params;
    
                var ft = new FileTransfer();
                ft.upload(imageURI, encodeURI("http://some.server.com/upload.php"), win, fail, options);
            }
    
            function win(r) {
                console.log("Code = " + r.responseCode);
                console.log("Response = " + r.response);
                console.log("Sent = " + r.bytesSent);
            }
    
            function fail(error) {
                alert("An error has occurred: Code = " + error.code);
                console.log("upload error source " + error.source);
                console.log("upload error target " + error.target);
            }
    
            </script>
    </head>
    <body>
        <h1>Example</h1>
        <p>Upload File</p>
    </body>
    </html>
    

**Параметр Загружать заголовки**

Поддерживается на Android и iOS

    function win(r) {
        console.log("Code = " + r.responseCode);
        console.log("Response = " + r.response);
        console.log("Sent = " + r.bytesSent);
    }
    
    function fail(error) {
        alert("An error has occurred: Code = " + error.code);
        console.log("upload error source " + error.source);
        console.log("upload error target " + error.target);
    }
    
    var uri = encodeURI("http://some.server.com/upload.php");
    
    var options = new FileUploadOptions();
    options.fileKey="file";
    options.fileName=fileURI.substr(fileURI.lastIndexOf('/')+1);
    options.mimeType="text/plain";
    
    var headers={'headerParam':'headerValue'};
    
    options.headers = headers;
    
    var ft = new FileTransfer();
    ft.upload(fileURI, uri, win, fail, options);
    

**Андроид причуды**

Установите `chunkedMode` вариант для `false` чтобы предотвратить проблемы с загрузкой на сервер Nginx.

## Скачать

**Параметры:**

*   **источник**: URL-адрес сервера для загрузки файла, как закодированные`encodeURI()`.

*   **Цель**: полный путь к файлу на устройстве.

*   **successCallback**: обратного вызова, передаваемого `FileEntry` объект. *(Функция)*

*   **errorCallback**: обратного вызова, который выполняется, если возникает ошибка при получении `Metadata` . Вызываемый с `FileTransferError` объект. *(Функция)*

*   **trustAllHosts**: необязательный параметр, по умолчанию равен `false` . Если значение `true` , то он будет принимать все сертификаты безопасности. Это полезно, как Android отвергает самостоятельной подписанные сертификаты. Не рекомендуется для использования в производстве. Поддерживается на Android и iOS. *(логическое значение)*

*   **опции**: необязательные параметры, в настоящее время только поддерживает заголовки (например авторизации (базовая аутентификация) и т.д.).

**Быстрый пример**

    // !! Предполагается filePath представляет собой допустимый путь на устройство var fileTransfer = новый FileTransfer();
    var uri = encodeURI («http://some.server.com/download.php»);
    
    fileTransfer.download (uri, filePath, function(entry) {console.log («скачать полный:» + entry.fullPath);
        }, function(error) {console.log («источник ошибки загрузки» + error.source);
            Console.log («скачать Ошибка цель» + error.target);
            Console.log («код ошибки загрузки» + error.code);
        }, значение false, {заголовки: {«Авторизация»: «основные dGVzdHVzZXJuYW1lOnRlc3RwYXNzd29yZA == "}});
    

## прервать

Прерывает передачу в прогресс. Onerror обратного вызова передается объект FileTransferError, который имеет код ошибки FileTransferError.ABORT_ERR.

**Поддерживаемые платформы**

*   Андроид
*   iOS

**Быстрый пример**

    // !! Предполагается переменная fileURI содержит допустимый URI в текстовый файл на устройство победить var = function(r) {console.log («не должен вызываться.");}
    
    Сбой var = function(error) {/ / error.code == FileTransferError.ABORT_ERR оповещения («произошла ошибка: код =» + error.code);
        Console.log («источник ошибки загрузки» + error.source);
        Console.log («загрузить ошибка цель» + error.target);}
    
    Параметры var = новый FileUploadOptions();
    options.fileKey="file»;
    options.fileName="myphoto.jpg»;
    options.mimeType="image/jpeg»;
    
    var ft = новый FileTransfer();
    ft.upload (fileURI, encodeURI («http://some.server.com/upload.php»), победа, fail, варианты);
    ft.Abort();
    

## OnProgress

Вызывается с ProgressEvent всякий раз, когда новый фрагмент данных передается.

**Поддерживаемые платформы**

*   Андроид
*   iOS

**Пример**

    fileTransfer.onprogress = function(progressEvent) {
        if (progressEvent.lengthComputable) {
          loadingStatus.setPercentage(progressEvent.loaded / progressEvent.total);
        } else {
          loadingStatus.increment();
        }
    };
    fileTransfer.download(...); // or fileTransfer.upload(...);
    

**Причуды** - на обоих Android и iOS, lengthComputable является `false` для загрузки, которые используют кодировку gzip.