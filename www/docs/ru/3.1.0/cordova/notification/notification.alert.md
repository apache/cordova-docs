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