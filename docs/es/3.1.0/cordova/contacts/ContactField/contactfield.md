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

Soporta campos genéricos en un `Contact` objeto. Algunas propiedades guardan como `ContactField` los objetos incluyen direcciones de correo electrónico, números de teléfono y direcciones URL.

## Propiedades

*   **tipo**: una cadena que indica qué tipo de campo es, *casa* por ejemplo. *(DOMString)*

*   **valor**: el valor del campo, como un teléfono número o dirección de email. *(DOMString)*

*   **Pref**: A `true` si este `ContactField` contiene el valor del usuario preferido. *(booleano)*

## Detalles

El `ContactField` objeto es un componente reutilizable que representa en contacto con campos genéricamente. Cada `ContactField` objeto contiene un `value` , `type` , y `pref` propiedad. A `Contact` objeto almacena varias propiedades en `ContactField[]` arreglos de discos, como las direcciones de teléfono números y correo electrónico.

En la mayoría de los casos, no existen previamente determinados valores para un `ContactField` atributo **type** del objeto. Por ejemplo, un número de teléfono puede especificar valores de **tipo** de *casa*, *trabajo*, *móvil*, *iPhone*o cualquier otro valor que es apoyada por la base de datos contacto de la plataforma de un dispositivo en particular. Sin embargo, para el `Contact` **fotos de** campo, el campo **tipo** indica el formato de la imagen devuelta: **url** cuando el atributo de **valor** contiene una dirección URL de la imagen de la foto, o *base64* cuando el **valor** contiene una cadena codificada en base64 imagen. 

## Plataformas soportadas

*   Android
*   BlackBerry WebWorks (OS 5.0 y superiores)
*   iOS
*   Windows Phone 7 y 8
*   Windows 8

## Ejemplo rápido

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
    

## Ejemplo completo

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
    

## Rarezas Android

*   **Pref**: no soportado, regresando`false`.

## Rarezas blackBerry WebWorks (OS 5.0 y superiores)

*   **tipo**: parcialmente soportado. Utilizado para los números de teléfono.

*   **valor**: apoyado.

*   **Pref**: no soportado, regresando`false`.

## iOS rarezas

*   **Pref**: no soportado, regresando`false`.