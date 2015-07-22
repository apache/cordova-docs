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

Consulta la base de datos de contactos del dispositivo y vuelve a uno o más objetos de `Contact`, cada una contiene los campos especificados.

    navigator.contacts.find(contactFields, contactSuccess, contactError, contactFindOptions);
    

## Descripción

El método `contacts.find` se ejecuta asincrónicamente, consultando la base de datos de contactos del dispositivo y devolver una matriz de objetos de `Contact`. Los objetos resultantes son pasados a la función de callback `contactSuccess` especificada por el parámetro **contactSuccess**.

El parámetro **contactFields** especifica los campos para ser utilizado como un calificador de búsqueda, y sólo esos resultados son pasados a la función de devolución de llamada **contactSuccess**. Un parámetro de longitud cero **contactFields** no es válido y resultados en `ContactError.INVALID_ARGUMENT_ERROR`. Un valor de **contactFields** de `"*"` devuelve todo contacto con los campos.

La cadena de **contactFindOptions.filter** puede ser usada como un filtro de búsqueda al consultar la base de datos de contactos. Si proporciona, mayúsculas y minúsculas, coincidencia parcial valor se aplica a cada campo especificado en el parámetro **contactFields**. Si hay un partido para *cualquier* de los campos especificados, se devuelve el contacto.

## Parámetros

*   **contactFields**: póngase en contacto con campos para usar como un calificador de búsqueda. La resultante `Contact` objeto sólo cuenta con los valores de estos campos. *(DOMString[])* [Obligatorio]

*   **contactSuccess**: función callback éxito invocada con los contactos de regresar de la base de datos. [Obligatorio]

*   **contactError**: función de callback de Error, se invoca cuando se produce un error. [Opcional]

*   **contactFindOptions**: buscar opciones para filtrar contactos. [Opcional]

## Plataformas soportadas

*   Android
*   BlackBerry WebWorks (OS 5.0 y superiores)
*   iOS
*   Windows Phone 7 y 8
*   Windows 8

## Ejemplo rápido

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
    

## Ejemplo completo

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