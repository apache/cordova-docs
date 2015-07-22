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