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

Contient les propriétés de l'adresse pour un objet `Contact`.

## Propriétés

*   **pref** : la valeur `true` si `ContactAddress` contient la valeur de préférence de l'utilisateur. *(booléen)*

*   **type** : une chaîne qui indique le type de champ, *maison* par exemple. *(DOMString)*

*   **formatted** : l'adresse complète formattée pour l'affichage. *(DOMString)*

*   **streetAddress** : l'adresse complète. *(DOMString)*

*   **locality** : la ville ou la localité. *(DOMString)*

*   **region** : l'État ou la région. *(DOMString)*

*   **postalCode** : le code zip ou code postal. *(DOMString)*

*   **country** : le nom du pays. *(DOMString)*

## Détails

L'objet `ContactAddress` stocke les propriétés d'une seule adresse d'un contact. Un objet `Contact` peut inclure plusieurs adresses dans un tableau `ContactAddress[]`.

## Plates-formes prises en charge

*   Android
*   BlackBerry WebWorks (OS 5.0 et plus)
*   iOS
*   Windows Phone 7 et 8
*   Windows 8

## Petit exemple

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
    

## Spécificités Android 2.X

*   **pref** : non pris en charge, retourne `false` sur les appareils Android 2.X.

## Spécificités BlackBerry WebWorks (OS 5.0 et plus)

*   **pref** : non pris en charge sur les appareils BlackBerry, retourne `false`.

*   **type** : partiellement pris en charge. Seulement un des types d'adresse *Work* et *Home* peut être stocké par contact.

*   **formatted** : partiellement pris en charge. Retourne la concaténation de tous les champs d'adresse BlackBerry.

*   **streetAddress** : pris en charge. Retourne la concaténation des champs d'adresse BlackBerry **address1** et **address2**.

*   **locality** : prise en charge. Stockée dans le champ d'adresse BlackBerry **city** .

*   **region** : pris en charge. Stockée dans le champ d'adresse BlackBerry **stateProvince** .

*   **postalCode** : prise en charge. Stockée dans le champ d'adresse BlackBerry **zipPostal** .

*   **country** : prise en charge.

## Spécificités iOS

*   **pref** : non pris en charge sur les appareils iOS, retourne `false`.

*   **formatted** : actuellement non pris en charge.