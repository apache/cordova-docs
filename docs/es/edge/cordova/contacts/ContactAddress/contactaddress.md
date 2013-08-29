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

# ContactAddress

Contiene las propiedades de la dirección de un objeto de `Contact`.

## Propiedades

*   **pref**: establecido en `true` si esta `ContactAddress` contiene el usuario preferido de valor. *(boolean)*

*   **type**: una cadena que indica qué tipo de campo es, *home* por ejemplo. *(DOMString)*

*   **formatted**: la dirección completa con formato de visualización. *(DOMString)*

*   **streetAddress**: la dirección completa. *(DOMString)*

*   **locality**: la ciudad o localidad. *(DOMString)*

*   **region**: el estado o la región. *(DOMString)*

*   **postalCode**: el código postal o código postal. *(DOMString)*

*   **country**: el nombre del país. *(DOMString)*

## Detalles

El objeto `ContactAddress` almacena las propiedades de una única dirección de un contacto. Un objeto de `Contact` puede incluir más de una dirección en un array `ContactAddress[]`.

## Plataformas soportadas

*   Android
*   BlackBerry WebWorks (OS 5.0 y superiores)
*   iOS
*   Windows Phone 7 y 8
*   Windows 8

## Ejemplo rápido

    // display the address information for all contacts
    
    function onSuccess(contacts) {
        for (var i = 0; i < contacts.length; i++) {
            for (var j = 0; j < contacts[i].addresses.length; j++) {
                alert("Pref: "         + contacts[i].addresses[j].pref          + "\n" +
                    "Type: "           + contacts[i].addresses[j].type          + "\n" +
                    "Formatted: "      + contacts[i].addresses[j].formatted     + "\n" +
                    "Street Address: " + contacts[i].addresses[j].streetAddress + "\n" +
                    "Locality: "       + contacts[i].addresses[j].locality      + "\n" +
                    "Region: "         + contacts[i].addresses[j].region        + "\n" +
                    "Postal Code: "    + contacts[i].addresses[j].postalCode    + "\n" +
                    "Country: "        + contacts[i].addresses[j].country);
            }
        }
    };
    
    function onError(contactError) {
        alert('onError!');
    };
    
    // find all contacts
    var options = new ContactFindOptions();
    options.filter = "";
    var filter = ["displayName", "addresses"];
    navigator.contacts.find(filter, onSuccess, onError, options);
    

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
            // find all contacts
            var options = new ContactFindOptions();
            options.filter = "";
            var filter = ["displayName", "addresses"];
            navigator.contacts.find(filter, onSuccess, onError, options);
        }
    
        // onSuccess: Get a snapshot of the current contacts
        //
        function onSuccess(contacts) {
            // display the address information for all contacts
            for (var i = 0; i < contacts.length; i++) {
                for (var j = 0; j < contacts[i].addresses.length; j++) {
                    alert("Pref: "           + contacts[i].addresses[j].pref          + "\n" +
                          "Type: "           + contacts[i].addresses[j].type          + "\n" +
                          "Formatted: "      + contacts[i].addresses[j].formatted     + "\n" +
                          "Street Address: " + contacts[i].addresses[j].streetAddress + "\n" +
                          "Locality: "       + contacts[i].addresses[j].locality      + "\n" +
                          "Region: "         + contacts[i].addresses[j].region        + "\n" +
                          "Postal Code: "    + contacts[i].addresses[j].postalCode    + "\n" +
                          "Country: "        + contacts[i].addresses[j].country);
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
    

## Rarezas Android 2.X

*   **pref**: no soportado, devolviendo `false` en dispositivos Android 2.X.

## Rarezas blackBerry WebWorks (OS 5.0 y superiores)

*   **pref**: no compatible con dispositivos BlackBerry, devolviendo `false`.

*   **type**: parcialmente soportado. Sólo uno de cada *Work* y *Home* tipo direcciones puede ser almacenado por contacto.

*   **formatted**: parcialmente soportado. Devuelve una concatenación de todos los campos de dirección de BlackBerry.

*   **streetAddress**: soportado. Devuelve una concatenación de BlackBerry **address1** y **2** campos de dirección.

*   **locality**: apoyado. Almacenada en el campo de dirección de la **city** de BlackBerry.

*   **region**: apoyado. Almacenada en el campo de dirección de BlackBerry **stateProvince**.

*   **postalCode**: apoyado. Almacenada en el campo de dirección de BlackBerry **zipPostal**.

*   **country**: apoyado.

## iOS rarezas

*   **pref**: no se admite en dispositivos iOS, devolviendo `false`.

*   **formatted**: actualmente no se admite.