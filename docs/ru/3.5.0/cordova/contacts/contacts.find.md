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

# contacts.find

Запрашивает базу данных контактов устройства и возвращает один или несколько `Contact` объектов, каждый из которых содержит указанные поля.

    navigator.contacts.find(contactFields, contactSuccess, contactError, contactFindOptions);
    

## Описание

`contacts.find`Метод выполняется асинхронно, запрашивая базу контактов устройства и возвращая массив `Contact` объектов. Полученные объекты передаются в `contactSuccess` функции обратного вызова, указанный параметром **contactSuccess** .

Параметр **contactFields** указывает поля, чтобы использоваться в качестве квалификатора Поиск, и только те результаты, которые передаются функции обратного вызова **contactSuccess** . Нулевой длины **contactFields** параметр является недопустимым и приводит к `ContactError.INVALID_ARGUMENT_ERROR` . Значение **contactFields** `"*"` возвращает все поля контактов.

**ContactFindOptions.filter** строка может использоваться как фильтр поиска при запросах к базе данных контактов. Если, без учета регистра, матч частичное значение применяется к каждому полю, указанному в параметре **contactFields** . Если есть совпадение для *любого* из указанных полей, возвращается контакт.

## Параметры

*   **contactFields**: контакт поля для использования в качестве квалификатора поиска. Полученный `Contact` объект только функции значения для этих полей. *(DOMString[])* [Требуется]

*   **contactSuccess**: успех функция обратного вызова вызывается с контактами вернулся из базы данных. [Требуется]

*   **contactError**: ошибка функции обратного вызова, вызывается при возникновении ошибки. [Опционально]

*   **contactFindOptions**: параметры для фильтрации контактов поиска. [Опционально]

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
    
    function onError(contactError) {
        alert('onError!');
    };
    
    // find all contacts with 'Bob' in any name field
    var options      = new ContactFindOptions();
    options.filter   = "Bob";
    options.multiple = true;
    var fields       = ["displayName", "name"];
    navigator.contacts.find(fields, onSuccess, onError, options);
    

## Полный пример

    <!DOCTYPE html>
    <html>
        <head>
            <title>Contact Example</title>
            <script type="text/javascript" charset="utf-8" src="cordova.js"></script>
            <script type="text/javascript" charset="utf-8">
    
                // Wait for device API libraries to load
                document.addEventListener("deviceready", onDeviceReady, false);
    
                // device APIs are available
    
                function onDeviceReady() {
                    // find all contacts with 'Bob' in any name field
                    var options = new ContactFindOptions();
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
    
                function onError(contactError) {
                    alert('onError!');
                }
            </script>
        </head>
    
        <body>
            <h1>Example</h1>
            <p>Find Contacts</p>
        </body>
    </html>