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

Interroge la base de données de contacts de l'appareil et renvoie un ou plusieurs objet `<a href="Contact/contact.html">Contact</a>`, chacun contenant les champs spécifiés.

    navigator.contacts.find(<a href="parameters/contactFields.html">contactFields</a>, <a href="parameters/contactSuccess.html">contactSuccess</a>, <a href="parameters/contactError.html">contactError</a>, <a href="parameters/contactFindOptions.html">contactFindOptions</a>);
    

## Description

La méthode `contacts.find` s'exécute de façon asynchrone, interrogeant la base de données de contacts de l'appareil et retournant un tableau d'objets `<a href="Contact/contact.html">Contact</a>`. Les objets retournés sont passés à la fonction de callback `<a href="parameters/contactSuccess.html">contactSuccess</a>` spécifiée par le paramètre **<a href="parameters/contactSuccess.html">contactSuccess</a>** .

Le paramètre **<a href="parameters/contactFields.html">contactFields</a>** spécifie les champs à utiliser comme un qualificateur de recherche, et seulement ces résultats sont passés à la fonction de callback **<a href="parameters/contactSuccess.html">contactSuccess</a>**. Un paramètre de longueur nulle **<a href="parameters/contactFields.html">contactFields</a>** n'est pas valide et provoque une erreur `<a href="Contact/contact.html">Contact</a>Error.INVALID_ARGUMENT_ERROR`. Une valeur de **<a href="parameters/contactFields.html">contactFields</a>** de `"*"` retourne les champs de tout contact.

La chaîne **<a href="parameters/contactFindOptions.html">contactFindOptions</a>.filter** peut être utilisée comme un filtre de recherche lorsque vous interrogez la base de données de contacts. Si fourni, une valeur insensible à la casse et partiellement correspondante est appliquée à chaque champ spécifié dans le paramètre **<a href="parameters/contactFields.html">contactFields</a>**. S'il y a une correspondance pour *n'importe lequel* des champs spécifiés, le contact est retourné.

## Paramètres

*   **<a href="parameters/contactFields.html">contactFields</a>** : champs du <a href="Contact/contact.html">Contact</a> à utiliser comme un qualificateur de recherche. L'objet `<a href="Contact/contact.html">Contact</a>` retourné dispose seulement des valeurs pour ces champs. *(DOMString[])* [Obligatoire]

*   **<a href="parameters/contactSuccess.html">contactSuccess</a>**: fonction de callback de succès appelée avec les contacts retournés par la base de données. [Obligatoire]

*   **<a href="parameters/contactError.html">contactError</a>** : fonction de callback d'erreur, appelée lorsqu'une erreur se produit. [Facultatif]

*   **<a href="parameters/contactFindOptions.html">contactFindOptions</a>** : options de recherche pour filtrer les contacts. [Facultatif]

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
    
    function onError(<a href="parameters/contactError.html">contactError</a>) {
        alert('onError!');
    };
    
    // find all contacts with 'Bob' in any name field
    var options      = new <a href="Contact/contact.html">Contact</a>FindOptions();
    options.filter   = "Bob";
    options.multiple = true;
    var fields       = ["displayName", "name"];
    navigator.contacts.find(fields, onSuccess, onError, options);
    

## Exemple complet

    <!DOCTYPE html>
    <html>
        <head>
            <title><a href="Contact/contact.html">Contact</a> <a href="../storage/storage.opendatabase.html">Example</a></title>
            <script type="text/javascript" charset="utf-8" src="cordova.js"></script>
            <script type="text/javascript" charset="utf-8">
    
                // Wait for device API libraries to load
                document.<a href="../inappbrowser/inappbrowser.html">addEventListener</a>("<a href="../events/events.deviceready.html">deviceready</a>", onDeviceReady, false);
    
                // device APIs are available
    
                function onDeviceReady() {
                    // find all contacts with 'Bob' in any name field
                    var options = new <a href="Contact/contact.html">Contact</a>FindOptions();
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
            <p>Find <a href="Contact/contact.html">Contact</a>s</p>
        </body>
    </html>