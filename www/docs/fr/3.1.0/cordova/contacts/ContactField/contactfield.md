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

# <a href="../Contact/contact.html">Contact</a>Field

Prend en charge les champs génériques dans un objet `<a href="../Contact/contact.html">Contact</a>`. Certaines propriétés stockées comme objets `<a href="../Contact/contact.html">Contact</a>Field` incluent des adresses e-mail, numéros de téléphone et URL.

## Propriétés

*   **type** : une chaîne qui indique le type de champ, *home* par exemple. *(DOMString)*

*   **value** : la valeur du champ, comme un téléphone numéro ou adresse e-mail. *(DOMString)*

*   **pref** : la valeur `true` si `<a href="../Contact/contact.html">Contact</a>Field` contient la valeur de préférence de l'utilisateur. *(booléen)*

## Détails

L'objet `<a href="../Contact/contact.html">Contact</a>Field` est un composant réutilisable que représente un champ de contact générique. Chaque objet `<a href="../Contact/contact.html">Contact</a>Field` contient une propriété `value` , `type` , et `pref`. Un objet `<a href="../Contact/contact.html">Contact</a>` stocke plusieurs propriétés dans les tableaux `<a href="../Contact/contact.html">Contact</a>Field[]`, tels que les numéros de téléphone et adresses e-mail.

Dans la plupart des cas, il n'y a pas de valeurs prédéterminées pour un attribut **type** de l'objet `<a href="../Contact/contact.html">Contact</a>Field`. Par exemple, un numéro de téléphone peut spécifier des valeurs pour **type** comme *home*, *work*, *mobile*, *iPhone*, ou toute autre valeur qui est prise en charge par la base de contacts de la plate-forme d'un appareil particulier. Toutefois, pour le champ **photos** de `<a href="../Contact/contact.html">Contact</a>` , le champ **type** indique le format de l'image retournée : **url** lorsque l'attribut **value** contient une URL vers la photo ou *base64* lorsque la **valeur** contient une chaîne d'image codée en base64. 

## Plates-formes prises en charge

*   Android
*   BlackBerry WebWorks (OS 5.0 et plus)
*   iOS
*   Windows Phone 7 et 8
*   Windows 8

## Petit exemple

        // create a new contact
        var contact = navigator.contacts.create();
    
        // store contact phone numbers in <a href="../Contact/contact.html">Contact</a>Field[]
        var phoneNumbers = [];
        phoneNumbers[0] = new <a href="../Contact/contact.html">Contact</a>Field('work', '212-555-1234', false);
        phoneNumbers[1] = new <a href="../Contact/contact.html">Contact</a>Field('mobile', '917-555-5432', true); // preferred number
        phoneNumbers[2] = new <a href="../Contact/contact.html">Contact</a>Field('home', '203-555-7890', false);
        contact.phoneNumbers = phoneNumbers;
    
        // save the contact
        contact.save();
    

## Exemple complet

    <!DOCTYPE html>
    <html>
      <head>
        <title><a href="../Contact/contact.html">Contact</a> <a href="../../storage/storage.opendatabase.html">Example</a></title>
    
        <script type="text/javascript" charset="utf-8" src="cordova.js"></script>
        <script type="text/javascript" charset="utf-8">
    
        // Wait for device API libraries to load
        //
        document.<a href="../../inappbrowser/inappbrowser.html">addEventListener</a>("<a href="../../events/events.deviceready.html">deviceready</a>", onDeviceReady, false);
    
        // device APIs are available
        //
    
        function onDeviceReady() {
            // create a new contact
            var contact = navigator.contacts.create();
    
            // store contact phone numbers in <a href="../Contact/contact.html">Contact</a>Field[]
            var phoneNumbers = [];
            phoneNumbers[0] = new <a href="../Contact/contact.html">Contact</a>Field('work', '212-555-1234', false);
            phoneNumbers[1] = new <a href="../Contact/contact.html">Contact</a>Field('mobile', '917-555-5432', true); // preferred number
            phoneNumbers[2] = new <a href="../Contact/contact.html">Contact</a>Field('home', '203-555-7890', false);
            contact.phoneNumbers = phoneNumbers;
    
            // save the contact
            contact.save();
    
            // search contacts, returning display name and phone numbers
            var options = new <a href="../Contact/contact.html">Contact</a>FindOptions();
            options.filter = "";
            filter = ["displayName", "phoneNumbers"];
            navigator.<a href="../contacts.find.html">contacts.find</a>(filter, onSuccess, onError, options);
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
        function onError(<a href="../parameters/contactError.html">contactError</a>) {
            alert('onError!');
        }
    
        </script>
      </head>
      <body>
        <h1><a href="../../storage/storage.opendatabase.html">Example</a></h1>
        <p>Find <a href="../Contact/contact.html">Contact</a>s</p>
      </body>
    </html>
    

## Spécificités Android

*   **pref** : nonpas pris en charge, retourne `false`.

## Spécificités BlackBerry WebWorks (OS 5.0 et plus)

*   **type** : partiellement pris en charge. Utilisé pour les numéros de téléphone.

*   **valeur** : pris en charge.

*   **pref** : non pris en charge, retourne `false`.

## Spécificités iOS

*   **pref** : non pris en charge, retourne `false`.