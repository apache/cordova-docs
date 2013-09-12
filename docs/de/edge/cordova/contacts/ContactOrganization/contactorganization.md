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

# ContactOrganization

Enthält eine `Contact` Organisation Objekteigenschaften.

## Eigenschaften

*   **Pref**: Legen Sie auf `true` Wenn dieses `ContactOrganization` des Benutzers bevorzugten Wert enthält. *(boolesch)*

*   **Typ**: eine Zeichenfolge, die angibt, welche Art von Feld in diesem *Hause* zum Beispiel. _(DOMString)

*   **Name**: der Name der Organisation. *(DOM-String und enthält)*

*   **Abteilung**: die Abteilung, die der Vertrag für arbeitet. *(DOM-String und enthält)*

*   **Titel**: Titel des Kontakts in der Organisation. *(DOM-String und enthält)*

## Informationen

Das `ContactOrganization` -Objekt speichert Organisationseigenschaften eines Kontakts. A `Contact` -Objekt speichert eine oder mehrere `ContactOrganization` Objekte in einem Array.

## Unterstützte Plattformen

*   Android
*   BlackBerry WebWorks (OS 5.0 und höher)
*   iOS
*   Windows Phone 7 und 8
*   Windows 8

## Kleines Beispiel

    function onSuccess(contacts) {
        for (var i = 0; i < contacts.length; i++) {
            for (var j = 0; j < contacts[i].organizations.length; j++) {
                alert("Pref: "      + contacts[i].organizations[j].pref       + "\n" +
                    "Type: "        + contacts[i].organizations[j].type       + "\n" +
                    "Name: "        + contacts[i].organizations[j].name       + "\n" +
                    "Department: "  + contacts[i].organizations[j].department + "\n" +
                    "Title: "       + contacts[i].organizations[j].title);
            }
        }
    };
    
    function onError(contactError) {
        alert('onError!');
    };
    
    var options = new ContactFindOptions();
    options.filter = "";
    filter = ["displayName", "organizations"];
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
            var options = new ContactFindOptions();
            options.filter="";
            filter = ["displayName","organizations"];
            navigator.contacts.find(filter, onSuccess, onError, options);
        }
    
        // onSuccess: Get a snapshot of the current contacts
        //
        function onSuccess(contacts) {
            for (var i = 0; i < contacts.length; i++) {
                for (var j = 0; j < contacts[i].organizations.length; j++) {
                    alert("Pref: "     + contacts[i].organizations[j].pref       + "\n" +
                        "Type: "       + contacts[i].organizations[j].type       + "\n" +
                        "Name: "       + contacts[i].organizations[j].name       + "\n" +
                        "Department: " + contacts[i].organizations[j].department + "\n" +
                        "Title: "      + contacts[i].organizations[j].title);
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

*   **Pref**: von Android 2.X-Geräte, Rückgabe nicht unterstützt`false`.

## BlackBerry WebWorks (OS 5.0 und höher) Macken

*   **Pref**: von BlackBerry-Geräten zurückgeben nicht unterstützt`false`.

*   **Typ**: von BlackBerry-Geräten zurückgeben nicht unterstützt`null`.

*   **Name**: teilweise unterstützt. Der Name der ersten Organisation wird im Feld **Firma** BlackBerry gespeichert.

*   **Abteilung**: nicht unterstützt, Rückgabe`null`.

*   **Titel**: teilweise unterstützt. Der erste Titel der Organisation wird im Feld **JobTitle** BlackBerry gespeichert.

## iOS Macken

*   **Pref**: iOS-Geräten, Rückgabe nicht unterstützt`false`.

*   **Typ**: iOS-Geräten, Rückgabe nicht unterstützt`null`.

*   **Name**: teilweise unterstützt. Der Name der ersten Organisation wird im Feld **kABPersonOrganizationProperty** iOS gespeichert.

*   **Abteilung**: teilweise unterstützt. Die Abteilungsnamen der erste ist im Feld **kABPersonDepartmentProperty** iOS gespeichert.

*   **Titel**: teilweise unterstützt. Der erste Titel wird im Feld **kABPersonJobTitleProperty** iOS gespeichert.