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

# ContactOrganization

Contiene una `Contact` las propiedades de la organización del objeto.

## Propiedades

*   **Pref**: A `true` si este `ContactOrganization` contiene el valor del usuario preferido. *(booleano)*

*   **tipo**: una cadena que indica qué tipo de campo es, *casa* por ejemplo. _(DOMString)

*   **nombre**: el nombre de la organización. *(DOMString)*

*   **Departamento**: el contrato de obras para el departamento. *(DOMString)*

*   **título**: título del contacto de la organización. *(DOMString)*

## Detalles

El `ContactOrganization` objeto almacena las propiedades de organización de un contacto. A `Contact` objeto almacena uno o más `ContactOrganization` los objetos en una matriz.

## Plataformas soportadas

*   Android
*   BlackBerry WebWorks (OS 5.0 y superiores)
*   iOS
*   Windows Phone 7 y 8
*   Windows 8

## Ejemplo rápido

    function onSuccess(contacts) {
        for (var i = 0; i < contacts.length; i++) {
            for (var j = 0; j < contacts[i].organizations.length; j++) {
                alert("Pref: "      + contacts[i].organizations[j].pref       + "\n" +
                    "Type: "        + contacts[i].organizations[j].type       + "\n" +
                    "Name: "        + contacts[i].organizations[j].name       + "\n" +
                    "Department: "  + contacts[i].organizations[j].department + "\n" +
                    "Title: "       + contacts[i].organizations[j].title);
            }
        }
    };
    
    function onError(contactError) {
        alert('onError!');
    };
    
    var options = new ContactFindOptions();
    options.filter = "";
    filter = ["displayName", "organizations"];
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
            filter = ["displayName","organizations"];
            navigator.contacts.find(filter, onSuccess, onError, options);
        }
    
        // onSuccess: Get a snapshot of the current contacts
        //
        function onSuccess(contacts) {
            for (var i = 0; i < contacts.length; i++) {
                for (var j = 0; j < contacts[i].organizations.length; j++) {
                    alert("Pref: "     + contacts[i].organizations[j].pref       + "\n" +
                        "Type: "       + contacts[i].organizations[j].type       + "\n" +
                        "Name: "       + contacts[i].organizations[j].name       + "\n" +
                        "Department: " + contacts[i].organizations[j].department + "\n" +
                        "Title: "      + contacts[i].organizations[j].title);
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

*   **Pref**: no compatible con dispositivos Android 2.X, regresando`false`.

## Rarezas blackBerry WebWorks (OS 5.0 y superiores)

*   **Pref**: no compatible con dispositivos BlackBerry, regresando`false`.

*   **tipo**: no compatible con dispositivos BlackBerry, regresando`null`.

*   **nombre**: parcialmente soportado. El primer nombre de la organización se almacena en el campo de la **empresa** BlackBerry.

*   **Departamento**: no soportado, regresando`null`.

*   **título**: parcialmente soportado. El primer título de la organización se almacena en el campo de **jobTitle** BlackBerry.

## iOS rarezas

*   **Pref**: no se admite en dispositivos iOS, regresando`false`.

*   **tipo**: no se admite en dispositivos iOS, regresando`null`.

*   **nombre**: parcialmente soportado. El primer nombre de la organización se almacena en el campo de **kABPersonOrganizationProperty** de iOS.

*   **Departamento**: parcialmente soportado. El primer nombre de departamento se almacena en el campo de **kABPersonDepartmentProperty** de iOS.

*   **título**: parcialmente soportado. El primer título se almacena en el campo de **kABPersonJobTitleProperty** de iOS.