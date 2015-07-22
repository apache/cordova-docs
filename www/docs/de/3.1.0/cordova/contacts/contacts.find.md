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

Fragt die Gerät-Kontakte-Datenbank und gibt eine oder mehrere `Contact` Objekte, die jeweils angegebenen Felder.

    navigator.contacts.find(contactFields, contactSuccess, contactError, contactFindOptions);
    

## Beschreibung

Die `contacts.find` Methode wird asynchron ausgeführt, Abfragen der Gerät-Kontakte-Datenbank und gibt ein Array von `Contact` Objekten. Die resultierenden Objekte werden an übergeben die `contactSuccess` Callback-Funktion, die durch den **ContactSuccess** -Parameter angegeben.

Der Parameter **ContactFields** gibt die Felder als Qualifizierer Suche verwendet werden, und nur die Ergebnisse an die **ContactSuccess** -Callback-Funktion übergeben werden. Ein leere **ContactFields** -Parameter ist ungültig und führt zu `ContactError.INVALID_ARGUMENT_ERROR` . **ContactFields** der Wert `"*"` gibt alle Kontaktfelder.

Die **contactFindOptions.filter** -Zeichenfolge kann als einen Suchfilter verwendet, wenn die Kontaktdatenbank Abfragen. Wenn angeboten, ein case-insensitive, wird jedes Feld in der **ContactFields** -Parameter angegebenen Teilwert Übereinstimmung. Wenn eine Übereinstimmung für *alle* angegebenen Felder vorliegt, wird der Kontakt zurückgegeben.

## Parameter

*   **ContactFields**: Kontaktfelder als Qualifizierer Suche verwenden. Die daraus resultierende `Contact` Objekt verfügt nur über Werte für diese Felder. *(DOMString[])* [Erforderlich]

*   **ContactSuccess**: Erfolg-Callback-Funktion aufgerufen, mit den Kontakten, die von der Datenbank zurückgegebenen. [Erforderlich]

*   **ContactError**: Fehler-Callback-Funktion wird aufgerufen, wenn ein Fehler auftritt. [Optional]

*   **ContactFindOptions**: Optionen zum Filtern von Kontakten zu suchen. [Optional]

## Unterstützte Plattformen

*   Android
*   BlackBerry WebWorks (OS 5.0 und höher)
*   iOS
*   Windows Phone 7 und 8
*   Windows 8

## Kleines Beispiel

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
    

## Vollständiges Beispiel

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