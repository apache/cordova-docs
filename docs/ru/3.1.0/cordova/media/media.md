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

# Средства массовой информации

> `Media`Объект обеспечивает возможность записывать и воспроизводить звуковые файлы на устройстве.

    var media = new Media(src, mediaSuccess, [mediaError], [mediaStatus]);
    

**Примечание:** Текущая реализация не соответствует спецификации W3C для захвата СМИ и предоставляется только для удобства. Будущее осуществление будет придерживаться последней спецификации W3C и может Опознайте текущих API.

## Параметры

*   **src**: URI, содержащий аудио-контент. *(DOMString)*

*   **mediaSuccess**: (необязательно) обратного вызова, который выполняется после `Media` объект завершения текущего воспроизведения, записи или стоп действий. *(Функция)*

*   **mediaError**: (необязательно) обратного вызова, который выполняется при возникновении ошибки. *(Функция)*

*   **mediaStatus**: (необязательно) обратного вызова, который выполняется для отображения изменений состояния. *(Функция)*

## Константы

Следующие константы сообщается как единственный параметр для `mediaStatus` обратного вызова:

*   `Media.MEDIA_NONE` = 0;
*   `Media.MEDIA_STARTING` = 1;
*   `Media.MEDIA_RUNNING` = 2;
*   `Media.MEDIA_PAUSED` = 3;
*   `Media.MEDIA_STOPPED` = 4;

## Методы

*   `media.getCurrentPosition`: Возвращает текущую позицию в аудиофайл.

*   `media.getDuration`: Возвращает продолжительность звукового файла.

*   `media.play`: Начать или возобновить воспроизведение звукового файла.

*   `media.pause`: Приостановка воспроизведения звукового файла.

*   `media.release`: Выпускает аудио ресурсы базовой операционной системы.

*   `media.seekTo`: Перемещает положение в пределах звукового файла.

*   `media.setVolume`: Задайте громкость воспроизведения звука.

*   `media.startRecord`: Начните запись звукового файла.

*   `media.stopRecord`: Остановите запись аудио файлов.

*   `media.stop`: Остановка воспроизведения звукового файла.

## Дополнительные ReadOnly параметры

*   **позиции**: позиция в аудио воспроизведения в секундах.
    
    *   Не автоматически обновляются во время игры; Вызовите `getCurrentPosition` для обновления.

*   **Продолжительность**: продолжительность СМИ, в секундах.

## Поддерживаемые платформы

*   Андроид
*   WebWorks ежевики (OS 5.0 и выше)
*   iOS
*   Windows Phone 7.5
*   Tizen
*   ОС Windows 8

## Доступ к функции

Начиная с версии 3.0 Кордова реализует интерфейсы API уровень устройства как *плагины*. Использование CLI `plugin` команды, описанные в интерфейс командной строки, чтобы добавить или удалить эту функцию для проекта:

        $ cordova плагин добавить org.apache.cordova.media $ cordova плагин ls ['org.apache.cordova.media'] $ cordova плагин rm org.apache.cordova.media
     

Эти команды применяются для всех целевых платформ, но изменить параметры конфигурации платформы, описанные ниже:

*   Андроид
    
        (in app/res/xml/config.xml)
        <feature name="Media">
            <param name="android-package" value="org.apache.cordova.AudioHandler" />
        </feature>
        
        (in app/AndroidManifest.xml)
        <uses-permission android:name="android.permission.RECORD_AUDIO" />
        <uses-permission android:name="android.permission.MODIFY_AUDIO_SETTINGS" />
        <uses-permission android:name="android.permission.WRITE_EXTERNAL_STORAGE" />
        

*   Ежевика WebWorks
    
        (in www/plugins.xml)
        <feature name="Capture">
            <param name="blackberry-package" value="org.apache.cordova.media.MediaCapture" />
        </feature>
        

*   iOS (в`config.xml`)
    
        <feature name="Media">
            <param name="ios-package" value="CDVSound" />
        </feature>
        

*   Windows Phone (в`Properties/WPAppManifest.xml`)
    
        <Capabilities>
            <Capability Name="ID_CAP_MEDIALIB" />
            <Capability Name="ID_CAP_MICROPHONE" />
            <Capability Name="ID_HW_FRONTCAMERA" />
            <Capability Name="ID_CAP_ISV_CAMERA" />
            <Capability Name="ID_CAP_CAMERA" />
        </Capabilities>
        
    
    Ссылка: [манифест приложения для Windows Phone][1]

 [1]: http://msdn.microsoft.com/en-us/library/ff769509%28v=vs.92%29.aspx

Некоторые платформы могут поддерживать эту функцию без необходимости специальной настройки. В разделе *Поддержка платформы* в разделе Обзор.

### Windows Phone причуды

*   Только один файл может воспроизводиться одновременно.

*   Существуют строгие ограничения в отношении как ваше приложение взаимодействует с другими средствами массовой информации. Смотрите в [документации Microsoft для подробной информации][2].

 [2]: http://msdn.microsoft.com/en-us/library/windowsphone/develop/hh184838(v=vs.92).aspx