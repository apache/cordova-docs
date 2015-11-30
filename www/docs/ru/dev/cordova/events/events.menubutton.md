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

title: menubutton
---

# menubutton

Событие возникает, когда пользователь нажимает кнопку меню.

    document.addEventListener("menubutton", yourCallbackFunction, false);
    

## Подробности

Применение обработчика события переопределяет поведение кнопки меню по умолчанию.

Приложения обычно должны использовать `window.addEventListener` чтобы добавить обработчик события после того как произойдет событие `[deviceready](events.deviceready.html)`.

## Поддерживаемые платформы

*   Amazon Fire OS
*   Android
*   BlackBerry 10

## Краткий пример

    document.addEventListener("menubutton", onMenuKeyDown, false);
    
    function onMenuKeyDown() {
        // Handle the back button
    }
    

## Развернутый пример

    <!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN"
                          "http://www.w3.org/TR/html4/strict.dtd">
    <html>
      <head>
        <title>Menu Button Example</title>
    
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
            document.addEventListener("menubutton", onMenuKeyDown, false);
        }
    
        // Handle the menu button
        //
        function onMenuKeyDown() {
        }
    
        </script>
      </head>
      <body onload="onLoad()">
      </body>
    </html>