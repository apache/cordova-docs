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

Interroge la base de données de contacts de l'appareil et renvoie un ou plusieurs objet `Contact`, chacun contenant les champs spécifiés.

    navigator.contacts.find(contactFields, contactSuccess, contactError, contactFindOptions);
    

## Description

La méthode `contacts.find` s'exécute de façon asynchrone, interrogeant la base de données de contacts de l'appareil et retournant un tableau d'objets `Contact`. Les objets retournés sont passés à la fonction de callback `contactSuccess` spécifiée par le paramètre **contactSuccess** .

Le paramètre **contactFields** spécifie les champs à utiliser comme un qualificateur de recherche, et seulement ces résultats sont passés à la fonction de callback **contactSuccess**. Un paramètre de longueur nulle **contactFields** n'est pas valide et provoque une erreur `ContactError.INVALID_ARGUMENT_ERROR`. Une valeur de **contactFields** de `"*"` retourne les champs de tout contact.

La chaîne **contactFindOptions.filter** peut être utilisée comme un filtre de recherche lorsque vous interrogez la base de données de contacts. Si fourni, une valeur insensible à la casse et partiellement correspondante est appliquée à chaque champ spécifié dans le paramètre **contactFields**. S'il y a une correspondance pour *n'importe lequel* des champs spécifiés, le contact est retourné.

## Paramètres

*   **contactFields** : champs du Contact à utiliser comme un qualificateur de recherche. L'objet `Contact` retourné dispose seulement des valeurs pour ces champs. *(DOMString[])* [Obligatoire]

*   **contactSuccess**: fonction de callback de succès appelée avec les contacts retournés par la base de données. [Obligatoire]

*   **contactError** : fonction de callback d'erreur, appelée lorsqu'une erreur se produit. [Facultatif]

*   **contactFindOptions** : options de recherche pour filtrer les contacts. [Facultatif]

## Plates-formes prises en charge

*   Android
*   BlackBerry WebWorks (OS 5.0 et plus)
*   iOS
*   Windows Phone 7 et 8
*   Windows 8

## Petit exemple

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
    

## Exemple complet

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