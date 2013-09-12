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