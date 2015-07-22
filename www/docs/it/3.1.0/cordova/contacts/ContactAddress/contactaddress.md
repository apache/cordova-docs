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

Contiene le proprietà di indirizzo per un `Contact` oggetto.

## Proprietà

*   **pref**: impostare su `true` se questo `ContactAddress` contiene il valore preferito dell'utente. *(booleano)*

*   **tipo**: una stringa che indica il tipo di campo è, *casa* ad esempio. *(DOMString)*

*   **formattato**: indirizzo completo formattato per la visualizzazione. *(DOMString)*

*   **streetAddress**: l'indirizzo completo. *(DOMString)*

*   **località**: la città o località. *(DOMString)*

*   **regione**: lo stato o la regione. *(DOMString)*

*   **postalCode**: il codice postale o il codice postale. *(DOMString)*

*   **paese**: il nome del paese. *(DOMString)*

## Dettagli

Il `ContactAddress` oggetto memorizza le proprietà di un singolo indirizzo di un contatto. A `Contact` oggetto può includere più di un indirizzo in un `ContactAddress[]` matrice.

## Piattaforme supportate

*   Android
*   BlackBerry WebWorks (OS 5.0 e superiori)
*   iOS
*   Windows Phone 7 e 8
*   Windows 8

## Esempio rapido

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
    

## Esempio completo

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
    

## Stranezze di Android 2. x

*   **pref**: non supportato, tornando `false` su dispositivi Android 2. x.

## Stranezze di blackBerry WebWorks (OS 5.0 e superiori)

*   **pref**: non è supportato sui dispositivi BlackBerry, restituendo`false`.

*   **tipo**: parzialmente supportati. Solo uno di *lavoro* e *casa* tipo indirizzi può essere memorizzato per ciascun contatto.

*   **formattato**: parzialmente supportati. Restituisce una concatenazione di tutti i campi Indirizzo BlackBerry.

*   **streetAddress**: supportato. Restituisce una concatenazione di BlackBerry **Indirizzo1** e **Indirizzo2** campi indirizzo.

*   **località**: supportato. Memorizzato nel campo indirizzo **città** di BlackBerry.

*   **regione**: supportato. Memorizzato nel campo indirizzo di **stateProvince** BlackBerry.

*   **postalCode**: supportato. Memorizzato nel campo dell'indirizzo **zipPostal** BlackBerry.

*   **paese**: supportato.

## iOS stranezze

*   **pref**: non è supportato sui dispositivi iOS, restituendo`false`.

*   **formattato**: attualmente non supportati.