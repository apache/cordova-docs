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

# camera.getPicture

Берет фотографию с помощью камеры, или получает фотографию из галереи изображений устройства. Изображение передается на успех обратного вызова как base64-кодировке `String` , или как URI для файла образа. Сам метод возвращает `CameraPopoverHandle` объект, который может использоваться для перемещения инструмента выбора файла.

    navigator.camera.getPicture( cameraSuccess, cameraError, [ cameraOptions ] );
    

## Описание

`camera.getPicture`Функция открывает приложение камеры по умолчанию устройства, которое позволяет привязать фотографии. Это происходит по умолчанию, когда `Camera.sourceType` равно `Camera.PictureSourceType.CAMERA` . Как только пользователь прикрепляет фото, закрывает приложение камеры и приложение восстанавливается.

Если `Camera.sourceType` является `Camera.PictureSourceType.PHOTOLIBRARY` или `Camera.PictureSourceType.SAVEDPHOTOALBUM` , то диалоговое окно показывает, что позволяет пользователям выбрать существующее изображение. `camera.getPicture`Функция возвращает `CameraPopoverHandle` объект, который может использоваться для перемещения диалога выбора изображения, например, при изменении ориентации устройства.

Возвращаемое значение отправляется в `cameraSuccess` в одном из следующих форматов, в зависимости от указанной функции обратного вызова `cameraOptions` :

*   A `String` содержащий изображение base64-кодировке фото.

*   A `String` представляющая расположение файла изображения на локальное хранилище (по умолчанию).

Вы можете сделать все, что угодно вы хотите с кодированного изображения или URI, например:

*   Отрисовывает изображение в `<img>` тег, как показано в примере ниже

*   Сохранять данные локально ( `LocalStorage` , [Lawnchair][1], и т.д.)

*   Сообщение данных на удаленном сервере

 [1]: http://brianleroux.github.com/lawnchair/

**Примечание:** Фоторазрешение на более новых приборах является достаточно хорошим. Фотографии из галереи устройства не ослабленные для более низкого качества, даже если `quality` указан параметр. Чтобы избежать общих проблем памяти, установите `Camera.destinationType` к `FILE_URI` вместо`DATA_URL`.

## Поддерживаемые платформы

*   Андроид
*   WebWorks ежевики (OS 5.0 и выше)
*   iOS
*   Tizen
*   Windows Phone 7 и 8
*   ОС Windows 8

## Андроид причуды

Android для запуска камеры деятельность на устройстве для захвата изображений использует намерений, а на телефонах с низкой памяти, могут быть убиты Cordova деятельность. В этом случае изображение не может появиться при восстановлении деятельности cordova.

## iOS причуды

Включая JavaScript `alert()` в любом из обратного вызова функции может вызвать проблемы. Оберните оповещения в пределах `setTimeout()` Разрешить выбора изображений iOS или инструмента полностью закрыть перед оповещения отображает:

    setTimeout(function() {/ / ваши вещи!}, 0);
    

## Windows Phone 7 причуды

Вызов приложения родной камеры в то время как ваше устройство подключено через Zune не работает и инициирует обратный вызов для ошибки.

## Tizen причуды

Tizen поддерживает только `destinationType` из `Camera.DestinationType.FILE_URI` и `sourceType` из`Camera.PictureSourceType.PHOTOLIBRARY`.

## Быстрый пример

Сделайте фотографию и получить его как изображение base64-кодировке:

    navigator.camera.getPicture(onSuccess, onFail, { quality: 50,
        destinationType: Camera.DestinationType.DATA_URL
    });
    
    function onSuccess(imageData) {
        var image = document.getElementById('myImage');
        image.src = "data:image/jpeg;base64," + imageData;
    }
    
    function onFail(message) {
        alert('Failed because: ' + message);
    }
    

Сделайте фотографию и получить расположение файла изображения:

    navigator.camera.getPicture(onSuccess, onFail, { quality: 50,
        destinationType: Camera.DestinationType.FILE_URI });
    
    function onSuccess(imageURI) {
        var image = document.getElementById('myImage');
        image.src = imageURI;
    }
    
    function onFail(message) {
        alert('Failed because: ' + message);
    }
    

## Полный пример

    <!DOCTYPE html>
    <html>
      <head>
        <title>Capture Photo</title>
    
        <script type="text/javascript" charset="utf-8" src="cordova.js"></script>
        <script type="text/javascript" charset="utf-8">
    
        var pictureSource;   // picture source
        var destinationType; // sets the format of returned value
    
        // Wait for device API libraries to load
        //
        document.addEventListener("deviceready",onDeviceReady,false);
    
        // device APIs are available
        //
        function onDeviceReady() {
            pictureSource=navigator.camera.PictureSourceType;
            destinationType=navigator.camera.DestinationType;
        }
    
        // Called when a photo is successfully retrieved
        //
        function onPhotoDataSuccess(imageData) {
          // Uncomment to view the base64-encoded image data
          // console.log(imageData);
    
          // Get image handle
          //
          var smallImage = document.getElementById('smallImage');
    
          // Unhide image elements
          //
          smallImage.style.display = 'block';
    
          // Show the captured photo
          // The inline CSS rules are used to resize the image
          //
          smallImage.src = "data:image/jpeg;base64," + imageData;
        }
    
        // Called when a photo is successfully retrieved
        //
        function onPhotoURISuccess(imageURI) {
          // Uncomment to view the image file URI
          // console.log(imageURI);
    
          // Get image handle
          //
          var largeImage = document.getElementById('largeImage');
    
          // Unhide image elements
          //
          largeImage.style.display = 'block';
    
          // Show the captured photo
          // The inline CSS rules are used to resize the image
          //
          largeImage.src = imageURI;
        }
    
        // A button will call this function
        //
        function capturePhoto() {
          // Take picture using device camera and retrieve image as base64-encoded string
          navigator.camera.getPicture(onPhotoDataSuccess, onFail, { quality: 50,
            destinationType: destinationType.DATA_URL });
        }
    
        // A button will call this function
        //
        function capturePhotoEdit() {
          // Take picture using device camera, allow edit, and retrieve image as base64-encoded string
          navigator.camera.getPicture(onPhotoDataSuccess, onFail, { quality: 20, allowEdit: true,
            destinationType: destinationType.DATA_URL });
        }
    
        // A button will call this function
        //
        function getPhoto(source) {
          // Retrieve image file location from specified source
          navigator.camera.getPicture(onPhotoURISuccess, onFail, { quality: 50,
            destinationType: destinationType.FILE_URI,
            sourceType: source });
        }
    
        // Called if something bad happens.
        //
        function onFail(message) {
          alert('Failed because: ' + message);
        }
    
        </script>
      </head>
      <body>
        <button onclick="capturePhoto();">Capture Photo</button> <br>
        <button onclick="capturePhotoEdit();">Capture Editable Photo</button> <br>
        <button onclick="getPhoto(pictureSource.PHOTOLIBRARY);">From Photo Library</button><br>
        <button onclick="getPhoto(pictureSource.SAVEDPHOTOALBUM);">From Photo Album</button><br>
        <img style="display:none;width:60px;height:60px;" id="smallImage" src="" />
        <img style="display:none;" id="largeImage" src="" />
      </body>
    </html>