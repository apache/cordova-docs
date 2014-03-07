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

# ContactName

Contiene diferentes tipos de información sobre un `Contact` nombre del objeto.

## Propiedades

*   **formato**: el nombre completo del contacto. *(DOMString)*

*   **familia**: el nombre del contacto familiar. *(DOMString)*

*   **givenName**: nombre del contacto. *(DOMString)*

*   **middleName**: el nombre del contacto media. *(DOMString)*

*   **honorificPrefix**: prefijo del contacto (ejemplo *señor* o *doctor*) *(DOMString)*

*   **honorificSuffix**: sufijo de contacto (ejemplo *Esq.*). *(DOMString)*

## Detalles

El `ContactName` objeto almacena las propiedades de nombre de un contacto.

## Plataformas soportadas

*   Android 2.X
*   BlackBerry WebWorks (OS 5.0 y superiores)
*   iOS
*   Windows Phone 7 y 8
*   Windows 8

## Ejemplo rápido

    function onSuccess(contacts) {
        for (var i = 0; i < contacts.length; i++) {
            alert("Formatted: "  + contacts[i].name.formatted       + "\n" +
                "Family Name: "  + contacts[i].name.familyName      + "\n" +
                "Given Name: "   + contacts[i].name.givenName       + "\n" +
                "Middle Name: "  + contacts[i].name.middleName      + "\n" +
                "Suffix: "       + contacts[i].name.honorificSuffix + "\n" +
                "Prefix: "       + contacts[i].name.honorificSuffix);
        }
    };
    
    function onError(contactError) {
        alert('onError!');
    };
    
    var options = new ContactFindOptions();
    options.filter = "";
    filter = ["displayName", "name"];
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
            var options = new ContactFindOptions();
            options.filter="";
            filter = ["displayName","name"];
            navigator.contacts.find(filter, onSuccess, onError, options);
        }
    
        // onSuccess: Get a snapshot of the current contacts
        //
        function onSuccess(contacts) {
            for (var i = 0; i < contacts.length; i ++) {
                alert("Formatted: " + contacts[i].name.formatted       + "\n" +
                    "Family Name: " + contacts[i].name.familyName      + "\n" +
                    "Given Name: "  + contacts[i].name.givenName       + "\n" +
                    "Middle Name: " + contacts[i].name.middleName      + "\n" +
                    "Suffix: "      + contacts[i].name.honorificSuffix + "\n" +
                    "Prefix: "      + contacts[i].name.honorificPrefix);
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

*   **formato**: parcialmente compatibles y de sólo lectura. Devuelve una concatenación de `honorificPrefix` , `givenName` , `middleName` , `familyName` , y`honorificSuffix`.

## Rarezas blackBerry WebWorks (OS 5.0 y superiores)

*   **formato**: parcialmente soportado. Devuelve una concatenación de campos **firstName** y **lastName** de BlackBerry.

*   **familia**: apoyo. Almacenada en el campo **lastName** BlackBerry.

*   **givenName**: apoyado. Almacenados en campo **firstName** BlackBerry.

*   **middleName**: no soportado, regresando`null`.

*   **honorificPrefix**: no soportado, regresando`null`.

*   **honorificSuffix**: no soportado, regresando`null`.

## iOS rarezas

*   **formato**: parcialmente soportado. Devuelve iOS nombre compuesto, pero es de sólo lectura.