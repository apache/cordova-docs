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

# backbutton

Событие возникает, когда пользователь нажимает кнопку "назад".

    document.<a href="../inappbrowser/inappbrowser.html">addEventListener</a>("backbutton", yourCallbackFunction, false);
    

## Подробная информация

Чтобы переопределить поведение по умолчанию кнопки back, зарегистрируйте прослушиватель событий для `backbutton` событий, обычно путем вызова `document.<a href="../inappbrowser/inappbrowser.html">addEventListener</a>` после того как вы получите `<a href="events.deviceready.html">deviceready</a>` событие. Это уже не нужно любой другой метод для переопределения поведения кнопки back.

## Поддерживаемые платформы

*   Андроид
*   WebWorks ежевики (OS 5.0 и выше)
*   Windows Phone 7 и 8

## Быстрый пример

    document.<a href="../inappbrowser/inappbrowser.html">addEventListener</a>("backbutton", onBackKeyDown, false);
    
    function onBackKeyDown() {
        // Handle the back button
    }
    

## Полный пример

    <!DOCTYPE html>
    <html>
      <head>
        <title>Back Button <a href="../storage/storage.opendatabase.html">Example</a></title>
    
        <script type="text/javascript" charset="utf-8" src="cordova.js"></script>
        <script type="text/javascript" charset="utf-8">
    
        // Wait for device API libraries to load
        //
        function onLoad() {
            document.<a href="../inappbrowser/inappbrowser.html">addEventListener</a>("<a href="events.deviceready.html">deviceready</a>", onDeviceReady, false);
        }
    
        // device APIs are available
        //
        function onDeviceReady() {
            // Register the event listener
            document.<a href="../inappbrowser/inappbrowser.html">addEventListener</a>("backbutton", onBackKeyDown, false);
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