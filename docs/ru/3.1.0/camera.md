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


# Камера

> `camera`Объект предоставляет доступ к приложение камеры устройства по умолчанию.

**Важных конфиденциальности Примечание:** Сбор и использование изображений с камеры устройства поднимает вопросы, важные конфиденциальности. Политика конфиденциальности вашего приложения должна обсудить, как приложение использует камеру и ли изображения, записанные используются совместно с другими сторонами. Кроме того если app использование камеры не является очевидной в пользовательском интерфейсе, необходимо предоставить уведомление just-in-time до вашего приложения доступа к камере (если операционной системы устройства не так уже). Это уведомление должно обеспечивать ту же информацию, отметили выше, а также получения разрешения пользователя (например, путем представления выбора **OK** и **Нет, спасибо**). Для получения дополнительной информации пожалуйста, смотрите в руководстве конфиденциальности.

## Методы

*   camera.getPicture
*   Camera.Cleanup

## Доступ к функции

Начиная с версии 3.0 Кордова реализует интерфейсы API уровень устройства как *плагины*. Использование CLI `plugin` команды, описанные в интерфейс командной строки, чтобы добавить или удалить эту функцию для проекта:

        $ cordova plugin add org.apache.cordova.camera
        $ cordova plugin ls
        [ 'org.apache.cordova.camera' ]
        $ cordova plugin rm org.apache.cordova.camera
    

Эти команды применяются для всех целевых платформ, но изменить параметры конфигурации платформы, описанные ниже:

*   Андроид
    
        (in app/res/xml/config.xml)
        <feature name="Camera">
            <param name="android-package" value="org.apache.cordova.CameraLauncher" />
        </feature>
        
        (in app/AndroidManifest)
        <uses-permission android:name="android.permission.WRITE_EXTERNAL_STORAGE" />
        

*   Ежевика WebWorks
    
        (in www/plugins.xml)
        <feature name="Camera">
            <param name="blackberry-package" value="org.apache.cordova.camera.Camera" />
        </feature>
        
        (in www/config.xml)
        <feature id="blackberry.media.camera" />
        
        <rim:permissions>
            <rim:permit>use_camera</rim:permit>
        </rim:permissions>
        

*   iOS (в`config.xml`)
    
        <feature name="Camera">
            <param name="ios-package" value="CDVCamera" />
        </feature>
        

*   Windows Phone (в`Properties/WPAppManifest.xml`)
    
        <Capabilities>
            <Capability Name="ID_CAP_ISV_CAMERA" />
            <Capability Name="ID_HW_FRONTCAMERA" />
        </Capabilities>
        
    
    Ссылка: [манифест приложения для Windows Phone][1]

*   Tizen (в`config.xml`)
    
        <feature name="http://tizen.org/api/application" required="true"/>
        <feature name="http://tizen.org/api/application.launch" required="true"/>
        
    
    Ссылка: [манифест приложения для Tizen веб-приложения][2]

 [1]: http://msdn.microsoft.com/en-us/library/ff769509%28v=vs.92%29.aspx
 [2]: https://developer.tizen.org/help/topic/org.tizen.help.gs/Creating%20a%20Project.html?path=0_1_1_3#8814682_CreatingaProject-EditingconfigxmlFeatures

Некоторые платформы могут поддерживать эту функцию без необходимости специальной настройки. В разделе *Поддержка платформы* в разделе Обзор.


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


# cameraSuccess

Функция обратного вызова onSuccess, предоставляющий данные изображения.

    function(imageData) {
        // Do something with the image
    }
    

## Параметры

*   **imageData**: Base64 кодирование данных изображения, *или* URI, в зависимости от файла изображения `cameraOptions` в силу. *(Строка)*

## Пример

    // Show image
    //
    function cameraCallback(imageData) {
        var image = document.getElementById('myImage');
        image.src = "data:image/jpeg;base64," + imageData;
    }


# cameraError

Функция обратного вызова onError, который предоставляет сообщение об ошибке.

    function(message) {
        // Show a helpful message
    }
    

## Параметры

*   **сообщение**: сообщение обеспечивается машинного кода устройства. *(Строка)*


# cameraOptions

Необязательные параметры для настройки параметров камеры.

    {качество: 75, destinationType: Camera.DestinationType.DATA_URL, тип источника: Camera.PictureSourceType.CAMERA, allowEdit: Правда, Тип_шифрования: Camera.EncodingType.JPEG, targetWidth: 100, targetHeight: 100, popoverOptions: CameraPopoverOptions, saveToPhotoAlbum: значение false};
    

## Параметры

*   **качество**: качество сохраняемого изображения, выражается в виде диапазона 0-100, где 100 является обычно полное разрешение без потери от сжатия файлов. *(Число)* (Обратите внимание, что информация о разрешение камеры недоступна.)

*   **destinationType**: Choose the format of the return value. Defined in `navigator.camera.DestinationType` *(Number)*
    
        Camera.DestinationType = {DATA_URL: 0, / / возвращение изображения в base64-кодировке строки FILE_URI: 1, / / возврат файла изображения URI NATIVE_URI: 2 / / возвращение образа собственного URI (например, Библиотека активов: / / на iOS или содержание: / / на андроиде)};
        

*   **sourceType**: Set the source of the picture. Defined in `navigator.camera.PictureSourceType` *(Number)*
    
        Camera.PictureSourceType = {PHOTOLIBRARY: 0, камеры: 1, SAVEDPHOTOALBUM: 2};
        

*   **allowEdit**: позволить простое редактирование изображения перед выбором. *(Логический)*

*   **encodingType**: Choose the returned image file's encoding. Defined in `navigator.camera.EncodingType` *(Number)*
    
        Camera.EncodingType = {JPEG: 0, / / возвращение JPEG кодировке изображения PNG: 1 / / рисунок в формате PNG, возвращение};
        

*   **targetWidth**: ширина для масштабирование изображения в пикселях. Должна использоваться с **targetHeight**. Соотношение остается неизменным. *(Число)*

*   **targetWidth**: ширина для масштабирование изображения в пикселях. Должна использоваться с **targetHeight**. Соотношение остается неизменным. *(Число)*

*   **тип носителя**: Установите тип средств массовой информации, чтобы выбрать из. Работает только если `PictureSourceType` является `PHOTOLIBRARY` или `SAVEDPHOTOALBUM` . Определено в `nagivator.camera.MediaType` *(число)* 
    
        Camera.MediaType = {картинка: 0, / / разрешить выбор еще фотографии только. ЗНАЧЕНИЕ ПО УМОЛЧАНИЮ. Возвращает формат, указанный через DestinationType видео: 1, / / разрешить выбор видео только, будет всегда возвращать ALLMEDIA FILE_URI: 2 / / разрешить выбор со всех типов носителей
        
    
    };

*   **correctOrientation**: вращать изображение, чтобы исправить для ориентации устройства во время захвата. *(Логический)*

*   **saveToPhotoAlbum**: сохранить изображение в фотоальбом на устройстве после захвата. *(Логический)*

*   **popoverOptions**: только для iOS параметры, которые определяют местоположение инструмента в iPad. Определены в`CameraPopoverOptions`.

*   **cameraDirection**: Choose the camera to use (front- or back-facing). Defined in `navigator.camera.Direction` *(Number)*
    
        Camera.Direction = {обратно: 0, / / использовать обратно, стоящих перед камерой фронт: 1 / / использовать фронтальная камера};
        

## Андроид причуды

*   Любые `cameraDirection` значение результатов в задней стороне фото.

*   Игнорирует `allowEdit` параметр.

*   `Camera.PictureSourceType.PHOTOLIBRARY`и `Camera.PictureSourceType.SAVEDPHOTOALBUM` оба отображения же фотоальбом.

## Причуды ежевики

*   Игнорирует `quality` параметр.

*   Игнорирует `sourceType` параметр.

*   Игнорирует `allowEdit` параметр.

*   Приложение должно иметь разрешения ключевых инъекции закрыть приложение, предназначенное для камеры после того, как пользователь прикрепляет фото.

*   Использование размеров больших изображений может привести к невозможности кодирования изображений на поздней модели устройств (например, факел 9800) что функция камер высокого разрешения.

*   `Camera.MediaType`не поддерживается.

*   Игнорирует `correctOrientation` параметр.

*   Игнорирует `cameraDirection` параметр.

## iOS причуды

*   Задать `quality` ниже 50, чтобы избежать ошибок памяти на некоторых устройствах.

*   При использовании `destinationType.FILE_URI` , фотографии сохраняются во временном каталоге приложения. Вы можете удалить содержимое этого каталога с использованием `navigator.fileMgr` API-интерфейсы если пространство является проблемой.

## Tizen причуды

*   параметры, не поддерживаемые

*   всегда возвращает URI файла

## Windows Phone 7 и 8 причуды

*   Игнорирует `allowEdit` параметр.

*   Игнорирует `correctOrientation` параметр.

*   Игнорирует `cameraDirection` параметр.


# CameraPopoverOptions

только для iOS параметры, указывающие якорь элемент расположение и стрелкой направление инструмента при выборе изображений из библиотеки или альбома iPad.

    {x: 0, y: 32, ширина: 320, высота: 480, arrowDir: Camera.PopoverArrowDirection.ARROW_ANY};
    

## CameraPopoverOptions

*   **x**: x координата пикселя элемента экрана, на котором для закрепления инструмента. *(Число)*

*   **y**: y координата пикселя элемента экрана, на котором для закрепления инструмента. *(Число)*

*   **Ширина**: ширина в пикселях экрана элемента, на который для закрепления инструмента. *(Число)*

*   **Высота**: высота в пикселях экрана элемента, на который для закрепления инструмента. *(Число)*

*   **arrowDir**: стрелка на инструмента следует указывать направление. Определено в `Camera.PopoverArrowDirection` *(число)* 
    
            Camera.PopoverArrowDirection = {ARROW_UP: 1, / / матчи iOS UIPopoverArrowDirection константы ARROW_DOWN: 2, ARROW_LEFT: 4, ARROW_RIGHT: 8, ARROW_ANY: 15};
        

Обратите внимание, что размер инструмента может измениться для регулировки в направлении стрелки и ориентации экрана. Убедитесь, что для учета изменения ориентации при указании расположения элемента привязки.

## Быстрый пример

     var popover = new CameraPopoverOptions(300, 300, 100, 100, Camera.PopoverArrowDirection.ARROW_ANY);
     var options = {
         quality         : 50,
         destinationType : Camera.DestinationType.DATA_URL,
         sourceType      : Camera.PictureSource.SAVEDPHOTOALBUM,
         popoverOptions  : popover
     };
    
     navigator.camera.getPicture(onSuccess, onFail, options);
    
     function onSuccess(imageData) {
         var image = document.getElementById('myImage');
         image.src = "data:image/jpeg;base64," + imageData;
     }
    
     function onFail(message) {
         alert('Failed because: ' + message);
     }


# CameraPopoverHandle

Дескриптор диалогового окна инструмента, созданного`camera.getPicture`.

## Методы

*   **setPosition**: Задайте положение инструмента.

## Поддерживаемые платформы

*   iOS

## setPosition

Задайте положение инструмента.

**Параметры:**

*   `cameraPopoverOptions`: `CameraPopoverOptions` , укажите новое положение

## Быстрый пример

     var cameraPopoverOptions = new CameraPopoverOptions(300, 300, 100, 100, Camera.PopoverArrowDirection.ARROW_ANY);
     cameraPopoverHandle.setPosition(cameraPopoverOptions);
    

## Полный пример

     function onSuccess(imageData) {
          // Do stuff with the image!
     }
    
     function onFail(message) {
         alert('Failed to get the picture: ' + message);
     }
    
     var cameraPopoverHandle = navigator.camera.getPicture(onSuccess, onFail,
         { destinationType: Camera.DestinationType.FILE_URI,
           sourceType: Camera.PictureSourceType.PHOTOLIBRARY });
    
     // Reposition the popover if the orientation changes.
     window.onorientationchange = function() {
         var cameraPopoverOptions = new CameraPopoverOptions(0, 0, 100, 100, 0);
         cameraPopoverHandle.setPosition(cameraPopoverOptions);
     }
