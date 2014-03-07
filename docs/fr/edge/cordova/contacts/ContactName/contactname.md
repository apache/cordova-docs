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

Contient différents types d'informations sur le nom d'un objet `Contact`.

## Propriétés

*   **mise en forme** : le nom complet du contact. *(DOMString)*

*   **familyName** : nom de famille du contact. *(DOMString)*

*   **givenName** : prénom du contact. *(DOMString)*

*   **middleName** : deuxième prénom du contact. *(DOMString)*

*   **honorificPrefix** : préfixe du contact (exemple *M.* ou *Mme*) *(DOMString)*

*   **honorificSuffix** : suffixe du contact (exemple *Esq.*). *(DOMString)*

## Détails

L'objet `ContactName` stocke les propriétés de nom d'un contact.

## Plates-formes prises en charge

*   Android 2.X
*   BlackBerry WebWorks (OS 5.0 et plus)
*   iOS
*   Windows Phone 7 et 8
*   Windows 8

## Petit exemple

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
    

## Exemple complet

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
    

## Spécificités Android

*   **formatted** : partiellement pris en charge et en lecture seule. Retourne la concaténation de `honorificPrefix` , `givenName` , `middleName` , `familyName` , et `honorificSuffix`.

## Spécificités BlackBerry WebWorks (OS 5.0 et plus)

*   **formatted** : partiellement pris en charge. Retourne la concaténation de champs **firstName** et **lastName** de BlackBerry.

*   **familyName** : prise en charge. Stockée dans le champ **lastName** BlackBerry.

*   **givenName** : prise en charge. Stockée dans le champ **firstName** BlackBerry.

*   **middleName** : non pris en charge, retourne `null`.

*   **honorificPrefix** : non pris en charge, retourne `null`.

*   **honorificSuffix** : non pris en charge, retourne `null`.

## Spécificités iOS

*   **formatted** : partiellement pris en charge. Retourne le nom composé iOS, mais est en lecture seule.