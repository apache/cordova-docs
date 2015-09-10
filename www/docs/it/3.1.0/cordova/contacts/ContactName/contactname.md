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

# ContactName

Contiene diversi tipi di informazioni circa un `Contact` nome dell'oggetto.

## Proprietà

*   **formattato**: il nome completo del contatto. *(DOMString)*

*   **familyName**: cognome del contatto. *(DOMString)*

*   **givenName**: nome del contatto. *(DOMString)*

*   **middleName**: il nome del contatto medio. *(DOMString)*

*   **honorificPrefix**: prefisso del contatto (esempio *Mr* o *Dr*) *(DOMString)*

*   **honorificSuffix**: suffisso del contatto (esempio *Esq.*). *(DOMString)*

## Dettagli

Il `ContactName` oggetto memorizza la proprietà del nome di un contatto.

## Piattaforme supportate

*   Android 2. x
*   BlackBerry WebWorks (OS 5.0 e superiori)
*   iOS
*   Windows Phone 7 e 8
*   Windows 8

## Esempio rapido

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
    
    function onError(<a href="../parameters/contactError.html">contactError</a>) {
        alert('onError!');
    };
    
    var options = new <a href="../ContactFindOptions/contactfindoptions.html">ContactFindOptions</a>();
    options.filter = "";
    filter = ["displayName", "name"];
    navigator.<a href="../contacts.find.html">contacts.find</a>(filter, onSuccess, onError, options);
    

## Esempio completo

    <!DOCTYPE html>
    <html>
      <head>
        <title>Contact <a href="../../storage/storage.opendatabase.html">Example</a></title>
    
        <script type="text/javascript" charset="utf-8" src="cordova.js"></script>
        <script type="text/javascript" charset="utf-8">
    
        // Wait for device API libraries to load
        //
        document.<a href="../../inappbrowser/inappbrowser.html">addEventListener</a>("<a href="../../events/events.deviceready.html">deviceready</a>", onDeviceReady, false);
    
        // device APIs are available
        //
        function onDeviceReady() {
            var options = new <a href="../ContactFindOptions/contactfindoptions.html">ContactFindOptions</a>();
            options.filter="";
            filter = ["displayName","name"];
            navigator.<a href="../contacts.find.html">contacts.find</a>(filter, onSuccess, onError, options);
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
        function onError(<a href="../parameters/contactError.html">contactError</a>) {
            alert('onError!');
        }
    
        </script>
      </head>
      <body>
        <h1><a href="../../storage/storage.opendatabase.html">Example</a></h1>
        <p>Find Contacts</p>
      </body>
    </html>
    

## Stranezze Android

*   **formattato**: parzialmente supportati e di sola lettura. Restituisce una concatenazione di `honorificPrefix` , `givenName` , `middleName` , `familyName` , e`honorificSuffix`.

## Stranezze di blackBerry WebWorks (OS 5.0 e superiori)

*   **formattato**: parzialmente supportati. Restituisce una concatenazione di campi **firstName** e **lastName** BlackBerry.

*   **familyName**: supportato. Archiviato in campo **lastName** BlackBerry.

*   **givenName**: supportato. Archiviato in campo **firstName** BlackBerry.

*   **middleName**: non supportato, restituendo`null`.

*   **honorificPrefix**: non supportato, restituendo`null`.

*   **honorificSuffix**: non supportato, restituendo`null`.

## iOS stranezze

*   **formattato**: parzialmente supportati. Restituisce il nome composito di iOS, ma è di sola lettura.