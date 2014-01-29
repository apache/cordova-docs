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

# backbutton

Событие возникает, когда пользователь нажимает кнопку "назад".

    document.addEventListener("backbutton", yourCallbackFunction, false);
    

## Подробная информация

Чтобы переопределить поведение по умолчанию кнопки back, зарегистрируйте обработчик события `backbutton`, обычно путем вызова `document.addEventListener`, после того как вы произойдет событий `deviceready`. Более не требуется вызывать никакой другой метод для переопределения поведения кнопки back.

## Поддерживаемые платформы

*   Amazon Fire OS
*   Android
*   BlackBerry 10
*   Windows Phone 7 и 8

## Краткий пример

    document.addEventListener("backbutton", onBackKeyDown, false);
    
    function onBackKeyDown() {
        // Handle the back button
    }
    

## Развернутый пример

    <!DOCTYPE html>
    <html>
      <head>
        <title>Back Button Example</title>
    
        <script type="text/javascript" charset="utf-8" src="cordova.js"></script>
        <script type="text/javascript" charset="utf-8">
    
        // Wait for device API libraries to load
        //
        function onLoad() {
            document.addEventListener("deviceready", onDeviceReady, false);
        }
    
        // device APIs are available
        //
        function onDeviceReady() {
            // Register the event listener
            document.addEventListener("backbutton", onBackKeyDown, false);
        }
    
        // Handle the back button
        //
        function onBackKeyDown() {
        }
    
        </script>
      </head>
      <body onload="onLoad()">
      </body>
    </html>