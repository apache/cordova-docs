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


# Уведомление

> Уведомления о визуальных, звуковые и тактильные устройства.

## Методы

*   `notification.alert`
*   `notification.confirm`
*   `notification.prompt`
*   `notification.beep`
*   `notification.vibrate`

## Доступ к функции

Начиная с версии 3.0 Кордова реализует интерфейсы API уровень устройства как *плагины*. Использование CLI `plugin` команды, описанные в интерфейс командной строки, чтобы добавить или удалить эту функцию для проекта:

        $ cordova plugin add org.apache.cordova.dialogs
        $ cordova plugin add org.apache.cordova.vibration
        $ cordova plugin ls
        [ 'org.apache.cordova.dialogs',
          'org.apache.cordova.vibration' ]
        $ cordova plugin rm org.apache.cordova.dialogs
        $ cordova plugin rm org.apache.cordova.vibration
    

Эти команды применяются для всех целевых платформ, но изменить параметры конфигурации платформы, описанные ниже:

*   Андроид
    
        (in app/res/xml/config.xml)
        <feature name="Notification">
            <param name="android-package" value="org.apache.cordova.Notification" />
        </feature>
        
        (in app/AndroidManifest.xml)
        <uses-permission android:name="android.permission.VIBRATE" />
        

*   Ежевика WebWorks
    
        (in www/plugins.xml)
        <feature name="Notification">
            <param name="blackberry-package" value="org.apache.cordova.notification.Notification" />
        </feature>
        
        (in www/config.xml)
        <feature id="blackberry.ui.dialog" />
        

*   iOS (в`config.xml`)
    
        <feature name="Notification">
            <param name="ios-package" value="CDVNotification" />
        </feature>
        

Некоторые платформы могут поддерживать эту функцию без необходимости специальной настройки. В разделе *Поддержка платформы* в разделе Обзор.


# Notification.Alert

Отображает окно пользовательские оповещения или диалоговое окно.

    navigator.notification.alert(message, alertCallback, [title], [buttonName])
    

*   **сообщение**: сообщение диалога. *(Строка)*

*   **alertCallback**: обратного вызова для вызова, когда закрывается диалоговое окно оповещения. *(Функция)*

*   **название**: диалоговое окно название. *(Строка)* (Обязательно, по умолчанию`Alert`)

*   **buttonName**: имя кнопки. *(Строка)* (Обязательно, по умолчанию`OK`)

## Описание

Большинство реализаций Cordova использовать диалоговое окно родной для этой функции, но некоторые платформы браузера `alert` функция, которая как правило менее настраивается.

## Поддерживаемые платформы

*   Андроид
*   WebWorks ежевики (OS 5.0 и выше)
*   iOS
*   Tizen
*   Windows Phone 7 и 8
*   ОС Windows 8

## Быстрый пример

    // Android / BlackBerry WebWorks (OS 5.0 and higher) / iOS / Tizen
    //
    function alertDismissed() {
        // do something
    }
    
    navigator.notification.alert(
        'You are the winner!',  // message
        alertDismissed,         // callback
        'Game Over',            // title
        'Done'                  // buttonName
    );
    

## Полный пример

    <!DOCTYPE html>
    <html>
      <head>
        <title>Notification Example</title>
    
        <script type="text/javascript" charset="utf-8" src="cordova.js"></script>
        <script type="text/javascript" charset="utf-8">
    
        // Wait for device API libraries to load
        //
        document.addEventListener("deviceready", onDeviceReady, false);
    
        // device APIs are available
        //
        function onDeviceReady() {
            // Empty
        }
    
        // alert dialog dismissed
            function alertDismissed() {
                // do something
            }
    
        // Show a custom alertDismissed
        //
        function showAlert() {
            navigator.notification.alert(
                'You are the winner!',  // message
                alertDismissed,         // callback
                'Game Over',            // title
                'Done'                  // buttonName
            );
        }
    
        </script>
      </head>
      <body>
        <p><a href="#" onclick="showAlert(); return false;">Show Alert</a></p>
      </body>
    </html>
    

## Windows Phone 7 и 8 причуды

*   Существует предупреждение не встроенный браузер, но можно связать один следующим образом для вызова `alert()` в глобальной области действия:
    
        window.alert = navigator.notification.alert;
        

*   Оба `alert` и `confirm` являются неблокирующий звонков, результаты которых доступны только асинхронно.


# notification.confirm

Отображает диалоговое окно Настраиваемый подтверждения.

    navigator.notification.confirm(message, confirmCallback, [title], [buttonLabels])
    

*   **сообщение**: сообщение диалога. *(Строка)*

*   **confirmCallback**: обратного вызова с индекс кнопки нажата (1, 2 или 3) или когда диалоговое окно закрывается без нажатия кнопки (0). *(Функция)*

*   **название**: диалоговое окно название. *(Строка)* (Обязательно, по умолчанию`Confirm`)

*   **buttonLabels**: массив строк, указание метки кнопок. *(Массив)* (Обязательно, по умолчанию [ `OK,Cancel` ])

## Описание

`notification.confirm`Метод отображает родной диалоговое окно, которое более настраиваемый, чем в браузере `confirm` функции.

## confirmCallback

`confirmCallback`Выполняется, когда пользователь нажимает одну из кнопок в диалоговом окне подтверждения.

Аргументом функции обратного вызова `buttonIndex` *(номер)*, который является индекс нажатой кнопки. Обратите внимание, что индекс использует единицы индексации, поэтому значение `1` , `2` , `3` , и т.д.

## Поддерживаемые платформы

*   Андроид
*   WebWorks ежевики (OS 5.0 и выше)
*   iOS
*   Tizen
*   Windows Phone 7 и 8
*   ОС Windows 8

## Быстрый пример

    // process the confirmation dialog result
    function onConfirm(buttonIndex) {
        alert('You selected button ' + buttonIndex);
    }
    
    // Show a custom confirmation dialog
    //
    function showConfirm() {
        navigator.notification.confirm(
            'You are the winner!', // message
             onConfirm,            // callback to invoke with index of button pressed
            'Game Over',           // title
            ['Restart','Exit']         // buttonLabels
        );
    }
    

## Полный пример

    <!DOCTYPE html>
    <html>
      <head>
        <title>Notification Example</title>
    
        <script type="text/javascript" charset="utf-8" src="cordova.js"></script>
        <script type="text/javascript" charset="utf-8">
    
        // Wait for device API libraries to load
        //
        document.addEventListener("deviceready", onDeviceReady, false);
    
        // device APIs are available
        //
        function onDeviceReady() {
            // Empty
        }
    
        // process the confirmation dialog result
        function onConfirm(buttonIndex) {
            alert('You selected button ' + buttonIndex);
        }
    
        // Show a custom confirmation dialog
        //
        function showConfirm() {
            navigator.notification.confirm(
                'You are the winner!', // message
                 onConfirm,            // callback to invoke with index of button pressed
                'Game Over',           // title
                ['Restart','Exit']         // buttonLabels
            );
        }
    
        </script>
      </head>
      <body>
        <p><a href="#" onclick="showConfirm(); return false;">Show Confirm</a></p>
      </body>
    </html>
    

## Windows Phone 7 и 8 причуды

*   Нет встроенного браузера функции для `window.confirm` , но его можно привязать путем присвоения:
    
        window.confirm = navigator.notification.confirm;
        

*   Вызовы `alert` и `confirm` являются не блокируется, поэтому результат доступен только асинхронно.


# notification.prompt

Показывает настраиваемое диалоговое окно Ввод.

    navigator.notification.prompt(message, promptCallback, [title], [buttonLabels], [defaultText])
    

*   **сообщение**: сообщение диалога. *(Строка)*

*   **promptCallback**: обратного вызова, вызываемый при нажатии кнопки. *(Функция)*

*   **название**: диалоговое окно название *(String)* (опционально, по умолчанию`Prompt`)

*   **buttonLabels**: массив строк, указав кнопку этикетки *(массив)* (опционально, по умолчанию`["OK","Cancel"]`)

*   **defaultText**: по умолчанию textbox входное значение ( `String` ) (опционально, по умолчанию: пустая строка)

## Описание

`notification.prompt`Метод отображает родной диалоговое окно, которое более настраиваемый, чем в браузере `prompt` функции.

## promptCallback

`promptCallback`Выполняется, когда пользователь нажимает одну из кнопок в диалоговом окне приглашения. `results`Объект, переданный в метод обратного вызова содержит следующие свойства:

*   **buttonIndex**: индекс нажатой кнопки. *(Число)* Обратите внимание, что индекс использует единицы индексации, поэтому значение `1` , `2` , `3` , и т.д.

*   **INPUT1**: текст, введенный в диалоговом окне приглашения. *(Строка)*

## Поддерживаемые платформы

*   Андроид
*   iOS

## Быстрый пример

    // process the promp dialog results
    function onPrompt(results) {
        alert("You selected button number " + results.buttonIndex + " and entered " + results.input1);
    }
    
    // Show a custom prompt dialog
    //
    function showPrompt() {
        navigator.notification.prompt(
            'Please enter your name',  // message
            onPrompt,                  // callback to invoke
            'Registration',            // title
            ['Ok','Exit'],             // buttonLabels
            'Jane Doe'                 // defaultText
        );
    }
    

## Полный пример

    <!DOCTYPE html>
    <html>
      <head>
        <title>Notification Prompt Dialog Example</title>
    
        <script type="text/javascript" charset="utf-8" src="cordova.js"></script>
        <script type="text/javascript" charset="utf-8">
    
        // Wait for device API libraries to load
        //
        document.addEventListener("deviceready", onDeviceReady, false);
    
        // device APIs are available
        //
        function onDeviceReady() {
            // Empty
        }
    
        // process the promptation dialog result
        function onPrompt(results) {
            alert("You selected button number " + results.buttonIndex + " and entered " + results.input1);
        }
    
        // Show a custom prompt dialog
        //
        function showPrompt() {
            navigator.notification.prompt(
                'Please enter your name',  // message
                onPrompt,                  // callback to invoke
                'Registration',            // title
                ['Ok','Exit'],             // buttonLabels
                'Jane Doe'                 // defaultText
            );
        }
    
        </script>
      </head>
      <body>
        <p><a href="#" onclick="showPrompt(); return false;">Show Prompt</a></p>
      </body>
    </html>
    

## Андроид причуды

*   Android поддерживает максимум трех кнопок и игнорирует любой больше, чем это.

*   На Android 3.0 и более поздних версиях кнопки отображаются в обратном порядке для устройств, которые используют тему холо.


# Notification.beep

Устройство воспроизводит звуковой сигнал звук.

    navigator.notification.beep(times);
    

*   **раз**: количество раз, чтобы повторить сигнал. *(Число)*

## Поддерживаемые платформы

*   Андроид
*   WebWorks ежевики (OS 5.0 и выше)
*   iOS
*   Tizen
*   Windows Phone 7 и 8

## Быстрый пример

    // Beep twice!
    navigator.notification.beep(2);
    

## Полный пример

    <!DOCTYPE html>
    <html>
      <head>
        <title>Notification Example</title>
    
        <script type="text/javascript" charset="utf-8" src="cordova.js"></script>
        <script type="text/javascript" charset="utf-8">
    
        // Wait for device API libraries to load
        //
        document.addEventListener("deviceready", onDeviceReady, false);
    
        // device APIs are available
        //
        function onDeviceReady() {
            // Empty
        }
    
        // Show a custom alert
        //
        function showAlert() {
            navigator.notification.alert(
                'You are the winner!',  // message
                'Game Over',            // title
                'Done'                  // buttonName
            );
        }
    
        // Beep three times
        //
        function playBeep() {
            navigator.notification.beep(3);
        }
    
        // Vibrate for 2 seconds
        //
        function vibrate() {
            navigator.notification.vibrate(2000);
        }
    
        </script>
      </head>
      <body>
        <p><a href="#" onclick="showAlert(); return false;">Show Alert</a></p>
        <p><a href="#" onclick="playBeep(); return false;">Play Beep</a></p>
        <p><a href="#" onclick="vibrate(); return false;">Vibrate</a></p>
      </body>
    </html>
    

## Андроид причуды

*   Андроид играет по умолчанию **рингтон уведомления** , указанного на панели **параметров/звук и дисплей** .

## Windows Phone 7 и 8 причуды

*   Опирается на общий звуковой файл из распределения Cordova.

## Tizen причуды

*   Tizen реализует гудков, играя аудиофайл через СМИ API.

*   Звуковой файл должен быть коротким, должен быть расположен в `sounds` подкаталог корневого каталога приложения и должны быть названы`beep.wav`.


# notification.vibrate

Вибрирует устройство для указанного количества времени.

    navigator.notification.vibrate(milliseconds)
    

*   **время**: миллисекунд для того чтобы вибрировать устройство, где 1000 миллисекунд равен 1 секунду. *(Число)*

## Поддерживаемые платформы

*   Андроид
*   WebWorks ежевики (OS 5.0 и выше)
*   iOS
*   Windows Phone 7 и 8

## Быстрый пример

    // Vibrate for 2.5 seconds
    //
    navigator.notification.vibrate(2500);
    

## Полный пример

    <!DOCTYPE html>
    <html>
      <head>
        <title>Notification Example</title>
    
        <script type="text/javascript" charset="utf-8" src="cordova.js"></script>
        <script type="text/javascript" charset="utf-8">
    
        // Wait for device API libraries to load
        //
        document.addEventListener("deviceready", onDeviceReady, false);
    
        // device APIs are available
        //
        function onDeviceReady() {
            // Empty
        }
    
        // Show a custom alert
        //
        function showAlert() {
            navigator.notification.alert(
                'You are the winner!',  // message
                'Game Over',            // title
                'Done'                  // buttonName
            );
        }
    
        // Beep three times
        //
        function playBeep() {
            navigator.notification.beep(3);
        }
    
        // Vibrate for 2 seconds
        //
        function vibrate() {
            navigator.notification.vibrate(2000);
        }
    
        </script>
      </head>
      <body>
        <p><a href="#" onclick="showAlert(); return false;">Show Alert</a></p>
        <p><a href="#" onclick="playBeep(); return false;">Play Beep</a></p>
        <p><a href="#" onclick="vibrate(); return false;">Vibrate</a></p>
      </body>
    </html>
    

## iOS причуды

*   **время**: игнорирует указанное время и вибрирует для предварительно установленного времени.
    
        navigator.notification.vibrate();
        navigator.notification.vibrate(2500);   // 2500 is ignored
        

## BB10 совместимости

вибрирует функция, принадлежащий объекту навигатор

        navigator.vibrate(1000);  // vibrate for 1 second
