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