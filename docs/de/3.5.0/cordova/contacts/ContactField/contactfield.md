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

# ContactField

Unterstützt generische Felder in ein `Contact` Objekt. Einige Eigenschaften gespeichert als `ContactField` Objekten gehören e-Mail-Adressen, Telefonnummern und URLs.

## Eigenschaften

*   **Typ**: eine Zeichenfolge, die angibt, welche Art von Feld in diesem *Hause* zum Beispiel. *(DOM-String und enthält)*

*   **Wert**: der Wert des Feldes, wie z. B. eine Telefonnummer oder e-Mail-Adresse. *(DOM-String und enthält)*

*   **Pref**: Legen Sie auf `true` Wenn dieses `ContactField` des Benutzers bevorzugten Wert enthält. *(boolesch)*

## Informationen

Das `ContactField` -Objekt ist eine wieder verwendbare Komponenten stellt Felder generisch kontaktieren. Jeder `ContactField` -Objekt enthält eine `value` , `type` , und `pref` Eigenschaft. A `Contact` -Objekt speichert mehrere Eigenschaften in `ContactField[]` -Arrays, wie Telefon-Nummern und e-Mail-Adressen.

In den meisten Fällen gibt es keine vorher festgelegten Werte für ein `ContactField` **Typ** -Attribut des Objekts. Beispielsweise kann eine Telefonnummer angeben, **Werte von *Zuhause*, *arbeiten*, *mobile*, *iPhone*oder ein beliebiger anderer Wert, der von einem bestimmten Geräteplattform Kontaktdatenbank unterstützt wird** . Jedoch für die `Contact` **Fotos** Feld, das **Typ** -Feld gibt das Format des zurückgegebenen Bild: **Url** wenn das **Value** -Attribut eine URL zu dem Foto Bild oder *base64* , enthält Wenn der **Wert** eine base64-codierte Bild-Zeichenfolge enthält. 

## Unterstützte Plattformen

*   Android
*   BlackBerry WebWorks (OS 5.0 und höher)
*   iOS
*   Windows Phone 7 und 8
*   Windows 8

## Kleines Beispiel

        // create a new contact
        var contact = navigator.contacts.create();
    
        // store contact phone numbers in ContactField[]
        var phoneNumbers = [];
        phoneNumbers[0] = new ContactField('work', '212-555-1234', false);
        phoneNumbers[1] = new ContactField('mobile', '917-555-5432', true); // preferred number
        phoneNumbers[2] = new ContactField('home', '203-555-7890', false);
        contact.phoneNumbers = phoneNumbers;
    
        // save the contact
        contact.save();
    

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
            // create a new contact
            var contact = navigator.contacts.create();
    
            // store contact phone numbers in ContactField[]
            var phoneNumbers = [];
            phoneNumbers[0] = new ContactField('work', '212-555-1234', false);
            phoneNumbers[1] = new ContactField('mobile', '917-555-5432', true); // preferred number
            phoneNumbers[2] = new ContactField('home', '203-555-7890', false);
            contact.phoneNumbers = phoneNumbers;
    
            // save the contact
            contact.save();
    
            // search contacts, returning display name and phone numbers
            var options = new ContactFindOptions();
            options.filter = "";
            filter = ["displayName", "phoneNumbers"];
            navigator.contacts.find(filter, onSuccess, onError, options);
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
    

## Android Macken

*   **Pref**: nicht unterstützt, Rückgabe`false`.

## BlackBerry WebWorks (OS 5.0 und höher) Macken

*   **Typ**: teilweise unterstützt. Für Telefonnummern verwendet.

*   **Wert**: unterstützt.

*   **Pref**: nicht unterstützt, Rückgabe`false`.

## iOS Macken

*   **Pref**: nicht unterstützt, Rückgabe`false`.