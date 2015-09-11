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

Fragt die <a href="../device/device.html">Gerät</a>-<a href="contacts.html"><a href="Contact/contact.html">Kontakt</a>e</a>-<a href="../storage/database/database.html">Datenbank</a> und gibt eine oder mehrere `Contact` Objekte, die jeweils angegebenen Felder.

    navigator.contacts.find(<a href="parameters/contactFields.html">contactFields</a>, <a href="parameters/contactSuccess.html">contactSuccess</a>, <a href="parameters/contactError.html">contactError</a>, <a href="parameters/contactFindOptions.html">contactFindOptions</a>);
    

## Beschreibung

Die `contacts.find` Methode wird asynchron ausgeführt, Abfragen der <a href="../device/device.html">Gerät</a>-<a href="contacts.html"><a href="Contact/contact.html">Kontakt</a>e</a>-<a href="../storage/database/database.html">Datenbank</a> und gibt ein Array von `Contact` Objekten. Die resultierenden Objekte werden an übergeben die `<a href="parameters/contactSuccess.html">contactSuccess</a>` Callback-Funktion, die durch den **ContactSuccess** -Parameter angegeben.

Der Parameter **<a href="ContactField/contactfield.html">ContactField</a>s** gibt die Felder als Qualifizierer Suche verwendet werden, und nur die Ergebnisse an die **ContactSuccess** -Callback-Funktion übergeben werden. Ein leere **<a href="ContactField/contactfield.html">ContactField</a>s** -Parameter ist ungültig und führt zu `<a href="ContactError/<a href="parameters/contactError.html">contactError</a>.html">ContactError</a>.INVALID_ARGUMENT_ERROR` . **<a href="ContactField/contactfield.html">ContactField</a>s** der Wert `"*"` gibt alle <a href="Contact/contact.html">Kontakt</a>felder.

Die **<a href="parameters/contactFindOptions.html">contactFindOptions</a>.filter** -Zeichenfolge kann als einen Suchfilter verwendet, wenn die <a href="Contact/contact.html">Kontakt</a>datenbank Abfragen. Wenn angeboten, ein case-insensitive, wird jedes Feld in der **<a href="ContactField/contactfield.html">ContactField</a>s** -Parameter angegebenen Teilwert Übereinstimmung. Wenn eine Übereinstimmung für *alle* angegebenen Felder vorliegt, wird der <a href="Contact/contact.html">Kontakt</a> zurückgegeben.

## Parameter

*   **<a href="ContactField/contactfield.html">ContactField</a>s**: <a href="Contact/contact.html">Kontakt</a>felder als Qualifizierer Suche verwenden. Die daraus resultierende `Contact` Objekt verfügt nur über Werte für diese Felder. *(DOMString[])* [Erforderlich]

*   **ContactSuccess**: Erfolg-Callback-Funktion aufgerufen, mit den <a href="contacts.html"><a href="Contact/contact.html">Kontakt</a>e</a>n, die von der <a href="../storage/database/database.html">Datenbank</a> zurückgegebenen. [Erforderlich]

*   **<a href="ContactError/<a href="parameters/contactError.html">contactError</a>.html">ContactError</a>**: Fehler-Callback-Funktion wird aufgerufen, wenn ein Fehler auftritt. [Optional]

*   **<a href="ContactFindOptions/contactfindoptions.html">ContactFindOptions</a>**: Optionen zum Filtern von <a href="contacts.html"><a href="Contact/contact.html">Kontakt</a>e</a>n zu suchen. [Optional]

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
    
    function onError(<a href="parameters/contactError.html">contactError</a>) {
        alert('onError!');
    };
    
    // find all contacts with 'Bob' in any name field
    var options      = new <a href="ContactFindOptions/contactfindoptions.html">ContactFindOptions</a>();
    options.filter   = "Bob";
    options.multiple = true;
    var fields       = ["displayName", "name"];
    navigator.contacts.find(fields, onSuccess, onError, options);
    

## Vollständiges Beispiel

    <!DOCTYPE html>
    <html>
        <head>
            <title>Contact <a href="../storage/storage.opendatabase.html">Example</a></title>
            <script type="text/javascript" charset="utf-8" src="cordova.js"></script>
            <script type="text/javascript" charset="utf-8">
    
                // Wait for device API libraries to load
                document.<a href="../inappbrowser/inappbrowser.html">addEventListener</a>("<a href="../events/events.deviceready.html">deviceready</a>", onDeviceReady, false);
    
                // device APIs are available
    
                function onDeviceReady() {
                    // find all contacts with 'Bob' in any name field
                    var options = new <a href="ContactFindOptions/contactfindoptions.html">ContactFindOptions</a>();
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
            <p>Find Contacts</p>
        </body>
    </html>