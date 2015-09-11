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

# Kontakt

Enthält Eigenschaften, die einen Kontakt, z. B. eines Benutzers persönlicher oder geschäftlicher Kontakt zu beschreiben.

## Eigenschaften

*   **ID**: einen globally unique Identifier. *(DOM-String und enthält)*

*   **DisplayName**: der Name dieses Kontakts, geeignet für die Anzeige an Endverbraucher. *(DOM-String und enthält)*

*   **Name**: ein Objekt, das alle Komponenten eines Personen-Namen enthält. *(Kontaktperson)*

*   **Nickname**: einen lässig ein, um den Kontakt zu adressieren. *(DOM-String und enthält)*

*   **Telefonnummern**: ein Array von der Kontakt-Telefonnummern. *(<a href="../ContactField/contactfield.html">ContactField</a>[])*

*   **Email**: ein Array von e-Mail-Adressen des Kontakts. *(<a href="../ContactField/contactfield.html">ContactField</a>[])*

*   **Adressen**: ein Array von allen Kontaktadressen. *(<a href="../ContactAddress/contactaddress.html">ContactAddress</a>[])*

*   **IMS**: ein Array von IM-Adressen des Kontakts. *(<a href="../ContactField/contactfield.html">ContactField</a>[])*

*   **Organisationen**: ein Array von Organisationen des Kontakts. *(<a href="../ContactOrganization/contactorganization.html">ContactOrganization</a>[])*

*   **Geburtstag**: der Geburtstag des Kontakts. *(Datum)*

*   **Anmerkung**: eine Anmerkung über den Kontakt. *(DOM-String und enthält)*

*   **Fotos**: ein Array mit den Kontakt-Fotos. *(<a href="../ContactField/contactfield.html">ContactField</a>[])*

*   **Kategorien**: ein Array mit allen benutzerdefinierten Kategorien zugeordnet den Kontakt. *(<a href="../ContactField/contactfield.html">ContactField</a>[])*

*   **URLs**: ein Array von Web-Seiten, die den Kontakt zugeordnet. *(<a href="../ContactField/contactfield.html">ContactField</a>[])*

## Methoden

*   **Klon**: gibt eine neue `Contact` Objekt, das eine tiefe Kopie des aufrufenden Objekts, mit der `id` -Eigenschaft festgelegt`null`.

*   **Entfernen**: entfernt den Kontakt aus der <a href="../../device/device.html">Gerät</a>-<a href="../contacts.html">Kontakte</a>-<a href="../../storage/database/database.html">Datenbank</a>, ansonsten führt eine Fehler-Callback mit einem `<a href="../ContactError/<a href="../parameters/contactError.html">contactError</a>.html">ContactError</a>` Objekt.

*   **<a href="../../storage/storage.html">Speicher</a>n**: speichert einen neuen Kontakt in der <a href="../../device/device.html">Gerät</a>edatenbank <a href="../contacts.html">Kontakte</a>, oder einen vorhandenen Kontakt aktualisiert, wenn ein Kontakt mit der gleichen **Id** bereits vorhanden ist.

## Informationen

Das `Contact` -Objekt repräsentiert einen Benutzer Kontakt. <a href="../contacts.html">Kontakte</a> können erstellt, gespeichert oder aus der <a href="../../device/device.html">Gerät</a>-<a href="../contacts.html">Kontakte</a>-<a href="../../storage/database/database.html">Datenbank</a> entfernt werden. <a href="../contacts.html">Kontakte</a> können auch abgerufen werden (einzeln oder als Gruppe) aus der <a href="../../storage/database/database.html">Datenbank</a> durch den Aufruf der `<a href="../contacts.find.html">contacts.find</a>` Methode.

**Hinweis:** Nicht alle oben aufgeführten Kontaktfelder sind auf jedem <a href="../../device/device.html">Gerät</a>eplattform unterstützt. Bitte überprüfen Sie jede Plattform *Quirks* Abschnitt für Details.

## Unterstützte Plattformen

*   Android
*   BlackBerry WebWorks (OS 5.0 und höher)
*   iOS
*   Windows Phone 7 und 8
*   Windows 8

## Kleines Beispiel zu speichern

    function onSuccess(contact) {
        alert("Save Success");
    };
    
    function onError(<a href="../parameters/contactError.html">contactError</a>) {
        alert("Error = " + <a href="../parameters/contactError.html">contactError</a>.code);
    };
    
    // create a new contact object
    var contact = navigator.contacts.create();
    contact.displayName = "Plumber";
    contact.nickname = "Plumber";            // specify both to support all devices
    
    // populate some fields
    var name = new <a href="../ContactName/contactname.html">ContactName</a>();
    name.givenName = "Jane";
    name.familyName = "Doe";
    contact.name = name;
    
    // save to device
    contact.save(onSuccess,onError);
    

## Kleines Beispiel zu klonen

        // clone the contact object
        var clone = contact.clone();
        clone.name.givenName = "John";
        console.log("Original contact name = " + contact.name.givenName);
        console.log("Cloned contact name = " + clone.name.givenName);
    

## Kleines Beispiel zu entfernen

    function onSuccess() {
        alert("Removal Success");
    };
    
    function onError(<a href="../parameters/contactError.html">contactError</a>) {
        alert("Error = " + <a href="../parameters/contactError.html">contactError</a>.code);
    };
    
        // remove the contact from the device
        contact.remove(onSuccess,onError);
    

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
            // create
            var contact = navigator.contacts.create();
            contact.displayName = "Plumber";
            contact.nickname = "Plumber";                 // specify both to support all devices
            var name = new <a href="../ContactName/contactname.html">ContactName</a>();
            name.givenName = "Jane";
            name.familyName = "Doe";
            contact.name = name;
    
            // save
            contact.save(onSaveSuccess,onSaveError);
    
            // clone
            var clone = contact.clone();
            clone.name.givenName = "John";
            console.log("Original contact name = " + contact.name.givenName);
            console.log("Cloned contact name = " + clone.name.givenName);
    
            // remove
            contact.remove(onRemoveSuccess,onRemoveError);
        }
    
        // onSaveSuccess: Get a snapshot of the current contacts
        //
        function onSaveSuccess(contact) {
            alert("Save Success");
        }
    
        // onSaveError: Failed to get the contacts
        //
        function onSaveError(<a href="../parameters/contactError.html">contactError</a>) {
            alert("Error = " + <a href="../parameters/contactError.html">contactError</a>.code);
        }
    
        // onRemoveSuccess: Get a snapshot of the current contacts
        //
        function onRemoveSuccess(contacts) {
            alert("Removal Success");
        }
    
        // onRemoveError: Failed to get the contacts
        //
        function onRemoveError(<a href="../parameters/contactError.html">contactError</a>) {
            alert("Error = " + <a href="../parameters/contactError.html">contactError</a>.code);
        }
    
        </script>
      </head>
      <body>
        <h1><a href="../../storage/storage.opendatabase.html">Example</a></h1>
        <p>Find Contacts</p>
      </body>
    </html>
    

## Android 2.X Macken

*   **Kategorien**: Android 2.X <a href="../../device/device.html">Gerät</a>en, Rückgabe nicht unterstützt`null`.

## BlackBerry WebWorks (OS 5.0 und höher) Macken

*   **ID**: unterstützt. Durch das <a href="../../device/device.html">Gerät</a> zugewiesen, wenn Sie den Kontakt zu speichern.

*   **DisplayName**: unterstützt. Im BlackBerry **user1** Feld gespeichert.

*   **Nickname**: nicht unterstützt, Rückgabe`null`.

*   **Telefonnummern**: teilweise unterstützt. Telefonnummern werden im BlackBerry Felder **homePhone1** und **homePhone2** gespeichert, wenn *Typ* "zu Hause", **workPhone1** und **workPhone2** wenn *Typ* 'Arbeit', **MobilePhone** wenn *Typ* 'mobile' ist, **FaxPhone** wenn *Typ* 'Fax', **PagerPhone** ist wenn *Typ* ist "Pager" und **wollte** , wenn *keines der obigen ist* .

*   **Email**: teilweise unterstützt. Die ersten drei e-Mail-Adressen werden in die BlackBerry- **mail1**, **e-mail2**und **email3** Felder, bzw. gespeichert.

*   **Adressen**: teilweise unterstützt. Die erste und zweite Adresse werden bzw. in die Felder **HomeAddress** und **WorkAddress** BlackBerry gespeichert.

*   **IMS**: nicht unterstützt, Rückgabe`null`.

*   **Organisationen**: teilweise unterstützt. Den **Namen** und den **Titel** der ersten Organisation werden in den Feldern **Firma** und **Titel** BlackBerry gespeichert.

*   **Fotos**: teilweise unterstützt. Ein einzelnes Foto der Miniaturansicht wird unterstützt. Legen Sie ein Kontakt-Foto, übergeben in einem entweder eine base64-codierte Bild oder eine URL auf das Bild zeigen. Das Bild wird vor dem <a href="../../storage/storage.html">Speicher</a>n der BlackBerry <a href="../contacts.html">Kontakte</a> <a href="../../storage/database/database.html">Datenbank</a> verkleinert. <a href="../contacts.html">Kontakte</a> Foto wird als base64-codierte Bild zurückgegeben.

*   **Kategorien**: teilweise unterstützt. Nur die Kategorien *Business* und *Personal* werden unterstützt.

*   **URLs**: teilweise unterstützt. Die erste URL wird in BlackBerry **Webseite** Feld gespeichert.

## iOS Macken

*   **DisplayName**: nicht auf iOS, Rückkehr unterstützt `null` es sei kein `<a href="../ContactName/contactname.html">ContactName</a>` angegeben, in welchem Fall es gibt den zusammengesetzten Namen, **Spitznamen** oder `""` bzw..

*   **Geburtstag**: muss eingegeben werden, als JavaScript `Date` Objekt, die gleiche Weise zurückgegeben wird.

*   **Fotos**: gibt einen <a href="../../file/fileobj/fileobj.html">Datei</a>-URL auf das Bild, das im temporären Verzeichnis der Anwendung gespeichert ist. Inhalt des temporären Verzeichnisses werden entfernt, wenn die Anwendung beendet wird.

*   **Kategorien**: Diese Eigenschaft wird derzeit nicht unterstützt, Rückgabe`null`.

## Windows Phone 7 und 8 Macken

*   **DisplayName**: Wenn Sie einen Kontakt erstellen, der Nutzen für den Anzeigenamen der Display-Name-Parameter unterscheidet abgerufen, wenn den Kontakt zu finden.

*   **URLs**: Wenn Sie einen Kontakt erstellen, können Benutzer eingegeben und mehrere Web-Adressen zu speichern, aber einzige steht ist verfügbar, wenn den Kontakt zu suchen.

*   **Telefonnummern**: die *Pref* -Option wird nicht unterstützt. Der *Typ* wird in eine *find* -Operation nicht unterstützt. Nur ein `phoneNumber` ist erlaubt für jeden *Typ*.

*   **Email**: *Pref* -Option wird nicht unterstützt. Haus und persönliche verweist auf dasselbe e-Mail-Eintrag. Nur ein Eintrag ist für jeden *Typ* zulässig..

*   **Adressen**: unterstützt nur Arbeit und Home/persönliche *Art*. Den gleichen Adresseintrag auf den privaten und persönlichen *Typ* verweisen. Nur ein Eintrag ist für jeden *Typ* zulässig..

*   **Organisationen**: nur zulässig ist, und unterstützt nicht die Attribute *Pref*, *Typ*und *Abteilung* .

*   **Hinweis**: nicht unterstützt, Rückgabe`null`.

*   **IMS**: nicht unterstützt, Rückgabe`null`.

*   **Geburtstage**: nicht unterstützt, Rückgabe`null`.

*   **Kategorien**: nicht unterstützt, Rückgabe`null`.