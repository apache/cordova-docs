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

# contacts.find

Запрашивает базу данных контактов устройства и возвращает один или несколько `Contact` объектов, каждый из которых содержит указанные поля.

    navigator.contacts.find(<a href="parameters/contactFields.html">contactFields</a>, <a href="parameters/contactSuccess.html">contactSuccess</a>, <a href="parameters/contactError.html">contactError</a>, <a href="parameters/contactFindOptions.html">contactFindOptions</a>);
    

## Описание

`contacts.find`Метод выполняется асинхронно, запрашивая базу контактов устройства и возвращая массив `Contact` объектов. Полученные объекты передаются в `<a href="parameters/contactSuccess.html">contactSuccess</a>` функции обратного вызова, указанный параметром **<a href="parameters/contactSuccess.html">contactSuccess</a>** .

Параметр **<a href="parameters/contactFields.html">contactFields</a>** указывает поля, чтобы использоваться в качестве квалификатора Поиск, и только те результаты, которые передаются функции обратного вызова **<a href="parameters/contactSuccess.html">contactSuccess</a>** . Нулевой длины **<a href="parameters/contactFields.html">contactFields</a>** параметр является недопустимым и приводит к `<a href="ContactError/<a href="parameters/contactError.html">contactError</a>.html">ContactError</a>.INVALID_ARGUMENT_ERROR` . Значение **<a href="parameters/contactFields.html">contactFields</a>** `"*"` возвращает все поля контактов.

**<a href="ContactFindOptions/contactfindoptions.html">ContactFindOptions</a>.filter** строка может использоваться как фильтр поиска при запросах к базе данных контактов. Если, без учета регистра, матч частичное значение применяется к каждому полю, указанному в параметре **<a href="parameters/contactFields.html">contactFields</a>** . Если есть совпадение для *любого* из указанных полей, возвращается контакт.

## Параметры

*   **<a href="parameters/contactFields.html">contactFields</a>**: контакт поля для использования в качестве квалификатора поиска. Полученный `Contact` объект только функции значения для этих полей. *(DOMString[])* [Требуется]

*   **<a href="parameters/contactSuccess.html">contactSuccess</a>**: успех функция обратного вызова вызывается с контактами вернулся из базы данных. [Требуется]

*   **<a href="parameters/contactError.html">contactError</a>**: ошибка функции обратного вызова, вызывается при возникновении ошибки. [Опционально]

*   **<a href="parameters/contactFindOptions.html">contactFindOptions</a>**: параметры для фильтрации контактов поиска. [Опционально]

## Поддерживаемые платформы

*   Андроид
*   WebWorks ежевики (OS 5.0 и выше)
*   iOS
*   Windows Phone 7 и 8
*   ОС Windows 8

## Быстрый пример

    function onSuccess(contacts) {
        alert('Found ' + contacts.length + ' contacts.');
    };
    
    function onError(<a href="parameters/contactError.html">contactError</a>) {
        alert('onError!');
    };
    
    // find all contacts with 'Bob' in any name field
    var options      = new <a href="ContactFindOptions/contactfindoptions.html">ContactFindOptions</a>();
    options.filter   = "Bob";
    options.multiple = true;
    var fields       = ["displayName", "name"];
    navigator.contacts.find(fields, onSuccess, onError, options);
    

## Полный пример

    <!DOCTYPE html>
    <html>
        <head>
            <title>Contact <a href="../storage/storage.opendatabase.html">Example</a></title>
            <script type="text/javascript" charset="utf-8" src="cordova.js"></script>
            <script type="text/javascript" charset="utf-8">
    
                // Wait for device API libraries to load
                document.<a href="../inappbrowser/inappbrowser.html">addEventListener</a>("<a href="../events/events.deviceready.html">deviceready</a>", onDeviceReady, false);
    
                // device APIs are available
    
                function onDeviceReady() {
                    // find all contacts with 'Bob' in any name field
                    var options = new <a href="ContactFindOptions/contactfindoptions.html">ContactFindOptions</a>();
                    options.filter = "Bob";
                    var fields = ["displayName", "name"];
                    navigator.contacts.find(fields, onSuccess, onError, options);
                }
    
                // onSuccess: Get a snapshot of the current contacts
    
                function onSuccess(contacts) {
                    for (var i = 0; i < contacts.length; i++) {
                        console.log("Display Name = " + contacts[i].displayName);
                    }
                }
    
                // onError: Failed to get the contacts
    
                function onError(<a href="parameters/contactError.html">contactError</a>) {
                    alert('onError!');
                }
            </script>
        </head>
    
        <body>
            <h1><a href="../storage/storage.opendatabase.html">Example</a></h1>
            <p>Find Contacts</p>
        </body>
    </html>