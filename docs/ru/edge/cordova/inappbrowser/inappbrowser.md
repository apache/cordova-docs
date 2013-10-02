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

# InAppBrowser

> `InAppBrowser`Зовет представление веб-браузера, который отображает при `window.open()` , или когда открытие ссылки формируется как`<a target="_blank">`.

    var ref = window.open('http://apache.org', '_blank', 'location=yes');
    

**Примечание:** InAppBrowser окно ведет себя как стандартный веб-браузер и не может получить доступ к Cordova интерфейсов API.

## Описание

Объект, возвращаемый из вызова`window.open`.

## Методы

*   addEventListener
*   removeEventListener
*   close
*   show
*   executeScript
*   insertCSS

## Доступ к функции

Начиная с версии 3.0 Кордова реализует интерфейсы API уровень устройства как *плагины*. Использование CLI `plugin` команды, описанные в интерфейс командной строки, чтобы добавить или удалить эту функцию для проекта:

        $ cordova plugin add org.apache.cordova.inappbrowser
        $ cordova plugin ls
        [ 'org.apache.cordova.inappbrowser' ]
        $ cordova plugin rm org.apache.cordova.inappbrowser
    

Эти команды применяются для всех целевых платформ, но изменить параметры конфигурации платформы, описанные ниже:

*   Android (в`app/res/xml/config.xml`)
    
        <feature name="InAppBrowser">
            <param name="android-package" value="org.apache.cordova.InAppBrowser" />
        </feature>
        

*   iOS (в`config.xml`)
    
        <feature name="InAppBrowser">
            <param name="ios-package" value="CDVInAppBrowser" />
        </feature>
        

*   Windows Phone 7 и 8 (в`config.xml`)
    
        <feature name="InAppBrowser" />
        

Некоторые платформы могут поддерживать эту функцию без необходимости специальной настройки. В разделе *Поддержка платформы* в разделе Обзор.

# addEventListener

> Добавляет прослушиватель для события от`InAppBrowser`.

    ref.addEventListener(eventname, callback);
    

*   **ссылка**: ссылка для `InAppBrowser` окно *(InAppBrowser)*

*   **EventName**: событие для прослушивания *(String)*
    
    *   **loadstart**: событие возникает, когда `InAppBrowser` начинает для загрузки URL-адреса.
    *   **loadstop**: событие возникает, когда `InAppBrowser` завершит загрузку URL-адреса.
    *   **loaderror**: событие возникает, когда `InAppBrowser` обнаруживает ошибку при загрузке URL-адреса.
    *   **выход**: возникает событие, когда `InAppBrowser` окно закрыто.

*   **обратного вызова**: функция, которая выполняется, когда возникает событие. Функция передается `InAppBrowserEvent` объект в качестве параметра.

## Поддерживаемые платформы

*   Андроид
*   Ежевика
*   iOS
*   Windows Phone 7 и 8

## Быстрый пример

    var ref = window.open('http://apache.org', '_blank', 'location=yes');
    ref.addEventListener('loadstart', function() { alert(event.url); });
    

## Полный пример

    <!DOCTYPE html>
    <html>
      <head>
        <title>InAppBrowser.addEventListener Example</title>
    
        <script type="text/javascript" charset="utf-8" src="cordova.js"></script>
        <script type="text/javascript" charset="utf-8">
    
        // Wait for device API libraries to load
        //
        document.addEventListener("deviceready", onDeviceReady, false);
    
        // device APIs are available
        //
        function onDeviceReady() {
             var ref = window.open('http://apache.org', '_blank', 'location=yes');
             ref.addEventListener('loadstart', function(event) { alert('start: ' + event.url); });
             ref.addEventListener('loadstop', function(event) { alert('stop: ' + event.url); });
             ref.addEventListener('loaderror', function(event) { alert('error: ' + event.message); });
             ref.addEventListener('exit', function(event) { alert(event.type); });
        }
    
        </script>
      </head>
      <body>
      </body>
    </html>
    

# метод removeEventListener

> Удаляет прослушиватель для события от`InAppBrowser`.

    ref.removeEventListener(eventname, callback);
    

*   **ссылка**: ссылка для `InAppBrowser` окно. *(InAppBrowser)*

*   **EventName**: событие прекратить прослушивание. *(Строка)*
    
    *   **loadstart**: событие возникает, когда `InAppBrowser` начинает для загрузки URL-адреса.
    *   **loadstop**: событие возникает, когда `InAppBrowser` завершит загрузку URL-адреса.
    *   **loaderror**: событие возникает, когда `InAppBrowser` обнаруживает ошибку загрузки URL-адреса.
    *   **выход**: возникает событие, когда `InAppBrowser` окно закрыто.

*   **обратного вызова**: функция, выполняемая когда это событие наступает. Функция передается `InAppBrowserEvent` объект.

## Поддерживаемые платформы

*   Андроид
*   Ежевика
*   iOS
*   Windows Phone 7 и 8

## Быстрый пример

    var ref = window.open('http://apache.org', '_blank', 'location=yes');
    var myCallback = function() { alert(event.url); }
    ref.addEventListener('loadstart', myCallback);
    ref.removeEventListener('loadstart', myCallback);
    

## Полный пример

    <!DOCTYPE html>
    <html>
      <head>
        <title>InAppBrowser.removeEventListener Example</title>
    
        <script type="text/javascript" charset="utf-8" src="cordova.js"></script>
        <script type="text/javascript" charset="utf-8">
    
        // Wait for device API libraries to load
        //
        document.addEventListener("deviceready", onDeviceReady, false);
    
        // Global InAppBrowser reference
        var iabRef = null;
    
        function iabLoadStart(event) {
            alert(event.type + ' - ' + event.url);
        }
    
        function iabLoadStop(event) {
            alert(event.type + ' - ' + event.url);
        }
    
        function iabLoadError(event) {
            alert(event.type + ' - ' + event.message);
        }
    
        function iabClose(event) {
             alert(event.type);
             iabRef.removeEventListener('loadstart', iabLoadStart);
             iabRef.removeEventListener('loadstop', iabLoadStop);
             iabRef.removeEventListener('loaderror', iabLoadError);
             iabRef.removeEventListener('exit', iabClose);
        }
    
        // device APIs are available
        //
        function onDeviceReady() {
             iabRef = window.open('http://apache.org', '_blank', 'location=yes');
             iabRef.addEventListener('loadstart', iabLoadStart);
             iabRef.addEventListener('loadstop', iabLoadStop);
             iabRef.removeEventListener('loaderror', iabLoadError);
             iabRef.addEventListener('exit', iabClose);
        }
    
        </script>
      </head>
      <body>
      </body>
    </html>
    

# закрыть

> Закрывает `InAppBrowser` окно.

    ref.close();
    

*   **ссылка**: ссылка для `InAppBrowser` окно *(InAppBrowser)*

## Поддерживаемые платформы

*   Андроид
*   Ежевика
*   iOS
*   Windows Phone 7 и 8

## Быстрый пример

    var ref = window.open('http://apache.org', '_blank', 'location=yes');
    ref.close();
    

## Полный пример

    <!DOCTYPE html>
    <html>
      <head>
        <title>InAppBrowser.close Example</title>
    
        <script type="text/javascript" charset="utf-8" src="cordova.js"></script>
        <script type="text/javascript" charset="utf-8">
    
        // Wait for device API libraries to load
        //
        document.addEventListener("deviceready", onDeviceReady, false);
    
        // device APIs are available
        //
        function onDeviceReady() {
             var ref = window.open('http://apache.org', '_blank', 'location=yes');
             // close InAppBrowser after 5 seconds
             setTimeout(function() {
                 ref.close();
             }, 5000);
        }
    
        </script>
      </head>
      <body>
      </body>
    </html>
    

# Показать

> Отображается окно InAppBrowser, был открыт скрытые. Вызов это не имеет эффекта при InAppBrowser уже был виден.

    ref.show();
    

*   **ref:** ссылка на окно (InAppBrowser`InAppBrowser`)

## Поддерживаемые платформы

*   Андроид
*   Ежевика
*   iOS

## Быстрый пример

    var ref = window.open('http://apache.org', '_blank', 'hidden=yes');
    ref.show();
    

## Полный пример

    <!DOCTYPE html>
    <html>
      <head>
        <title>InAppBrowser.show Example</title>
    
        <script type="text/javascript" charset="utf-8" src="cordova.js"></script>
        <script type="text/javascript" charset="utf-8">
    
        // Wait for Cordova to load
        //
        document.addEventListener("deviceready", onDeviceReady, false);
    
        // Cordova is ready
        //
        function onDeviceReady() {
             var ref = window.open('http://apache.org', '_blank', 'hidden=yes');
             ref.addEventListener('loadstop', function(event) {
                 alert('background window loaded'); 
             });
             // close InAppBrowser after 5 seconds
             setTimeout(function() {
                 ref.close();
             }, 5000);
        }
    
        </script>
      </head>
      <body>
      </body>
    </html>
    

# executeScript

> Вставляет код JavaScript в `InAppBrowser` окно

    ref.executeScript(details, callback);
    

*   **ссылка**: ссылка для `InAppBrowser` окно. *(InAppBrowser)*

*   **injectDetails**: подробности сценария для запуска, указав либо `file` или `code` ключ. *(Объект)*
    
    *   **файл**: URL-адрес сценария вставки.
    *   **код**: текст сценария для вставки.

*   **обратного вызова**: функция, которая выполняет после вводят JavaScript-код.
    
    *   Если введенный скрипт имеет тип `code` , обратный вызов выполняется с одним параметром, который является возвращаемое значение сценария, завернутые в `Array` . Для многострочных сценариев это возвращаемое значение последнего оператора, или последнее вычисленное выражение.

## Поддерживаемые платформы

*   Андроид
*   Ежевика
*   iOS

## Быстрый пример

    var ref = window.open('http://apache.org', '_blank', 'location=yes');
    ref.addEventListener('loadstop', function() {
        ref.executeSript({file: "myscript.js"});
    });
    

## Полный пример

    <!DOCTYPE html>
    <html>
      <head>
        <title>InAppBrowser.executeScript Example</title>
    
        <script type="text/javascript" charset="utf-8" src="cordova.js"></script>
        <script type="text/javascript" charset="utf-8">
    
        // Wait for device API libraries to load
        //
        document.addEventListener("deviceready", onDeviceReady, false);
    
        // Global InAppBrowser reference
        var iabRef = null;
    
        // Inject our custom JavaScript into the InAppBrowser window
        //
        function replaceHeaderImage() {
            iabRef.executeScript({
                code: "var img=document.querySelector('#header img'); img.src='http://cordova.apache.org/images/cordova_bot.png';"
            }, function() {
                alert("Image Element Successfully Hijacked");
            }
        }
    
        function iabClose(event) {
             iabRef.removeEventListener('loadstop', replaceHeaderImage);
             iabRef.removeEventListener('exit', iabClose);
        }
    
        // device APIs are available
        //
        function onDeviceReady() {
             iabRef = window.open('http://apache.org', '_blank', 'location=yes');
             iabRef.addEventListener('loadstop', replaceHeaderImage);
             iabRef.addEventListener('exit', iabClose);
        }
    
        </script>
      </head>
      <body>
      </body>
    </html>
    

# insertCSS

> Внедряет CSS в `InAppBrowser` окно.

    ref.insertCSS(details, callback);
    

*   **ссылка**: ссылка для `InAppBrowser` окно *(InAppBrowser)*

*   **injectDetails**: подробности сценария для запуска, указав либо `file` или `code` ключ. *(Объект)*
    
    *   **файл**: URL-адрес таблицы стилей для вставки.
    *   **код**: текст таблицы стилей для вставки.

*   **обратного вызова**: функция, которая выполняет после вводят CSS.

## Поддерживаемые платформы

*   Андроид
*   Ежевика
*   iOS

## Быстрый пример

    var ref = window.open('http://apache.org', '_blank', 'location=yes');
    ref.addEventListener('loadstop', function() {
        ref.insertCSS({file: "mystyles.css"});
    });
    

## Полный пример

    <!DOCTYPE html>
    <html>
      <head>
        <title>InAppBrowser.insertCSS Example</title>
    
        <script type="text/javascript" charset="utf-8" src="cordova.js"></script>
        <script type="text/javascript" charset="utf-8">
    
        // Wait for device API libraries to load
        //
        document.addEventListener("deviceready", onDeviceReady, false);
    
        // Global InAppBrowser reference
        var iabRef = null;
    
        // Inject our custom CSS into the InAppBrowser window
        //
        function changeBackgroundColor() {
            iabRef.insertCSS({
                code: "body { background: #ffff00"
            }, function() {
                alert("Styles Altered");
            }
        }
    
        function iabClose(event) {
             iabRef.removeEventListener('loadstop', changeBackgroundColor);
             iabRef.removeEventListener('exit', iabClose);
        }
    
        // device APIs are available
        //
        function onDeviceReady() {
             iabRef = window.open('http://apache.org', '_blank', 'location=yes');
             iabRef.addEventListener('loadstop', changeBackgroundColor);
             iabRef.addEventListener('exit', iabClose);
        }
    
        </script>
      </head>
      <body>
      </body>
    </html>
    

# InAppBrowserEvent

Объект, который передается функции обратного вызова из `addEventListener` слово `InAppBrowser` объект.

## Свойства

*   **тип**: eventname, либо `loadstart` , `loadstop` , `loaderror` , или `exit` . *(Строка)*

*   **URL**: URL-адрес, который был загружен. *(Строка)*

*   **код**: код ошибки, только в случае `loaderror` . *(Число)*

*   **сообщение**: сообщение об ошибке, только в случае `loaderror` . *(Строка)*