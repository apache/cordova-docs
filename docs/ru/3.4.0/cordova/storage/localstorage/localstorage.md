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

# localStorage

Обеспечивает доступ к W3C [интерфейс веб-хранилища][1]

 [1]: http://dev.w3.org/html5/webstorage/#the-localstorage-attribute

    var permanentStorage = window.localStorage;
    var tempStorage = window.sessionStorage;
    

## Методы

*   **ключ**: Возвращает имя ключа в указанной позиции.

*   **getItem**: Возвращает элемент, определяемый указанным ключом.

*   **setItem**: присваивает значение элемента с ключом.

*   **removeItem**: Удаляет элемент с указанным ключом.

*   **Удалить**: удаляет все пары ключ/значение.

## Подробная информация

`window.localStorage`Интерфейс реализует W3C [интерфейс веб-хранилища][2]. Приложение может использовать его для сохранения постоянных данных с использованием пар ключ значение. `window.sessionStorage`Интерфейс работает таким же образом во всех отношениях, за исключением того, что все данные очищается каждый раз, когда приложение закрывается. Каждая база данных содержит отдельное пространство имен.

 [2]: http://dev.w3.org/html5/webstorage/

## Поддерживаемые платформы

*   Андроид
*   WebWorks ежевики (OS 6.0 и выше)
*   iOS
*   Tizen
*   Windows Phone 7 и 8

## Ключевые быстрый пример

    var keyName = window.localStorage.key(0);
    

## Быстрый пример набора элементов

    window.localStorage.setItem("key", "value");
    

## Получить быстрый пример элемента

        var value = window.localStorage.getItem("key");
        // value is now equal to "value"
    

## Удалить пункт быстрый пример

        window.localStorage.removeItem("key");
    

## Снимите небольшой пример

        window.localStorage.clear();
    

## Полный пример

    <!DOCTYPE html>
    <html>
      <head>
        <title>Storage Example</title>
    
        <script type="text/javascript" charset="utf-8" src="cordova.js"></script>
        <script type="text/javascript" charset="utf-8">
    
        // Wait for device API libraries to load
        //
        document.addEventListener("deviceready", onDeviceReady, false);
    
        // device APIs are available
        //
        function onDeviceReady() {
            window.localStorage.setItem("key", "value");
            var keyname = window.localStorage.key(i);
            // keyname is now equal to "key"
            var value = window.localStorage.getItem("key");
            // value is now equal to "value"
            window.localStorage.removeItem("key");
            window.localStorage.setItem("key2", "value2");
            window.localStorage.clear();
            // localStorage is now empty
        }
    
        </script>
      </head>
      <body>
        <h1>Example</h1>
        <p>localStorage</p>
      </body>
    </html>
    

## Windows Phone 7 причуды

Точечная нотация является *не* доступны на Windows Phone 7. Обязательно используйте `setItem` или `getItem` , а не доступ к ключи напрямую из объекта хранилища, такие как`window.localStorage.someKey`.