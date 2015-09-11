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

Enthält verschiedene Arten von Informationen über ein `Contact` Name des Objekts.

## Eigenschaften

*   **formatiert**: den vollständigen Namen des <a href="../Contact/contact.html">Kontakt</a>s. *(DOM-String und enthält)*

*   **Nachname**: Familienname des <a href="../Contact/contact.html">Kontakt</a>s. *(DOM-String und enthält)*

*   **GivenName**: Given Name des <a href="../contacts.html"><a href="../Contact/contact.html">Kontakt</a>e</a>s. *(DOM-String und enthält)*

*   **MiddleName**: Middle Name des <a href="../contacts.html"><a href="../Contact/contact.html">Kontakt</a>e</a>s. *(DOM-String und enthält)*

*   **HonorificPrefix**: der <a href="../Contact/contact.html">Kontakt</a>-Präfix (z.B. *Mr.* oder *Dr.*) *(DOM-String und enthält)*

*   **HonorificSuffix**: der <a href="../Contact/contact.html">Kontakt</a>-Suffix (Beispiel *Esq.*). *(DOM-String und enthält)*

## Informationen

Das `ContactName` -Objekt speichert Namenseigenschaften eines <a href="../Contact/contact.html">Kontakt</a>s.

## Unterstützte Plattformen

*   Android 2.X
*   BlackBerry WebWorks (OS 5.0 und höher)
*   iOS
*   Windows Phone 7 und 8
*   Windows 8

## Kleines Beispiel

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
    

## Vollständiges Beispiel

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
    

## Android Macken

*   **formatiert**: teilweise unterstützte "und" Read-only. Gibt eine Verkettung von `honorificPrefix` , `givenName` , `middleName` , `familyName` , und`honorificSuffix`.

## BlackBerry WebWorks (OS 5.0 und höher) Macken

*   **formatiert**: teilweise unterstützt. Gibt eine Verkettung von BlackBerry- **FirstName** und **LastName** -Feldern.

*   **Nachname**: unterstützt. Im Feld der BlackBerry- **Nachname** gespeichert.

*   **GivenName**: unterstützt. Im BlackBerry **FirstName** -Feld gespeichert.

*   **MiddleName**: nicht unterstützt, Rückgabe`null`.

*   **HonorificPrefix**: nicht unterstützte, Rückgabe`null`.

*   **HonorificSuffix**: nicht unterstützte, Rückgabe`null`.

## iOS Macken

*   **formatiert**: teilweise unterstützt. IOS zusammengesetzten Namen gibt, aber ist schreibgeschützt.