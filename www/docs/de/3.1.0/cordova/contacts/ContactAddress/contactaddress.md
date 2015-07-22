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

Enthält Eigenschaften für ein `Contact` Objekt.

## Eigenschaften

*   **Pref**: Legen Sie auf `true` Wenn dieses `ContactAddress` des Benutzers bevorzugten Wert enthält. *(boolesch)*

*   **Typ**: eine Zeichenfolge, die angibt, welche Art von Feld in diesem *Hause* zum Beispiel. *(DOM-String und enthält)*

*   **formatiert**: die vollständige Adresse, die für die Anzeige formatiert. *(DOM-String und enthält)*

*   **StreetAddress**: die vollständige Postanschrift. *(DOM-String und enthält)*

*   **Ort**: die Stadt oder Gemeinde. *(DOM-String und enthält)*

*   **Region**: dem Staat oder der Region. *(DOM-String und enthält)*

*   **Postleitzahl**: die Postleitzahl oder Postleitzahl. *(DOM-String und enthält)*

*   **Land**: den Ländernamen. *(DOM-String und enthält)*

## Informationen

Das `ContactAddress` -Objekt speichert die Eigenschaften einer einzelnen Adresse eines Kontakts. A `Contact` Objekt gehören mehr als eine Adresse in ein `ContactAddress[]` Array.

## Unterstützte Plattformen

*   Android
*   BlackBerry WebWorks (OS 5.0 und höher)
*   iOS
*   Windows Phone 7 und 8
*   Windows 8

## Kleines Beispiel

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
    

## Vollständiges Beispiel

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
    

## Android 2.X Macken

*   **Pref**: nicht unterstützt, Rückkehr `false` auf Android 2.X Geräten.

## BlackBerry WebWorks (OS 5.0 und höher) Macken

*   **Pref**: BlackBerry-Geräten, Rückgabe nicht unterstützt`false`.

*   **Typ**: teilweise unterstützt. Nur eine *Arbeit* und *Home* Typ Adressen kann pro Kontakt gespeichert werden.

*   **formatiert**: teilweise unterstützt. Gibt eine Verkettung von allen BlackBerry-Adressfelder.

*   **StreetAddress**: unterstützt. Gibt eine Verkettung von BlackBerry **Adresse1** und **Adresse2** Adressfelder.

*   **Ort**: unterstützt. Gespeichert in BlackBerry **Stadt** Adressfeld.

*   **Region**: unterstützt. Gespeichert in BlackBerry **StateProvince** Adressfeld.

*   **Postleitzahl**: unterstützt. Im Feld für die Adresse des BlackBerry- **ZipPostal** gespeichert.

*   **Land**: unterstützt.

## iOS Macken

*   **Pref**: iOS-Geräten, Rückgabe nicht unterstützt`false`.

*   **formatiert**: derzeit nicht unterstützt.