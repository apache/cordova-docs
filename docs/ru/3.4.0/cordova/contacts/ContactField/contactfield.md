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

# ContactField

Поддерживает общие поля в `Contact` объект. Некоторые свойства хранятся в виде `ContactField` объекты включают адреса электронной почты, Номера телефонов и URL-адреса.

## Свойства

*   **тип**: строка, указывающая тип поля это, *дома* например. *(DOMString)*

*   **значение**: значение поля, например номер телефона или электронной почты адрес. *(DOMString)*

*   **pref**: набор `true` Если `ContactField` содержит значение предпочтительный для пользователя. *(логический)*

## Подробная информация

`ContactField`Объект является многократно используемый компонент, что представляет родово контактные поля. Каждый `ContactField` содержит объект `value` , `type` , и `pref` Свойства. A `Contact` объект хранит несколько свойств в `ContactField[]` массивов, такие как номера телефонов, адреса электронной почты.

В большинстве случаев существует не заранее определенные значения для `ContactField` **тип** атрибута объекта. Например номер телефона можно указать значения **типа** *дома*, *работы*, *мобильных*, *iPhone*или любого другого значения, Поддерживаемые платформы конкретного устройства базы данных контактов. Однако, для `Contact` **фотографии** поля, **тип** поля указывает формат возвращаемого изображения: **URL-адрес,** когда атрибут **value** содержит URL-адрес изображения фото или *base64* , если **значение** содержит строку изображения в кодировке base64. 

## Поддерживаемые платформы

*   Андроид
*   WebWorks ежевики (OS 5.0 и выше)
*   iOS
*   Windows Phone 7 и 8
*   ОС Windows 8

## Быстрый пример

        // create a new contact
        var contact = navigator.contacts.create();
    
        // store contact phone numbers in ContactField[]
        var phoneNumbers = [];
        phoneNumbers[0] = new ContactField('work', '212-555-1234', false);
        phoneNumbers[1] = new ContactField('mobile', '917-555-5432', true); // preferred number
        phoneNumbers[2] = new ContactField('home', '203-555-7890', false);
        contact.phoneNumbers = phoneNumbers;
    
        // save the contact
        contact.save();
    

## Полный пример

    <!DOCTYPE html>
    <html>
      <head>
        <title>Contact Example</title>
    
        <script type="text/javascript" charset="utf-8" src="cordova.js"></script>
        <script type="text/javascript" charset="utf-8">
    
        // Wait for device API libraries to load
        //
        document.addEventListener("deviceready", onDeviceReady, false);
    
        // device APIs are available
        //
    
        function onDeviceReady() {
            // create a new contact
            var contact = navigator.contacts.create();
    
            // store contact phone numbers in ContactField[]
            var phoneNumbers = [];
            phoneNumbers[0] = new ContactField('work', '212-555-1234', false);
            phoneNumbers[1] = new ContactField('mobile', '917-555-5432', true); // preferred number
            phoneNumbers[2] = new ContactField('home', '203-555-7890', false);
            contact.phoneNumbers = phoneNumbers;
    
            // save the contact
            contact.save();
    
            // search contacts, returning display name and phone numbers
            var options = new ContactFindOptions();
            options.filter = "";
            filter = ["displayName", "phoneNumbers"];
            navigator.contacts.find(filter, onSuccess, onError, options);
        }
    
        // onSuccess: Get a snapshot of the current contacts
        //
        function onSuccess(contacts) {
            for (var i = 0; i < contacts.length; i++) {
                // display phone numbers
                for (var j = 0; j < contacts[i].phoneNumbers.length; j++) {
                    alert("Type: "      + contacts[i].phoneNumbers[j].type  + "\n" +
                          "Value: "     + contacts[i].phoneNumbers[j].value + "\n" +
                          "Preferred: " + contacts[i].phoneNumbers[j].pref);
                }
            }
        };
    
        // onError: Failed to get the contacts
        //
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
    

## Андроид причуды

*   **pref**: не поддерживается, возвращая`false`.

## Причуды ежевики WebWorks (OS 5.0 и выше)

*   **тип**: частично поддерживается. Используется для телефонных номеров.

*   **значение**: поддерживается.

*   **pref**: не поддерживается, возвращая`false`.

## iOS причуды

*   **pref**: не поддерживается, возвращая`false`.